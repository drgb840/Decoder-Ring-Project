// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

    const letters = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
//a  b  c  d  e  f  g  h  i  j  k   l   m   n   o   p   q   r   s   t   u   v   w   x   y   z   
//0  1  2  3  4  5  6  7  8  9  10  11  12  13 14  15  16  17  18  19  20  21  22  23  24  25
// receive a message, but without shift, should return the original message

    function caesar(input, shift, encode = true) {
      if(shift === undefined){
        return input
      }
//If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
      if(typeof shift !== 'number' ||shift === 0  ||shift < -25 || shift > 25){
        return false
      }
      if(encode){
//initialing a value that splits the input into an array of each of the words letter
        const msgArray = input.split("");
//initializes a value that maps a new array that makes all its elements lowercase lower case
        const numMsgArray =  msgArray.map((element)=>{
          element = element.toLowerCase();
// matching the the elements of numMsgArray to the letters array by seeing if the element is included in the letters array
          if(letters.includes(element)){
// it then sees what index that element is in the letters array and sets it equal to num
            let num = letters.indexOf(element);
// now we add that num to shift
            num = num + shift;
// if the number is greater than 25(the last index) it subtracts 26 
            if(num > 25){
              num = num - 26;
// if the number is less than 0(the first index) it adds 26 
            } else if(num < 0){
              num = num + 26;
            }
            return letters[num]
          }else{
            return element;
          };      
        });
// join array to make it a string
        return numMsgArray.join("")
      }else{
        const msgArray = input.split("");
        const numMsgArray =  msgArray.map((element)=>{
          element = element.toLowerCase();
          if(letters.includes(element)){
            let num = letters.indexOf(element);
            num = num - shift;
            if(num > 25){
              num = num - 26;
            } else if(num < 0){
              num = num + 26;
            }
            return letters[num]
          }else{
            return element;
          };      
        });
        return numMsgArray.join("")
      }
      // your solution code here
    }
    console.log(caesar("HEllo There", 3, encode = true), "%%%%%%%%%%%%%%%%%%")
    return {
      caesar,
    };
  })();
  
  
  module.exports = { caesar: caesarModule.caesar };