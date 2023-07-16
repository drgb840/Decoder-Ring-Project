// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet = "", encode = true) {
    // your solution code here
    const standardAlphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ];
// alphabet = bsdas
//a  b  c  d  e  
//b  s  d  a  s  
if(alphabet.length < 26 || new Set(alphabet).size !== 26 ){
  return false
}

//ENCODE =true
//splitting alphabet and input into an array of characters 
const splitstring = alphabet.toLowerCase().split("")
const inputArr = input.toLowerCase().split("")

//if alphabet is longer than 26 characters return false, must be a string
if(encode === true && alphabet.length === 26){
// we are creating a new array that sets alphabet array to have 
  const output = inputArr.map((character) =>{
    if(character === " "){
      return " "
    }
    let standAlpInd = standardAlphabet.indexOf(character)
    return splitstring[standAlpInd]
    })
    console.log(output, "******")
    return output.join("")
}

//DECODE =false
//if alphabet is longer than 26 characters return false
//
if(encode === false && alphabet.length === 26){
const decoder = inputArr.map((character) =>{
  if(character === " "){
    return " "
  }
  let codedAlph = splitstring.indexOf(character)
  return standardAlphabet[codedAlph]
})
console.log(decoder, "$$$$$$$$$")
return decoder.join("")
  }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
