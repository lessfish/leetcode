// command: git update-index --assume-unchanged generate.js
// to make Git not to track this file anymore
// 还原: git update-index --no-assume-unchanged generate.js

// Notice:
// 注意这个 Cookie 要取 https://leetcode.com/api/problems/algorithms/ 下的
// 而不是 https://leetcode.com/ 下的
var Cookie = "OUTFOX_SEARCH_USER_ID_NCOO=1270182585.150294; LEETCODE_SESSION=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhhbnppY2hpIiwiX2F1dGhfdXNlcl9pZCI6IjIwNzA3NCIsInRpbWVzdGFtcCI6IjIwMTctMDEtMDMgMTQ6NTg6MjIuMTUxOTcxKzAwOjAwIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJpZCI6MjA3MDc0LCJfc2Vzc2lvbl9leHBpcnkiOjAsIl9hdXRoX3VzZXJfaGFzaCI6IjY3NzMyMjQzZjBmOGMyZmUwNWEwMGQyZWM3YTc2MGNiOGNhZjdjYjYiLCJlbWFpbCI6ImJpZ2JpZ3N1bnJpc2VAZm94bWFpbC5jb20ifQ.gGlzOUA0NxrfUYkvC8erEvcUTJYp32v2-rMujgO9vrQ; express.sid=s%3AuAx1lTlxg2OTvH1If4gvyZUpScHCQg42.L8TvyU2du93TkKd4KxDB7%2Bl6r%2FFR%2F%2FSBEZYyxBouiAw; csrftoken=kpvx6n4pFNFcDkYX5vfXYr83Zdz8cX0JV28iv3TjdfhPdwzClUPzkZCkqJBhPsIx; _gat=1; _ga=GA1.2.474225388.1483455439; __atuvc=26%7C2%2C7%7C3%2C137%7C4%2C8%7C5%2C42%7C6; __atuvs=589c27ef8a852166001"
var superagent = require("superagent");
var cheerio = require("cheerio");
var fs = require("fs");

// collect items
var ans = [];
var solvedNum = 0;
var problemNum = 0;
var lockedNum = 0;

function makeMarkdownFile() {
  var str = '';
  str += '# Leetcode Solutions in JavaScript';
  str += '\n';
  str += "Update time: " + new Date;
  str += '\n\n';
  str += "I have solved **" + solvedNum + " / " +  problemNum + "** problems ";
  str += "while **" + lockedNum + "** problems are still locked."
  str += '\n\n';
  str += 'If you have any question, please give me an [issue](https://github.com/hanzichi/leetcode/issues).';
  str += '\n\n';
  str += 'If you are loving solving leetcode problems in JavaScript, please contact me to enjoy it together!'
  str += '\n\n';
  str += '(Notes: :blue_book: means you need to buy a book from Leetcode)';
  str += '\n\n';
  str += '| # | Title | Source Code | Explanation | Difficulty |';
  str += '\n';
  str += '|:---:|:---:|:---:|:---:|:---:|';
  str += '\n';

  // sort by the problemId desc
  ans.sort(function(a, b) {
    return +b.problemId - +a.problemId;
  });

  for (var i = 0, len = ans.length; i < len; i++) {
    var item = ans[i];

    var problemId = item.problemId;
    var title = item.title;
    var url = item.url;
    var language = item.language;
    var sourceCode = item.sourceCode;
    var explanation = item.explanation;
    var difficulty = item.difficulty;
    var isSolved = item.isSolved;
    var isLocked = item.isLocked;

    str += '| ' + problemId + ' ';
    str += '| ' + '[' + title + '](' + url + ') ';

    if (isSolved)
      str += '| ' + '[' + language + '](' + sourceCode + ') ';
    else if (isLocked) {
      // | :blue_book:
      str += '| :blue_book: ';
    } else {
      str += '| ';
    }

    if (explanation)
      str += '| ' + '[Explanation](' + explanation + ') ';
    else {
      str += '| ';
    }

    str += '| ' + difficulty + ' |';
    str += '\n';
  }

  var makeDownFileSrc = "C:/wamp/www/github/leetcode/readme.md";
  fs.writeFile(makeDownFileSrc, str);
  console.log("success!");
}


function dealWithFile() {
  var baseLocalSrc = "C:/wamp/www/github/leetcode/Algorithms/";
  var baseNetSrc = "https://github.com/hanzichi/leetcode/blob/master/Algorithms/";

  for (var i = 0, len = ans.length; i < len; i++) {
    !function(i) {
      var p = ans[i];

      if (p.isSolved) {
        var fileSrc = baseLocalSrc + p.title;

        fs.readdir(fileSrc, function(err, files) {
          files.forEach(function(fileName) {
            if (~fileName.indexOf("md")) {
              p.explanation = encodeURI(baseNetSrc + p.title + '/' + fileName);
            }

            if (~fileName.indexOf("js")) {
              p.language = "JavaScript";
              p.sourceCode = encodeURI(baseNetSrc + p.title + '/' + fileName);
            } else if (~fileName.indexOf("cpp")) {
              p.language = "C++";
              p.sourceCode = encodeURI(baseNetSrc + p.title + '/' + fileName);
            }
          });
        });
      }
    }(i);
  }

  // delay 2000ms to make sure that async operations have been done
  // it's better to use eventproxy module
  setTimeout(function() {
    makeMarkdownFile();
  }, 2000);
}


function makeRequest() {
  superagent
    .get("https://leetcode.com/api/problems/algorithms/")
    .set("Cookie", Cookie)  // for logining in
    .set("User-Agent", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/49.0.2623.87 Safari/537.36")
    .end(function(err, res) {
      var str = res.text;
      var data = JSON.parse(str);
      var arr = data.stat_status_pairs;

      problemNum = data.num_total;
      solvedNum = data.num_solved;

      arr.forEach(function(item, index) {
        var obj = {
          isSolved: item.status === "ac",
          problemId: item.stat.question_id,
          title: item.stat.question__title,
          url: "https://leetcode.com/problems/" + item.stat.question__title_slug + '/',
          isLocked: item.paid_only === true,
          difficulty: ['', 'Easy', 'Medium', 'Hard'][item.difficulty.level]
        };

        ans.push(obj);
        obj.isLocked && lockedNum++;
      });

      dealWithFile();
    });
}

// start
makeRequest();
