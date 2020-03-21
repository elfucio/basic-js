module.exports = function repeater(str, options) {
    let newStr = '';
    let repeatTimes  =  options.repeatTimes ? options.repeatTimes : 1;
    let separator = typeof options.separator !== 'undefined' ? `${options.separator}` : '+';
    let addition = typeof options.addition !== 'undefined' ? `${options.addition}` : '';
    let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    let additionSeparator =  typeof options.additionSeparator !== 'undefined' ? options.additionSeparator.toString() : '|';
    for (let i = 0; i < repeatTimes; i++) {
        if (i === 0) {
            newStr += str;
        } else {
            newStr += separator + str;
        }

        if (addition !== '') {
            for (let j = 0; j < additionRepeatTimes; j++) {
                if (j === 0) {
                    newStr += addition;
                } else {
                    newStr += additionSeparator + addition;
                }  
            }
        }
    }
    return newStr;
};
  