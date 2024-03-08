const { describe, it, expect } = require('jest')

describe('Test hello world api', () => {
  it('should always return Hello World', async () => {
    const res = await fetch('http://localhost:1234')
    const data = await res.text()
    expect(data).toEqual('Hello 4INFO-D !\n')
  })
})
