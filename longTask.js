const delayFunc = (no) => {
  let sum = 0;
  for (let i = 0; i < no; i++) {
    sum += 1;
  }
  return sum;
};

process.on("message", (no) => {
  const sum = delayFunc(no);
  process.send(sum);
  process.exit();
});
