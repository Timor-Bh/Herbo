const http = require("http");
const port = process.env.port||8118;
const app = require("./app");
const server = http.createServer(app);
server.listen(port,function(){
    console.log("app running on port 8118")
});
