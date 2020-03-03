module.exports = function note2md(obj) {
  if (!obj) return ''
  return `
#### ${obj.name}

${obj.desc||'无'}

**参数:**

${
  obj.params && obj.params.length
  ?'|类型|参数名|描述|\n|:-:|:-:|:-:|\n'+obj.params.map(e=>{
    let str = `|${e.type||'无'}|${e.name||'无'}|${e.desc||'无'}|\n`
    return str
  }).join('')
  :'无'
}
**返回值:**

${
  obj.returns && obj.returns.length
  ?'|类型|描述|\n|:-:|:-:|\n'+obj.returns.map(e=>{
    let str = `|${e.type||'无'}|${e.desc||'无'}|\n`
    return str
  }).join('')
  :'无'
}
**例子:**

\`\`\`js
${obj.example}
\`\`\`
`
}