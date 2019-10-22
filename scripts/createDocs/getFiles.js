const fs = require('fs');
const join = require('path').join;

async function getJsonFiles(filePath) {
  let jsonFiles = [];

  function findJsonFile(path) {
    let files = fs.readdirSync(path);
    files.forEach(item => {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true) {
        findJsonFile(fPath);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  }
  findJsonFile(filePath);
  return jsonFiles
}
module.exports = getJsonFiles