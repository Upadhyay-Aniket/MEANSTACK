const express = require("express");
const fs = require("fs");
const path = require("path"); // Import the 'path' module
const dir = "./public";
const port = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  render(res, "index.html");
});

app.get("/about", (req, res) => {
  render(res, "about.html");
});

app.get("/contact", (req, res) => {
  render(res, "contact.html");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

const render = (res, file) => {
  const filePath = path.join(dir, file); // Construct the full file path
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error(err); // Log the error
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 File Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
};
