let parttern = /\/\*[\s\S]+?\*\//g

function removeSign(e) {
  return e.replace(/@\w+?(\s|\b)/g, '').trim()
}

function parseStatment(e) {
  let type, name, desc
  try {
    type = e.match(/\{.+?\}/g)[0].replace(/[{}]/g, '')
  } catch { type = "" }
  try {
    name = e.replace(/\{.+?\}/g, '').match(/[a-zA-Z\d]+/g)[0]
  } catch { name = '' }
  try {
    desc = e.replace(/(\{.+?\})(\s?)+?[a-zA-Z\d]*/, '').trim()
  } catch { desc = "" }
  return { type, name, desc }
}

function format(content) {
  if (!content) return null
  let name, desc, params, returns, example
  let texts = content
    .split(/\n+/)
    .filter(e => !/^[\s/*]+$/g.test(e))
    .map(e => e.replace(/^\s\*\s/g, ''))
  name = texts.filter(e => e.startsWith('@name')).map(removeSign).join('\n')
  desc = texts.filter(e => e.startsWith('@description')).map(removeSign).join('\n')
  params = texts.filter(e => e.startsWith('@param')).map(removeSign).map(parseStatment)
  returns = texts.filter(e => e.startsWith('@returns')).map(removeSign).map(parseStatment)
  let index = texts.findIndex(e => e.startsWith('@example'))
  example = ~index ?
    texts.slice(index + 1).join('\n') :
    ''

  return {
    name,
    desc,
    params,
    returns,
    example
  }
}


function getNotes(content) {
  try {
    let notes = content.match(parttern)[0]
    return format(notes)
  } catch (err) {
    console.log(err)
    return ''
  }
}

module.exports = getNotes