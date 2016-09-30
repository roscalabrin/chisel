const chai = require('chai')
const assert = chai.assert
const Chisel = require('../lib/main')

describe('Chisel Exists', function () {
  beforeEach(done => {
    this.chisel = new Chisel()
    done()
  })

  it('should load Chisel just fine', () => {
    assert.equal(typeof this.chisel, 'object')
  })
})