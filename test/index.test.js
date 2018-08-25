const shell = require('shelljs')
const sinon = require('sinon')

require('../src')

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
  const orglExec = shell.exec
  const execStub = sinon.stub()
  execStub
    .withArgs('git shortlog HEAD -se')
    .returns(
      shell.ShellString(
        '  24\tAndrew Powlowski <Andrew_Powlowski@yahoo.com>\n' +
          '  39\tGregorio Heaney <Gregorio.Heaney43@yahoo.com>\n' +
          '  99\tHallie Paucek <Hallie.Paucek@yahoo.com>\n' +
          '  70\tMervin Graham <Mervin69@yahoo.com>\n' +
          '  55\tMiller Reichel <Miller_Reichel@yahoo.com>\n'
      )
    )
  shell.exec = execStub

  expect(shell.authors().stdout).toMatchInlineSnapshot(`
"Andrew Powlowski <Andrew_Powlowski@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Hallie Paucek <Hallie.Paucek@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>"
`)

  shell.exec = orglExec
})

it('creates a number of commits per author sorted list when the numbered option is passed', () => {
  const orglExec = shell.exec
  const execStub = sinon.stub()
  execStub
    .withArgs('git shortlog HEAD -sen')
    .returns(
      shell.ShellString(
        '  99\tHallie Paucek <Hallie.Paucek@yahoo.com>\n' +
          '  70\tMervin Graham <Mervin69@yahoo.com>\n' +
          '  55\tMiller Reichel <Miller_Reichel@yahoo.com>\n' +
          '  39\tGregorio Heaney <Gregorio.Heaney43@yahoo.com>\n' +
          '  24\tAndrew Powlowski <Andrew_Powlowski@yahoo.com>\n'
      )
    )
  shell.exec = execStub

  expect(shell.authors('-n').stdout).toMatchInlineSnapshot(`
"Hallie Paucek <Hallie.Paucek@yahoo.com>
Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Andrew Powlowski <Andrew_Powlowski@yahoo.com>"
`)

  shell.exec = orglExec
})
