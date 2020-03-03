const fs = require('fs')
const path = require('path')
const getAllFiles = require('./getFiles')
const analysis = require('./analysis')
const note2md = require('./note2md')

const src = path.resolve(__dirname, '../../src')

const arrayPath = path.resolve(src, 'array')
const functionPath = path.resolve(src, 'function')
const objectPath = path.resolve(src, 'object')
const stringPath = path.resolve(src, 'string')

async function getMD(filePath) {
  let docsStr = ''
  let files = await getAllFiles(filePath)
  files.forEach(file => {
    if (fs.statSync(file).isDirectory()) { //兼容以文件夹形式编写的复杂方法
      file = path.resolve(file, 'index.ts')
    }
    let content = fs.readFileSync(file, 'utf-8')
    docsStr += note2md(analysis(content))
  })
  return docsStr
}

async function createDocs(templStr = '') {
  return templStr
    .replace('{{Array}}', await getMD(arrayPath))
    .replace('{{Function}}', await getMD(functionPath))
    .replace('{{Object}}', await getMD(objectPath))
    .replace('{{String}}', await getMD(stringPath))
}

async function writeDocs() {
  let templPath = path.resolve(__dirname, './template/README.md')
  let templStr = fs.readFileSync(templPath, 'utf-8')
  let docsStr = await createDocs(templStr)
  fs.writeFileSync(path.resolve(__dirname, '../../README.md'), docsStr, 'utf-8')
}

writeDocs()