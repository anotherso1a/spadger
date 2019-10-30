const fs = require('fs');
const join = require('path').join;

async function getJsonFiles(filePath,deep=Infinity) {
  let jsonFiles = [];

  function findJsonFile(path,deep) {
    let files = fs.readdirSync(path);
    files.forEach(item => {
      let fPath = join(path, item);
      let stat = fs.statSync(fPath);
      if (stat.isDirectory() === true && deep) {
        findJsonFile(fPath,deep--);
      }
      if (stat.isFile() === true) {
        jsonFiles.push(fPath);
      }
    });
  }
  findJsonFile(filePath,deep);
  return jsonFiles
}
module.exports = getJsonFiles