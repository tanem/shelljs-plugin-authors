# shelljs-plugin-authors

[![build status](https://img.shields.io/travis/tanem/shelljs-plugin-authors/master.svg?style=flat-square)](https://travis-ci.org/tanem/shelljs-plugin-authors)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/shelljs-plugin-authors.svg?style=flat-square)](https://codecov.io/gh/tanem/shelljs-plugin-authors)
[![npm version](https://img.shields.io/npm/v/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![npm downloads](https://img.shields.io/npm/dm/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

> A [ShellJS](https://github.com/shelljs/shelljs) plugin for generating a list of authors via `git shortlog`.

## Usage

### Plugin

```
$ npm i -D shelljs shelljs-plugin-authors
```

```js
const shell = require('shelljs')
require('shelljs-plugin-authors')

// Default sort is author alphabetic.
shell.authors().to('AUTHORS')

// You can also sort by number of commits per author.
shell.authors('-n').to('AUTHORS')
```

### CLI

```
$ npm i -g shelljs shelljs-plugin-authors
$ shelljs-authors > AUTHORS
$ shelljs-authors -n > AUTHORS
```

## License

MIT
