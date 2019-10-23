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
    let content = fs.readFileSync(file, 'utf-8')
    docsStr += note2md(analysis(content))
  })
  return docsStr
}

async function createDocs() {
  return `
### Array
${await getMD(arrayPath)}
### Function
${await getMD(functionPath)}
### Object
${await getMD(objectPath)}
### String
${await getMD(stringPath)}
  `
}

async function writeDocs() {
  let readmePath = path.resolve(__dirname, '../../README.md')
  let oldReadme = fs.readFileSync(readmePath, 'utf-8')
  let docsStr = await createDocs()
  let newReadme = oldReadme.replace(/(##\sAPI)[\s\S]+?(\n##\s)/, `## API\n${docsStr}\n## `)
  fs.writeFileSync(path.resolve(__dirname, '../../README.md'), newReadme, 'utf-8')
}

writeDocs()