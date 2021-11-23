const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const colors = require("colors"); // eslint-disable-line
const feeds = require("./Data/feeds");
const contactInfo = require("./Data/contactInfo");
const calculateFibonacciNumber = require("./utils/fibonacci");

const server = http.createServer((req, res) => {
  const requestStart = Date.now();

  // parse url to take query parameters and path
  const queryObject = url.parse(req.url, true).query;

  const userPath = url.parse(req.url, true).pathname;

  res.on("finish", () => {
    const { method, rawHeaders, httpVersion, socket } = req;
    const { remoteAddress, remoteFamily } = socket;
    const { statusCode, statusMessage } = res;
    const headers = res.getHeaders();
    const logData = {
      timestamp: Date.now(),
      processingTime: Date.now() - requestStart,
      rawHeaders,
      httpVersion,
      userPath,
      method,
      queryObject,
      remoteAddress,
      remoteFamily,
      response: {
        statusCode,
        statusMessage,
        headers,
      },
    };

    fs.appendFile(
      path.join(__dirname, "/Analytics", "log.txt"),
      `${JSON.stringify(logData)}\n*******************\n`,
      (err) => {
        if (err) {
          fs.appendFile(
            path.join(__dirname, "/Analytics", "errors.txt"),
            `${err.message}\n*******************\n`,
            (error) => {
              console.log(error.message);
            }
          );
          console.log(err.message);
        }
        console.log(
          "Request has been logged. Please look into /Analytics/log.txt".magenta
            .underline
        );
      }
    );
  });

  // paths and their corresponding responses
  if (userPath === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "Welcome Page",
      })
    );
    res.end();
  } else if (userPath === "/fibo" && req.method === "POST") {
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
  } else if (userPath === "/myFeed" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: feeds,
      })
    );
    res.end();
  } else if (userPath === "/about" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "About Page",
      })
    );
    res.end();
  } else if (userPath === "/contact" && req.method === "GET") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: contactInfo,
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
