# shelljs-plugin-authors

[![npm version](https://img.shields.io/npm/v/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![build status](https://img.shields.io/github/workflow/status/tanem/shelljs-plugin-authors/CI?style=flat-square)](https://github.com/tanem/shelljs-plugin-authors/actions?query=workflow%3ACI)
[![coverage status](https://img.shields.io/codecov/c/github/tanem/shelljs-plugin-authors.svg?style=flat-square)](https://codecov.io/gh/tanem/shelljs-plugin-authors)
[![npm downloads](https://img.shields.io/npm/dm/shelljs-plugin-authors.svg?style=flat-square)](https://www.npmjs.com/package/shelljs-plugin-authors)
[![shelljs-plugin](https://img.shields.io/badge/shelljs-plugin-brightgreen.svg?style=flat-square)](https://github.com/shelljs/shelljs/wiki/Using-ShellJS-Plugins)

> A [ShellJS](https://github.com/shelljs/shelljs) plugin for generating a nicely formatted list of authors.

## Usage

Let's assume that we're inside a git repo, and the output of `git shortlog -se` gives us something like:

```
    24  Andrew Powlowski <Andrew_Powlowski@yahoo.com>
    39  Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
    55  Miller Reichel <Miller_Reichel@yahoo.com>
    70  Mervin Graham <Mervin69@yahoo.com>
    99  Hallie Paucek <Hallie.Paucek@yahoo.com>
```

We want to generate a nicely formatted list of authors sorted alphabetically by author name. There are two ways to do that with this module, first you can use it as a ShellJS plugin:

```js
const shell = require('shelljs')
require('shelljs-plugin-authors')
const authors = shell.authors()
shell.echo(authors.stdout)
/*
Andrew Powlowski <Andrew_Powlowski@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Hallie Paucek <Hallie.Paucek@yahoo.com>
*/
```

Or you can use it via the CLI:

```
$ shelljs-authors
Andrew Powlowski <Andrew_Powlowski@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Hallie Paucek <Hallie.Paucek@yahoo.com>
```

If you'd prefer the list be sorted by number of commits per author, pass the `-n` option:

```js
const shell = require('shelljs')
require('shelljs-plugin-authors')
const authors = shell.authors('-n')
shell.echo(authors.stdout)
/*
Hallie Paucek <Hallie.Paucek@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Andrew Powlowski <Andrew_Powlowski@yahoo.com>
*/
```

```
$ shelljs-authors -n
Hallie Paucek <Hallie.Paucek@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Andrew Powlowski <Andrew_Powlowski@yahoo.com>
```

## API

### Plugin

**Options**

- `-n` - _Optional_ Sort the list by number of commits per author.

**Example**

```js
shell.authors('-n')
```

### CLI

```
$ shelljs-authors -h

  Usage: shelljs-authors [options]

  Generate a nicely formatted list of authors

  Options:

    -V, --version   output the version number
    -n, --numbered  Sort by number of commits per author
    -h, --help      output usage information

  Examples:

    $ shelljs-authors
    $ shelljs-authors -n
```

## Installation

### Plugin

```
$ npm i -D shelljs shelljs-plugin-authors
```

### CLI

```
$ npm i -g shelljs shelljs-plugin-authors
```

## License

MIT
