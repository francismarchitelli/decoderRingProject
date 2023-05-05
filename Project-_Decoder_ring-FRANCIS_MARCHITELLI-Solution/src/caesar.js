// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
   if(shift === 0 || shift < -25 || shift > 25 || !shift) {
     return false;
   }
   if(!encode) {
     shift = 0 - shift;
   }
    let lowercaseInput = input.toLowerCase();
    let inputArray = lowercaseInput.split("");
    const mapped = inputArray.map((character) => {
      let uniqueCode = character.charCodeAt(0);
      if(uniqueCode < 97 || uniqueCode > 122)
        return character;
      let uniqueCodeShifted = uniqueCode + shift;
      if(uniqueCodeShifted > 122) uniqueCodeShifted = uniqueCodeShifted -26;
      if(uniqueCodeShifted <97) uniqueCodeShifted = uniqueCodeShifted +26;
      let alphabetShifted = String.fromCharCode(uniqueCodeShifted);
      return alphabetShifted;
    });
    let result = mapped.join("");
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
