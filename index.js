const express = require("express");
const { fork } = require("child_process");

const app = express();
const port = 3000;

app.get("/nofork", (req, res) => {
  const sum = delayFunc(req.query.no);
  res.send({ sum: sum });
});

app.get("/withfork", (req, res) => {
  const child = fork("./longTask.js");
  child.send(req.query.no);
  child.on("message", (sum) => {
    res.send({ sum: sum });
  });
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});

const delayFunc = (no) => {
  let sum = 0;
  for (let i = 0; i < no; i++) {
    sum += 1;
  }
  return sum;
};
