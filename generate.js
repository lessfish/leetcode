// to make Git not to track this file anymore
// git update-index --assume-unchanged generate.js
// recover
// git update-index --no-assume-unchanged generate.js

const superagent = require("superagent");
const cheerio = require("cheerio");
const fs = require("fs");
const eventproxy = require('eventproxy');

let CONFIG = {
  // cookie from -> https://leetcode.com/api/problems/algorithms/
  cookie: '',
  baseLocalSrc: '',
  markdownFileSrc: '',
  baseNetSrc: 'https://github.com/hanzichi/leetcode/blob/master/Algorithms/',
  api: 'https://leetcode.com/api/problems/algorithms/',
  ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'
};

function makeMarkdownFile(data) {
  let {problems, num_total, num_solved, num_locked} = data;

  // use ES6 template string
  let tpl =
`# Leetcode Solutions with JavaScript

Update time: ${new Date}

I have solved **${num_solved} / ${num_total}** problems while **${num_locked}** problems are still locked.

(Notes: :blue_book: means you need to buy a book from Leetcode)

| # | Title | Source Code | Explanation | Difficulty |
|:---:|:---:|:---:|:---:|:---:|
`
  // sort by the problemId desc
  problems.sort((a, b) => b.problemId - a.problemId);

  problems.forEach((item) => {
    let {problemId, title, url, language, sourceCode, explanation, difficulty, isSolved, isLocked} = item;
    tpl += `| ${problemId} | [${title}](${url}) `;

    if (isLocked)
      tpl += ':blue_book: ';

    if (isSolved) {
      tpl += `| [${language}](${sourceCode}) `;
    } else {
      tpl += '| ';
    }

    if (explanation)
      tpl += `| [Explanation](${explanation}) `;
    else {
      tpl += '| ';
    }

    tpl += `| ${difficulty} |`;
    tpl += '\n';
  })

  return new Promise((resolve, reject) => {
    fs.writeFile(CONFIG.markdownFileSrc, tpl, () => {
      resolve("saved!");
    });
  });
}


function dealWithFile(data) {
  return new Promise((resolve, reject) => {
    let ep = new eventproxy();
    let baseNetSrc = CONFIG.baseNetSrc;

    ep.after('read', data.num_solved, (problems) => {
      resolve(data);
    });

    data.problems.forEach((p) => {
      if (p.isSolved) {
        let fileSrc = CONFIG.baseLocalSrc + p.title;

        fs.readdir(fileSrc, (err, files) => {
          files.forEach((fileName) => {
            if (fileName.endsWith("md")) {
              p.explanation = encodeURI(baseNetSrc + p.title + '/' + fileName);
            } else {
              // language -> JavaScript/Python/C++
              if (fileName.endsWith("js")) {
                p.language = "JavaScript";
              } else if (fileName.endsWith("cpp")) {
                p.language = "C++";
              } else if (fileName.endsWith("py")) {
                p.language = "Python";
              }
              p.sourceCode = encodeURI(baseNetSrc + p.title + '/' + fileName);
            }
          });

          ep.emit('read', p);
        });
      }
    });
  });
}

function makeRequest() {
  return new Promise((resolve, reject) => {
    superagent
      .get(CONFIG.api)
      .set("Cookie", CONFIG.cookie)  // login in
      .set("User-Agent", CONFIG.ua)
      .end((err, res) => {
        let {stat_status_pairs, num_total, num_solved} = JSON.parse(res.text);
        let num_locked = 0;

        let problems = stat_status_pairs.map((item) => {
          let obj = {
            isSolved: item.status === "ac",
            problemId: item.stat.question_id,
            title: item.stat.question__title,
            url: "https://leetcode.com/problems/" + item.stat.question__title_slug + '/',
            isLocked: item.paid_only === true,
            difficulty: ['', 'Easy', 'Medium', 'Hard'][item.difficulty.level],
          };

          obj.isLocked && num_locked++;
          return obj;
        });

        resolve({problems, num_total, num_solved, num_locked});
      });
  });
}

// Promise
makeRequest().then((data) => {
  return dealWithFile(data);
}).then((data) => {
  return makeMarkdownFile(data);
}).then((msg) => {
  console.log(msg);
});
