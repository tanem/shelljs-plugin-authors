const shell = require('shelljs')

require('../src')

const commitData = new Map([
  [1, 'Andrew Powlowski <Andrew_Powlowski@yahoo.com>'],
  [4, 'Gregorio Heaney <Gregorio.Heaney43@yahoo.com>'],
  [7, 'Hallie Paucek <Hallie.Paucek@yahoo.com>'],
  [11, 'Mervin Graham <Mervin69@yahoo.com>'],
  [15, 'Miller Reichel <Miller_Reichel@yahoo.com>'],
])

beforeAll(() => {
  shell.config.resetForTesting()
  shell.cd(__dirname)
  shell.mkdir('tmp')
  shell.cd('tmp')
  shell.exec('git init')
  shell.touch('file.js')
  for (let [count, author] of commitData) {
    while (count--) {
      new shell.ShellString('stuff').toEnd('file.js')
      shell.exec(
        `git add --all && git commit -m "Message" --author "${author}"`
      )
    }
  }
})

afterAll(() => {
  shell.cd(__dirname)
  shell.rm('-rf', 'tmp')
})

it('gets added to the shelljs instance', () => {
  expect(shell.authors).toBeInstanceOf(Function)
})

it('does not override other commands or methods', () => {
  expect(shell.cp).toBeInstanceOf(Function)
  expect(shell.mv).toBeInstanceOf(Function)
  expect(shell.ls()).toHaveProperty('toEnd')
  expect(shell.ls()).toHaveProperty('grep')
  expect(shell.ls()).toHaveProperty('sed')
})

it('creates an author alphabetically sorted list by default', () => {
  expect(shell.authors().stdout).toMatchInlineSnapshot(`
    "Andrew Powlowski <Andrew_Powlowski@yahoo.com>
    Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
    Hallie Paucek <Hallie.Paucek@yahoo.com>
    Mervin Graham <Mervin69@yahoo.com>
    Miller Reichel <Miller_Reichel@yahoo.com>"
  `)
})

it('creates a number of commits per author sorted list when the numbered option is passed', () => {
  expect(shell.authors('-n').stdout).toMatchInlineSnapshot(`
    "Miller Reichel <Miller_Reichel@yahoo.com>
    Mervin Graham <Mervin69@yahoo.com>
    Hallie Paucek <Hallie.Paucek@yahoo.com>
    Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
    Andrew Powlowski <Andrew_Powlowski@yahoo.com>"
  `)
})
