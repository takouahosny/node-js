const fs = require("fs");
const path = require("path");

const filePath = path.resolve("content", "welcome.txt")
//nfs.writeFileSync(filePath, "hello node", { encoding: "utf8" });

const data = fs.readFileSync(filePath, { encoding: "utf-8" });
console.log(data);