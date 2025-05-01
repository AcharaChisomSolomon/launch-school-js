function shortLongShort(str1, str2) {
  const shortStr = str1.length < str2.length ? str1 : str2
  const longStr = shortStr === str1 ? str2 : str1
  console.log(`${shortStr}${longStr}${shortStr}`)
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"