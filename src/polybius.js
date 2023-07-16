// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const letters = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    if (encode === true) {
      
// inputArray set that value = toLowercase /split input into individual elements(split returns a new array)
      const inputArray = input.toLowerCase().split("");
//map to iterate over each element of the inputArray. map will create a new array
      const matcher = inputArray.map((element) => {
// Object.keys returns an array of keys from the letters obj
//search for element in the array returned by Object.keys

        const key = Object.keys(letters).find(
          //(includes returns true or false)
          (keyValue) => letters[keyValue].includes(element)
        );
        if (key) {
          return key.toString();
        } else {
          return element;
        }
      });
      return matcher.join("");
    } else {
//decoder starts here
// MY SCOPE: how to find if an arrays elements are included in an objects key. If so return a join and return a string value

// ideas 1 map the LETTER array to create a new array that filters if PAIR includes any of letters key.objects
    //include returns true or false

// idea 2 we need to FIND out if the new PAIR array INCLUDES(returns true or false) any KEY OBJECTS of LETTERS

      if (input.split(" ").join("").length % 2 !== 0) {
// numbers input must be even or return false
        return false;
      } else {
//split method at spaces to separate into by the space into new arrays
        const pair = input.split(" ").map((element) => {
//creates pairs of the indexes 
          const matchedE = element.match(/.{1,2}/g);
          console.log(matchedE,"*********") //[['12','23],['34','34','34']]
          return matchedE;
        });

        const resultMsg = pair
          .map((arr) => {
//map over array and join the letters
            return arr.map((number) => letters[number]).join("");
          })
//takes that result and joins the words
          .join(" ");
          console.log(resultMsg,"!!!!!!")
        return resultMsg;
      }
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
