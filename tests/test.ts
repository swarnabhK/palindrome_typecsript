import {isPalindrome} from '../src/Palindrome'


describe('palindrome checker',()=>{
  test('should be able to tell the string is a palindrome',()=>{
    expect(isPalindrome('racecar')).toBe(true);
  })

  test('should be able to tell the string is not a palindrome',()=>{
    expect(isPalindrome('racecarss')).toBe(false);
  })
})
