const shell = require('shelljs')

require('../src')

// Provide a fake `git shortlog -se` response.
shell.exec = jest
  .fn()
  .mockReturnValue(
    shell.ShellString(
      '  24\tAndrew Powlowski <Andrew_Powlowski@yahoo.com>\n' +
        '  39\tGregorio Heaney <Gregorio.Heaney43@yahoo.com>\n' +
        '  99\tHallie Paucek <Hallie.Paucek@yahoo.com>\n' +
        '  70\tMervin Graham <Mervin69@yahoo.com>\n' +
        '  55\tMiller Reichel <Miller_Reichel@yahoo.com>\n'
    )
  )

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

it('creates the correct authors string', () => {
  expect(shell.authors().stdout).toMatchInlineSnapshot(`
"Andrew Powlowski <Andrew_Powlowski@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Hallie Paucek <Hallie.Paucek@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>"
`)
})
