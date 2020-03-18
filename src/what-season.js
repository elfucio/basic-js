module.exports = function getSeason(date) {
  if (date == undefined) {
    return 'Unable to determine the time of year!';
  }

  let dateArr = date.toDateString().split(' ');
  if (dateArr[1] == 'Jan' || dateArr[1] == 'Feb' || dateArr[1] == 'Dec') {
    return 'winter';
  } else if (dateArr[1] == 'Apr' || dateArr[1] == 'May' || dateArr[1] == 'Mar') {
    return 'spring';
  } else if (dateArr[1] == 'Sep' || dateArr[1] == 'Oct' || dateArr[1] == 'Nov') {
    return 'autumn';
  } else return 'summer';

};
