function fib(num) {
    if (typeof num !== 'number') {
        throw TypeError("Argument must be a number!");
    }
    else if (num > 2**32-1) {
        throw RangeError("Argument must be a number less then 4294967296 (2^32)!");    
    }
    else if(num %1 !== 0 || num < 0 ) {
        throw RangeError("Argument must be a positive integer number!");
    }
    else {
        let result = [];
        for (let i = 0; i < num; i++) {
            if (i < 2) {
                result.push(i);
            }
            else {
                result.push(result[i-2] + result[i-1]);
            }
        }
        return result;
    }
}

module.exports = fib;

