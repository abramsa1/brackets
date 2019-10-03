module.exports = function check(str, bracketsConfig) {
    let bracket = '';
    let buffer = [];
    let char = '';
    let repeat = '';

    if (str.length % 2)
        return false;
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            bracket += bracketsConfig[j][i];
            (bracketsConfig[j][i] === bracketsConfig[j][i + 1]) ? repeat += bracketsConfig[j][i]: 0;
        }
    }
    for (let i = 0, k = 0; i < str.length; i++) {
        if (bracket.slice(0, bracket.length / 2.).includes(str[i]) && !(repeat.includes(str[i]))) {
            buffer[k] = str[i];
            k++;
        } else if (repeat.includes(str[i]) && char != str[i] && str[i] != buffer[buffer.length - 1]) {
            buffer[k] = str[i];
            k++;
            char = str[i]
        } else {
            (repeat.includes(str[i])) ? char = '': 0;
            if (bracket[bracket.indexOf(buffer[k - 1]) + bracket.length / 2] === str[i]) {
                buffer.pop();
                k--;
            } else
                return false;
        }
    }
    if (buffer.length == 0)
        return true;
    return false;
}