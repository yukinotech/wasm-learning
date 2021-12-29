// const fs = require('fs')
// const bytes = fs.readFileSync(__dirname + '/number.wasm')

// let importObject = {

// }

// ;(async () => {
//   let obj = await WebAssembly.instantiate(new Uint8Array(bytes), importObject)
//   ;({ helloworld: hello_world } = obj.instance.exports)
//   hello_world()
// })()

const { parse } = require('@webassemblyjs/wast-parser')
const fs = require('fs')

const source = fs.readFileSync(__dirname + '/number.wat', { encoding: 'utf-8' })

const ast = parse(source)

console.log(ast)
