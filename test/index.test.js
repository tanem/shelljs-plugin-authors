const faker = require('faker')
const shell = require('shelljs')

require('../src')

faker.seed(123)

// Provide a fake git shortlog response.
shell.exec = jest.fn().mockReturnValue(
  shell.ShellString(
    new Array(5).fill().map(() => {
      const count = faker.random.number(100)
      const firstName = faker.name.firstName()
      const lastName = faker.name.lastName()
      const email = faker.internet.email(firstName, lastName)
      return `  ${count}\t${firstName} ${lastName} <${email}>`
    })
  )
)

test('gets added to the shelljs instance', () => {
  expect(shell.authors).toBeInstanceOf(Function)
})

test('does not override other commands or methods', () => {
  expect(shell.cp).toBeInstanceOf(Function)
  expect(shell.mv).toBeInstanceOf(Function)
  expect(shell.ls()).toHaveProperty('toEnd')
  expect(shell.ls()).toHaveProperty('grep')
  expect(shell.ls()).toHaveProperty('sed')
})

test('creates the correct authors string', () => {
  expect(shell.authors().stdout).toMatchInlineSnapshot(`
"Mervin Graham <Mervin69@yahoo.com>
Miller Reichel <Miller_Reichel@yahoo.com>
Hallie Paucek <Hallie.Paucek@yahoo.com>
Gregorio Heaney <Gregorio.Heaney43@yahoo.com>
Andrew Powlowski <Andrew_Powlowski@yahoo.com>"
`)
})
