const fs = require('fs-extra')
const concat = require('concat')
;(async function build() {
  const files = [
    './dist/wc-roy-b1-e1/runtime.js',
    './dist/wc-roy-b1-e1/polyfills.js',
    './dist/wc-roy-b1-e1/scripts.js',
    './dist/wc-roy-b1-e1/main.js',
  ]

  await fs.ensureDir('elements')
  await concat(files, 'elements/wc-roy.js')
})()
