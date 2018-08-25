const shell = require('shelljs')
const plugin = require('shelljs/plugin')

const authors = ({ numbered }) =>
  shell
    .exec(`git shortlog HEAD -se${numbered ? 'n' : ''}`, { silent: true })
    .sed(/ *\d+\t/g, '')
    .stdout.trim()

plugin.register('authors', authors, {
  cmdOptions: {
    n: 'numbered'
  }
})

exports.authors = authors
