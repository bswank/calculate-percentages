const expect = require('chai').expect
const percentage = require('../index')

describe('percentage.differenceBetween', function () {
  it('Should calculate the percentage difference between two numbers', function () {
    const value = percentage.differenceBetween(120, 60)

    expect(value).to.be.equal(-50)
  })
})

describe('percentage.absoluteDifferenceBetween', function () {
  it('Should calculate the percentage absolute difference between two numbers', function () {
    const value = percentage.absoluteDifferenceBetween(120, 60)

    expect(value).to.be.equal(50)
  })
})

describe('percentage.calculate', function () {
  it('Should calculate what percent one number is of another', function () {
    const value = percentage.calculate(120, 60)

    expect(value).to.be.equal(200)
  })
})

describe('percentage.of', function () {
  it('Should calculate the given percentage of a number', function () {
    const value = percentage.of(120, 60)

    expect(value).to.be.equal(72)
  })
})

describe('percentage.extension', function () {
  it('Should calculate a given percent extension from one number to another', function () {
    const value = percentage.extension(50, 60, 120)

    expect(value).to.be.equal(90)
  })
})
