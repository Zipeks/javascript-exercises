const fibonacci = function(a) {
    let number = 0;
    let prev = 1;
    if (a < 0) {
        return "OOPS";
    }
    for  (let i = 0; i < Number(a); i++) {
        let c  = number;
        number += prev;
        prev = c;
    }
    return number;

};

// Do not edit below this line
module.exports = fibonacci;
