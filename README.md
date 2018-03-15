# obento-cp
obento-cp executes the registered function at high speed without using the for statement.

## Installation
Yarn:
```bash
yarn add obento-notice
```

npm:
```bash
npm install --save obento-notice
```

## Example
```javascript
var notice = require('obento-notice');

var fc1 = function() {
  console.log('fc1');
}
var fc2 = function() {
  console.log('fc2');
}
notice.listen('pubId', fc1);
notice.listen('pubId', fc2);

notice.publish('pubId');
// 'fc1'
// 'fc2'
```