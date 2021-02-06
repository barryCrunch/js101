// pedac.js

// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

// input: string
// output: array (new array)
// rules:
//      Explicit requirements:
//        - every substring that is a palindrome must be put in an array and
//          returned. 
//        - Palindromes are case sensitive.
//      Implicit requirements:
//        - if the string is an empty string, the result should be an empty array.