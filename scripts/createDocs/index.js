const fs = require('fs')
const path = require('path')
const getAllFiles = require('./getFiles')
const analysis = require('./analysis')
const note2md = require('./note2md')

const src = path.resolve(__dirname, '../../src')

let docsStr = ''
getAllFiles(src).then(files => {
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8')
    docsStr += note2md(analysis(content))
  })
  let readmePath = path.resolve(__dirname, '../../README.md')
  let oldReadme = fs.readFileSync(readmePath, 'utf-8')
  let newReadme = oldReadme.replace(/(##\sAPI)[\s\S]+?(\n##\s)/, `## API\n${docsStr}\n## `)
  fs.writeFileSync(path.resolve(__dirname, '../../README.md'), newReadme, 'utf-8')
})