# DevUtil.js

Useful JavaScript development utilities (functions).

## Installation

You can download a JavaScript file or install it via 'npm' package manager. 

### JavaScript file

Download whole repository or just a single [devutil.min.js](dist/devutil.min.js) file.

### 'npm' package manager

1. Install [npm](https://www.npmjs.com), if it's not installed

2. Run console command:

`npm install @devutil/devutil`


## Usage

1. Add `<script>` tag to .html file (`<head>` section):

`<script src="devutil.min.js"></script>`

2. Call JavaScript function from your JavaScript code, for example:
```javascript
<script type="application/javascript">
  console.log(DevUtil.isTrue(true));
</script>
```


## Functions list

### Common functions

| JavaScript function   | Description                                                         | Unit tests                                                     |
| --------------------- | ------------------------------------------------------------------- | -------------------------------------------------------------- |
| DevUtil.isDefined()   | `true` if variable is defined, `false` otherwise                    | [common.test.js](test/common.test.js), 'Variable is defined'   |
| DevUtil.isUndefined() | `true` if variable is undefined, `false` otherwise                  | [common.test.js](test/common.test.js), 'Variable is undefined' |
| DevUtil.isTrue()      | `true` if variable's value equals to **true**, `false` otherwise    | [common.test.js](test/common.test.js), 'Variable is true'      |
| DevUtil.isFalse()     | `true` if variable's value equals to **false**, `false` otherwise   | [common.test.js](test/common.test.js), 'Variable is false'     |

### Mathematical functions

| JavaScript function                                  | Description                                     | Unit tests                                                             |
| ---------------------------------------------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| DevUtil.factorial(n)                                 | Factorial of a number 'n'                       | [math.test.js](test/math.test.js), 'Factorial'                         |
| DevUtil.triangleAreaThreeSides(side1, side2, side3)  | Calculate the area of a triangle on three sides | [math.test.js](test/math.test.js), 'Area of a triangle on three sides' |
| DevUtil.kilometersToMiles(kilometers)                | Convert kilometers to miles                     | [math.test.js](test/math.test.js), 'Convert kilometers to miles'       |
| DevUtil.isOdd(number)                                | Check if a number is odd                        | [math.test.js](test/math.test.js), 'Check if a number is odd'          |
| DevUtil.isEven(number)                               | Check if a number is even                       | [math.test.js](test/math.test.js), 'Check if a number is even'         |


## Unit tests

1. Install [npm](https://www.npmjs.com) package manager, if it's not installed

2. Install [Jest](https://jestjs.io) JavaScript testing framework, if it's not installed. For example, via 'npm':

`npm install --save-dev jest`

3. Run unit tests:

`npm run test`

## License

[MIT](LICENSE)

Copyright (c) 2021, [Andrey Kashukov](https://github.com/kashukov)