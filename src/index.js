const http = require("http");
const url = require("url");
const colors = require("colors"); // eslint-disable-line
const feeds = require("./feeds");
const calculateFibonacciNumber = require("./utils/fibonacci");

const server = http.createServer((req, res) => {
  // parse url to take query parameters and path
  const queryObject = url.parse(req.url, true).query;
  const path = url.parse(req.url, true).pathname;
  const { method } = req;

  // paths and their corresponding responses
  if (path === "/" && method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "Welcome Page",
      })
    );
    res.end();
  } else if (path === "/fibo" && method === "POST") {
    if (queryObject.num) {
      new Promise((resolve, reject) => {
        if (!isNaN(queryObject.num)) {
          const nthFibonacciNumber = calculateFibonacciNumber(queryObject.num);
          if (nthFibonacciNumber) {
            resolve(nthFibonacciNumber);
          } else {
            reject(new Error("Failed to calculate fibonacci number"));
          }
        } else {
          reject(new Error("Parameter is not a number"));
        }
      })
        .then((result) => {
          res.writeHead(200, { "Content-type": "application/json" });
          res.write(
            JSON.stringify({
              success: true,
              data: result,
            })
          );
          res.end();
        })
        .catch((err) => {
          res.writeHead(500, { "Content-type": "application/json" });
          res.write(
            JSON.stringify({
              success: false,
              error: err.message,
              data: null,
            })
          );
          res.end();
        });
    } else {
      res.writeHead(400, { "Content-type": "application/json" });
      res.write(
        JSON.stringify({
          success: false,
          data: "Please provide a number in the query. Example: /fibo?num=12",
        })
      );
      res.end();
    }
  } else if (path === "/myFeed" && method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: feeds,
      })
    );
    res.end();
  } else if (path === "/about" && method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "About Page",
      })
    );
    res.end();
  } else if (path === "/contact" && method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "Contact Page",
      })
    );
    res.end();
  } else {
    res.writeHead(404, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: false,
        error: "Page not found",
        data: null,
      })
    );
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});
