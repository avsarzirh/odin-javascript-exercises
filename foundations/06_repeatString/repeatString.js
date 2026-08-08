const repeatString = function(str, times) {
    if (times < 0) return 'ERROR';
    let word = '';
    for (i = 0; i < times; i++) {
        word += str;
    }
    return word;
};
console.log(repeatString('hey', 3))


// Do not edit below this line
module.exports = repeatString;
