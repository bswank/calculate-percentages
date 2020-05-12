# calculate-percentages

NOTE: This branch contains no tests and is reserved for a video I made on testing node.

`calculate-percentages` is a small utility that helps to calculate discounts, percentage changes, partial values, extensions, etc.

## Notes

- Based on [php-percentages](https://github.com/mattiasgeniar/php-percentages) by [Mattias Geniar](https://github.com/mattiasgeniar).
- WIP; tests coming soon

## Installation

```
npm i calculate-percentages
```

## Usage

CommonJS Require:

```js
const percentage = require('calculate-percentages')
```

ES6 Import:

```js
import percentage from 'calculate-percentages'
```

### Difference Between

The difference between two numbers is what percent?

```js
percentage.differenceBetween(40, 20) // -50
percentage.differenceBetween(40, 20, { verbose: true }) // 20 is 50% less than 40
```

### Absolute Difference Between

The absolute difference between two numbers is what percent?

```js
percentage.absoluteDifferenceBetween(40, 20) // 50
percentage.absoluteDifferenceBetween(40, 20, { verbose: true }) // 20 is 50% less than 40
```

### Calculate

What percent is one number of another?

```js
percentage.calculate(5, 80) // 6.25
percentage.calculate(5, 80, { verbose: true }) // 5 is 6.25% of 80
```

### Of

What is the given percentage of a number?

```js
percentage.of(12, 75) // 9
percentage.of(12, 75, { verbose: true }) // 12% of 75 is 9
```

### Extension

A given percent extension from one number to another is what?

```js
percentage.extension(90, 100, 200) // 190
percentage.extension(90, 100, 200, { verbose: true }) // 190 is the 90% extension from 100 to 200
```

### Options

The last argument of any method is an optional `options` object.

| Option    | Default | Use                                                        |
| --------- | ------- | ---------------------------------------------------------- |
| `verbose` | `false` | Returns the value in a plain English statement for context |

## License

MIT
