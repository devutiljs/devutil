# DevUtil.js

Useful JavaScript development utilities (functions).

## Usage

### JavaScript file

1. Download whole repository or just a single [devutil.js](dist/devutil.js) file.

2. Add to .html file (`<head>` section):

`<script src="devutil.js"></script>`

3. Call JavaScript function from your JavaScript code, example:
```javascript
<script type="application/javascript">
  console.log(DevUtil.isTrue(true));
</script>
```

## Functions

| JavaScript function   | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| DevUtil.isDefined()   | `true` if variable is defined, `false` otherwise                  |
| DevUtil.isUndefined() | `true` if variable is undefined, `false` otherwise                |
| DevUtil.isTrue()      | `true` if variable's value equals to **true**, `false` otherwise  |
| DevUtil.isFalse()     | `true` if variable's value equals to **false**, `false` otherwise |

## Unit tests

1. Install [npm](https://www.npmjs.com) package manager

2. Install [Jest](https://jestjs.io) framework. For example, using the 'npm':

`npm install --save-dev jest`

3. Execute console command, to run the unit tests:

`npm run test`

## License

[MIT](LICENSE)

Copyright (c) 2021, [Andrey Kashukov](https://github.com/kashukov)