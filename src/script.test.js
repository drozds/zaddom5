const fib = require('./script');

test('If argument is equal to 0, function must return an empty array', () => {
    expect(fib(0)).toEqual(expect.arrayContaining([]));
});

test('If argument is equal to 10, function must return [0,1,1,2,3,5,8,13,21,34]', () => {
    expect(fib(10)).toEqual(expect.arrayContaining([0,1,1,2,3,5,8,13,21,34]));
});

test('If argument is equal to 1.12345, function must return throw error', () => {
    expect(() => fib(3.5)).toThrow("Argument must be a positive integer number!");
});

test('If argument is equal to -10, function must return throw error', () => {
    expect(() => fib(-3)).toThrow("Argument must be a positive integer number!");
});

test('If argument has a type diffrent from \"number\"', () => {
    expect(() => fib('hello')).toThrow("Argument must be a number!");
});

test('If argument is bigger than max array size (2^32-1) function must return throw error',()=>{
	expect(()=>fib(2**32).toThrowError(RangeError("Argument must be a number less then 4294967296 (2^32)!")));
});

