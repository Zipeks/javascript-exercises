const removeFromArray = function(...args) {

    let numbers = args[0];

    for (let i = 1; i <= args.length; i++){
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[j] === args[i]) {
                numbers.splice(j,1);
            }
        }
    }
    return numbers;
};

// Do not edit below this line
module.exports = removeFromArray;
