// The difference between two numbers is what percent?
function differenceBetween(a, b, options = {}) {
  const val = parseFloat(((b - a) / a) * 100)
  if (options.verbose) {
    return `${b} is ${Math.abs(val)}% ${a > b ? 'less' : 'more'} than ${a}`
  }
  return val
}

// The absolute difference between two numbers is what percent?
function absoluteDifferenceBetween(a, b, options = {}) {
  const val = parseFloat(Math.abs(((b - a) / a) * 100))

  if (options.verbose) {
    return `${b} is ${val}% ${a > b ? 'less' : 'more'} than ${a}`
  }

  return val
}

// What percent is one number of another?
function calculate(a, b, options = {}) {
  const val = parseFloat((a * 100) / b)

  if (options.verbose) {
    return `${a} is ${val}% of ${b}`
  }

  return val
}

// What is the given percentage of a number?
function of(percentage, number, options = {}) {
  const val = parseFloat(number * (percentage / 100))

  if (options.verbose) {
    return `${percentage}% of ${number} is ${val}`
  }

  return val
}

// A given percent extension from one number to another is what?
function extension(percentage, a, b, options = {}) {
  const movement = Math.abs(a - b)
  const val =
    a > b
      ? parseFloat(a - (movement * percentage) / 100)
      : parseFloat(a + (movement * percentage) / 100)

  if (options.verbose) {
    return `${val} is the ${percentage}% extension from ${a} to ${b}`
  }

  return val
}

const percentage = {
  differenceBetween,
  absoluteDifferenceBetween,
  calculate,
  of,
  extension,
}

module.exports = percentage
