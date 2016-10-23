const statefulTitle = require('../dist/stateful-title')

test('update title', () => {
  const title = statefulTitle('old title')
  title('new title')
  expect(document.title).toBe('new title')
  title()
  expect(document.title).toBe('old title')
})

test('set initial title', () => {
  statefulTitle('initial title', true)
  expect(document.title).toBe('initial title')
})
