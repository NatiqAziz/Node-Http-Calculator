const addition = (req, res) => {
  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    const newChunk = Buffer.concat(chunks).toString();
    const params = new URLSearchParams(newChunk);

    const firstNumber = Number(params.get("firstNum"));
    const secondNumber = Number(params.get("secondNum"));
    const result = firstNumber + secondNumber;

    res.setHeader("Content-Type", "text/html");
    res.write(`
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculation Result</title>
    </head>
    <body>
      <h1>Your result is = ${result}</h1>
      <h2><a href="/calculator">Calculate again</a></h2>
    </body>
  </html>
      `);
    return res.end();
  });
};

exports.addition = addition;
