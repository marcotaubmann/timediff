var moment = require('moment');
function timediff (start, end, options) {
  start = moment(start);
  if (!start.isValid()) throw 'invalid start date ' + start;
  end = moment(end);
  if (!end.isValid()) throw 'invalid end date ' + end;

  if (options instanceof String || typeof options === 'string') {
    options = {units: options};
  }

  if (typeof options === 'function') {
    options = {callback: options};
  }

  var config = {
    units: {
      years: true,
      months: true,
      weeks: true,
      days: true,
      hours: true,
      minutes: true,
      seconds: true,
      milliseconds: true
    },
    returnZeros: true,
    callback: null
  };

  if (options instanceof Object) {
    if (options.units instanceof String || typeof options.units === 'string') {
      if (options.units.search('Y') === -1) config.units.years = false;
      if (options.units.search('M') === -1) config.units.months = false;
      if (options.units.search('W') === -1) config.units.weeks = false;
      if (options.units.search('D') === -1) config.units.days = false;
      if (options.units.search('H') === -1) config.units.hours = false;
      if (options.units.search('m') === -1) config.units.minutes = false;
      if (options.units.search('S') === -1) config.units.seconds = false;
      if (options.units.search('s') === -1) config.units.milliseconds = false;
    } else if (typeof options.units == 'object') {
      if (!options.units.years  ) config.units.years   = false;
      if (!options.units.months ) config.units.months  = false;
      if (!options.units.weeks  ) config.units.weeks   = false;
      if (!options.units.days   ) config.units.days    = false;
      if (!options.units.hours  ) config.units.hours   = false;
      if (!options.units.minutes) config.units.minutes = false;
      if (!options.units.seconds) config.units.seconds = false;
      if (!options.units.milliseconds ) config.units.milliseconds  = false;
    }

    if (options.returnZeros === false) config.returnZeros = false;
    if (typeof options.callback === 'function') config.callback = options.callback;
  }

  var result = {};

  if (config.units.years) {
    var years = end.diff(start, 'years');
    start.add(years, 'years');
    if (config.returnZeros || years != 0) result.years = years;
  }

  if (config.units.months) {
    var months = end.diff(start, 'months');
    start.add(months, 'months');
    if (config.returnZeros || months != 0) result.months = months;
  }

  if (config.units.weeks) {
    var weeks = end.diff(start, 'weeks');
    start.add(weeks, 'weeks');
    if (config.returnZeros || weeks != 0) result.weeks = weeks;
  }

  if (config.units.days) {
    var days = end.diff(start, 'days');
    start.add(days, 'days');
    if (config.returnZeros || days != 0) result.days = days;
  }

  if (config.units.hours) {
    var hours = end.diff(start, 'hours');
    start.add(hours, 'hours');
    if (config.returnZeros || hours != 0) result.hours = hours;
  }

  if (config.units.minutes) {
    var minutes = end.diff(start, 'minutes');
    start.add(minutes, 'minutes');
    if (config.returnZeros || minutes != 0) result.minutes = minutes;
  }

  if (config.units.seconds) {
    var seconds = end.diff(start, 'seconds');
    start.add(seconds, 'seconds');
    if (config.returnZeros || seconds != 0) result.seconds = seconds;
  }

  if (config.units.milliseconds) {
    var milliseconds = end.valueOf() - start.valueOf();
    if (config.returnZeros || milliseconds != 0) result.milliseconds = milliseconds;
  }

  if (config.callback) {
    return config.callback(result);
  }

  return result;
}

module.exports = timediff;
