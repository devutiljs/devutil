# DevUtil.js

Useful JavaScript development utilities (functions).

## Installation

You can download JavaScript file directly or install it via 'npm' package manager. 

### JavaScript file

Download whole repository or just a single [devutil.js](dist/devutil.js) file.

### 'npm' package manager

1. Install [npm](https://www.npmjs.com), if it's not installed

2. Run console command:

`npm install @devutil/devutil`


## Usage

1. Add to .html file (`<head>` section):

`<script src="devutil.js"></script>`

2. Call JavaScript function from your JavaScript code, example:
```javascript
<script type="application/javascript">
  console.log(DevUtil.isTrue(true));
</script>
```


## Functions list

| JavaScript function   | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| DevUtil.isDefined()   | `true` if variable is defined, `false` otherwise                  |
| DevUtil.isUndefined() | `true` if variable is undefined, `false` otherwise                |
| DevUtil.isTrue()      | `true` if variable's value equals to **true**, `false` otherwise  |
| DevUtil.isFalse()     | `true` if variable's value equals to **false**, `false` otherwise |

## Unit tests

1. Install [npm](https://www.npmjs.com) package manager, if it's not installed

2. Install [Jest](https://jestjs.io) framework, if it's not installed. For example, via 'npm':

`npm install --save-dev jest`

3. Run unit tests:

`npm run test`

## License

[MIT](LICENSE)

Copyright (c) 2021, [Andrey Kashukov](https://github.com/kashukov)