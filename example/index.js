const shell = require('shelljs')
require('../src')
const authors = shell.authors()
shell.echo(authors.stdout)
