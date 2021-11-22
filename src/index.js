const http = require("http");
const colors = require("colors"); // eslint-disable-line
const feeds = require("./feeds");

const server = http.createServer((req, res) => {
  const { url } = req;

  if (url === "/") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "Welcome Page",
      })
    );
    res.end();
  } else if (url === "/login") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "Login Page",
      })
    );
    res.end();
  } else if (url === "/myFeed") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: feeds,
      })
    );
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.write(
      JSON.stringify({
        success: true,
        data: "About Page",
      })
    );
    res.end();
  } else if (url === "/contact") {
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
