# obento-notice
obento-notice is a library to easily realize the observer pattern

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