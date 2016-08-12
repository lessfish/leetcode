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
  str += ":alarm_clock: update time: " + new Date;
  str += '\n\n';
  str += ":muscle: I have solved **" + solvedNum + " / " +  problemNum + "** problems!";
  str += '\n\n';
  str += ":lock: There are **" + lockedNum + "** problems locked."
  str += '\n\n';
  str += "---";
  str += '\n\n';
  str += '# :pencil2: Leetcode Solutions with JavaScript';
  str += '\n\n';
  str += 'If you have any question, please give me an [issue](https://github.com/hanzichi/leetcode/issues).';
  str += '\n\n';
  str += '(Notes: :blue_book: means you need to buy a book from Leetcode)';
  str += '\n\n';
  str += '| # | Title | Source Code | Explaination | Difficulty |';
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
    var explaination = item.explaination;
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

    if (explaination)
      str += '| ' + '[Explaination](' + explaination + ') ';
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
              p.explaination = encodeURI(baseNetSrc + p.title + '/' + fileName);
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
    .get("https://leetcode.com/problemset/algorithms/")
    .set("Cookie", "PHPSESSID=9iy8zsk5pw5xkyxwtkgewruh9g0ao3ix")  // login in
    .end(function(err, res) {
      var $ = cheerio.load(res.text);

      $('#problemList tbody tr').each(function(index, item) {
        var ele = $(item).children();
        var obj = {
          isSolved: ele.eq(0).html().indexOf("\"ac\"") !== -1,
          problemId: ele.eq(1).html(),
          title: ele.eq(2).find("a").text(),
          url: "https://leetcode.com" + ele.eq(2).find("a").attr("href"),
          isLocked: ele.eq(2).html().indexOf("fa") !== -1,
          difficulty: ele.eq(6).html()
        };

        ans.push(obj);

        problemNum ++;
        obj.isSolved && solvedNum ++;
        obj.isLocked && lockedNum ++;
      });

      // console.log(problemNum, solvedNum, lockedNum)
      dealWithFile();
    });
}

// start
makeRequest();