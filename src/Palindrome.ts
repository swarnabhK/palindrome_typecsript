export function isPalindrome(s:string) {
  let left:number = 0;
  let right:number = s.length-1;
  while(left<right){
    if(s[left]!==s[right]){
      return false;
    }
    left+=1;
    right-=1;
  }
  return true;
}