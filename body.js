const { addition } = require("./add");

const body = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
    </head>
    <body>
      <h2>Welcome to Our Calculator App</h2>
      <h4>Calculator Link <a href="/calculator">Calculator</a></h4>
    </body>
  </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculator</title>
    </head>
    <body>
      <form action="/calculate-result" method="POST">
        <input type="number" name="firstNum" required placeholder="first-Num">
        <input type="number" name="secondNum" required placeholder="sec-Num">
        <button type="submit">Sum</button>
      </form>
    </body>
  </html>
      `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    
    return addition(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html lang="en">
    <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Error</title>
    </head>
    <body>
      <h1>404 Page Does Not Exist</h1>
      <h2><a href="/calculator">Go to Calculator</a></h2>
    </body>
  </html>
    `);
  return res.end();
};

module.exports = body;
