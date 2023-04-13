var express = require("express"); // express 모듈을 가져온다.

var router = express.Router(); // express 모듈에서 Router 객체를 가져온다.

router.get("/test", (req, res) => {
  // "/test" 경로로 GET 요청이 들어오면
  res.send("Hello World!"); // "Hello World!" 문자열을 응답으로 보냄
});

router.get("/test2", (req, res) => {
  // "/test2" 경로로 GET 요청이 들어오면
  res.send("Second test"); // "Second test" 문자열을 응답으로 보냄
});

module.exports = router;
