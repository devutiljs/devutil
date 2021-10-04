# DevUtilJS

Useful JavaScript development utilities.

## Installation

### JavaScript file

 * Download whole repository or just a single [devutil.js](dist/devutil.js) file
 * Add to .html file (`<head>` section):
   * <script src="devutil.js"></script>
 * Call JavaScript function from your JavaScript code, example:
   * <script type="application/javascript">console.log(DevUtil.isTrue(true));</script>

## Functions list

| JavaScript function   | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| DevUtil.isDefined()   | `true`: if variable is defined, `false`: otherwise          |
| DevUtil.isUndefined() | `true`: if variable is undefined, `false`: otherwise        |
| DevUtil.isTrue()      | `true`: if variable equals to **true**, `false`: otherwise  |
| DevUtil.isFalse()     | `true`: if variable equals to **false**, `false`: otherwise |