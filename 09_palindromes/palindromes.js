const palindromes = function (text) {
    let pali = true;
    let all = "teres";
    text = text.replaceAll(" ","").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    for (let i = 0; i < text.length; i++) {
        // console.log(`t1 ${text[i]} t2 ${text[text.length-(i+1)]}`);
        if (text[i].toUpperCase() !== text[text.length-(i+1)].toUpperCase()) {
            pali = false;
            break;
        }
    }
    return pali;
};

// Do not edit below this line
module.exports = palindromes;
