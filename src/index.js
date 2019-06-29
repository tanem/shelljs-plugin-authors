const shell = require('shelljs-exec-proxy')
const plugin = require('shelljs/plugin')

shell.config.silent = true

const authors = ({ numbered }) =>
  shell.git
    .shortlog('HEAD', `-se${numbered ? 'n' : ''}`)
    .sed(/ *\d+\t/g, '')
    .stdout.trim()

plugin.register('authors', authors, {
  cmdOptions: {
    n: 'numbered'
  }
})

exports.authors = authors
