const shell = require('shelljs')
const plugin = require('shelljs/plugin')

const authors = () =>
  shell
    .exec('git shortlog HEAD -se', { silent: true })
    .sed(/ *\d+\t/g, '')
    .stdout.trim()

plugin.register('authors', authors)

exports.authors = authors
