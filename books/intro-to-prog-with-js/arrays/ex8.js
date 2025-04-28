function oddLengths(arr) {
    return arr.reduce((acc, curr) => {
        if (curr.length % 2 !== 0) {
            acc = acc.concat(curr.length)
        }
        return acc
    }, [])
}


let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]