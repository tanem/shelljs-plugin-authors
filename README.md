# shelljs-plugin-authors

[![build status](https://img.shields.io/travis/tanem/shelljs-plugin-authors/master.svg?style=flat-square)](https://travis-ci.org/tanem/shelljs-plugin-authors)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/shelljs-plugin-authors.svg?style=flat-square)](https://codecov.io/gh/tanem/shelljs-plugin-authors)
[![npm version](https://img.shields.io/npm/v/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![npm downloads](https://img.shields.io/npm/dm/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

> A [ShellJS](https://github.com/shelljs/shelljs) plugin for generating a list of authors.

## Usage

```js
const shell = require('shelljs')
require('shelljs-plugin-authors')
const authors = shell.authors()
shell.echo(authors.stdout)
```

## Installation

```
$ npm install shelljs shelljs-plugin-authors --save
```

## License

MIT
