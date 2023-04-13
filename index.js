const express = require("express"); // express 모듈을 가져옴
const app = express(); // express 애플리케이션을 생성함
// const app2 = express()

const port = 3001; // Devevelopment PORTS: 1024 - 65535; PRODUCTION PORTS:  0-1023
// const port2 = 4000
const testRoute = require("./routes/myTestRoute"); // "./routes/myTestRoute" 모듈을 가져온다.
var calculatorRoute = require('./routes/calculatorRoute');

//swagger
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


app.use("/", express.static("public"));
// '/' 경로로 들어오는 모든 요청에 대해, 'public' 폴더를 정적 파일 서비스로 사용한다.
// app.use("/my-test-route", testRoute); // "/my-test-route" 경로로 들어오는 요청은 testRoute 모듈에서 처리한다.
app.use(express.json())
//creat a route to a router
app.use("/my-test-route", testRoute)
app.use("/calculator", calculatorRoute)

// app.get("/test", (req, res) => {
  // '/test' 경로로 GET 요청이 들어오면
// res.send("Hello World!"); // 'Hello World!' 문자열을 응답으로 보냄
// });

// app2.get('/', (req, res) => {
//     res.send('Hello World from Server 2!')
// })

app.listen(port, () => {
  //포트를 리스닝하는 함수
  console.log(`Example app listening at http://localhost:${port}`); // 포트가 열렸을 때 출력되는 메시지
});

// app2.listen(port2, () => {
//     console.log(`Server 2 listening at http://localhost:${port2}`)
// })
