# timediff
Calculate a time difference in several time units.

## Usage

```sh
$ npm install --save timediff
```

```js
var timediff = require('timediff');

// return the timediff in all possible units
timediff(new Date(2015, 1, 1), new Date('2018-05-02 02:15:10'));
// => { years: 3, months: 3, weeks: 0, days: 1, hours: 2, minutes: 15, seconds: 10, milliseconds: 0 }

// return the timediff only in years, weeks, days hours and seconds
timediff(new Date(2015, 1, 1), new Date('2018-05-02 02:15:10.777'), 'YWDHS');
// => { years: 3, weeks: 12, days: 6, hours: 2, seconds: 910 }

// return the timediff only in month, minutes seconds, and milliseconds
timediff(new Date(2015, 1, 1), new Date('2018-05-02 02:15:10.777'), 'MmSs');
// => { months: 39, minutes: 1575, seconds: 10, milliseconds: 777 }

// provide the result to a callback and return the result of the callback
timediff('1969-06-09T06:09:06.069Z', new Date(), function (result) {
  var strings = [];
  for(var key in result) {
    strings.push(result[key] + ' ' + key);
  }
  return 'age: ' + strings.join(', ');
});
// => 'age: 45 years, 7 months, 0 weeks, 6 days, 5 hours, 54 minutes, 5 seconds, 257 milliseconds'

// combine all options
var christmas = new Date(); christmas.setMonth(11); christmas.setDate(24);
timediff(new Date(), christmas, {
  units: 'MWD',
  returnZeros: false,
  callback: function (result) {return 'Time until christmas: ' + JSON.stringify(result);}
});
// => 'Time until christmas: {"months":11,"weeks":1,"days":1}'
```

