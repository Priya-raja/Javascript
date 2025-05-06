//Longest Character without repeating character

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let maxLength = 0
    let left = 0
    let right = 0

    let set = new Set()

   while(right < s.length ){
    if(!set.has(s[right])){
        set.add(s[right])
        maxLength = Math.max(maxLength, right-left+1)
        right++

    }
    else {
        set.delete(s[left]);
        left++
    }
   }
return maxLength
}

console.log(lengthOfLongestSubstring('bbbb'))
/*Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1. */