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
  cookie: '__cfduid=d49cf8f975443623a42cea16ce958f1d51505577150; LEETCODE_SESSION=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbnppY2hpIiwidXNlcl9zbHVnIjoiaGFuemljaGkiLCJfYXV0aF91c2VyX2lkIjoiMjA3MDc0IiwiUkVNT1RFX0FERFIiOiIxNzIuNjguMTMyLjUiLCJ0aW1lc3RhbXAiOiIyMDE3LTA5LTMwIDA4OjI0OjUzLjg0MjM5NCswMDowMCIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImRqYW5nby5jb250cmliLmF1dGguYmFja2VuZHMuTW9kZWxCYWNrZW5kIiwiaWQiOjIwNzA3NCwiX3Nlc3Npb25fZXhwaXJ5IjowLCJfYXV0aF91c2VyX2hhc2giOiI2NzczMjI0M2YwZjhjMmZlMDVhMDBkMmVjN2E3NjBjYjhjYWY3Y2I2IiwiZW1haWwiOiJiaWdiaWdzdW5yaXNlQGZveG1haWwuY29tIiwiSURFTlRJVFkiOiJkYzkxOTI4NmE3YjFhOTAxZWI4YzJlYjJhYWM2NzIwNiJ9.VISGbiIlFirZxAFBE-hS_WsRTc2bqoOu173RwdXe6RU; _ga=GA1.2.783262919.1488459467; _gid=GA1.2.1984063667.1507463694; csrftoken=ibul4lK9xgp6oErImXb2gf1ZJpGDTwZQku3pn0RQbqBsBL6etp7EuSEcuhBOVP3Q; __atuvc=0%7C37%2C0%7C38%2C5%7C39%2C5%7C40%2C3%7C41; __atuvs=59da2970e14d45b2000',
  // from local
  baseLocalSrc: 'Algorithms/',
  markdownFileSrc: 'readme.md',
  // from the net
  baseNetSrc: 'https://github.com/hanzichi/leetcode/blob/master/Algorithms/',
  api: 'https://leetcode.com/api/problems/algorithms/',
  ua: 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36'
};

function makeMarkdownFile(data) {
  let {problems, num_total, num_solved, num_locked} = data;

  // use ES6 template string
  let tpl =
`# Leetcode Solutions with JavaScript [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

Update time: ${new Date}

I have solved **${num_solved} / ${num_total}** problems while **${num_locked}** problems are still locked.

(Notes: :blue_book: means you need to buy a book from Leetcode)

| # | Title | Source Code | Explanation | Difficulty |
|:---:|:---:|:---:|:---:|:---:|
`
  // sort by the problemId desc
  problems.sort((a, b) => b.problemId - a.problemId);

  problems.forEach(item => {
    let {problemId, title, url, languageJS, sourceCodeJS, languagePY, sourceCodePY, languageCPP, sourceCodeCPP, explanation, difficulty, isSolved, isLocked} = item;
    tpl += `| ${problemId} | [${title}](${url}) `;

    if (isLocked)
      tpl += ':blue_book: ';

    if (isSolved) {
      let languageArray = [];
      if (languageJS)
        languageArray.push(`[${languageJS}](${sourceCodeJS})`)
      if (languagePY)
        languageArray.push(`[${languagePY}](${sourceCodePY})`)
      if (languageCPP)
        languageArray.push(`[${languageCPP}](${sourceCodeCPP})`)

      tpl += '| ' + languageArray.join(' ') + ' '
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

    ep.after('read', data.num_solved, problems => {
      resolve(data);
    });

    data.problems.forEach(p => {
      if (p.isSolved) {
        let fileSrc = CONFIG.baseLocalSrc + p.title.trim();

        fs.readdir(fileSrc, (err, files) => {
          if (err) {
            console.error(fileSrc)
            return
          }

          files.forEach((fileName) => {
            if (fileName.endsWith("md")) {
              p.explanation = encodeURI(baseNetSrc + p.title + '/' + fileName);
            } else {
              // language -> JavaScript / Python / C++
              if (fileName.endsWith("js")) {
                p.languageJS = "JavaScript";
                p.sourceCodeJS = encodeURI(baseNetSrc + p.title + '/' + fileName);
              } else if (fileName.endsWith("cpp")) {
                p.languageCPP = "C++";
                p.sourceCodeCPP = encodeURI(baseNetSrc + p.title + '/' + fileName);
              } else if (fileName.endsWith("py")) {
                p.languagePY = "Python";
                p.sourceCodePY = encodeURI(baseNetSrc + p.title + '/' + fileName);
              }
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

        let problems = stat_status_pairs.map(item => {
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
makeRequest().then(data => {
  return dealWithFile(data);
}).then(data => {
  return makeMarkdownFile(data);
}).then(msg => {
  console.log(msg);
});
