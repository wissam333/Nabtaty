const app = require("./.output/server/index.mjs");
const http = require("http");

http.createServer(app).listen(process.env.PORT);
