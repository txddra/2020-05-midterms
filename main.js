const capitalizeSentences = function (sentence) {
  //the output of our function, a new str
  let capSent = "";
  //we want to go through the sentences to see where each period is so that we can capitalize the following character
  for (let i = 0; i < sentence.length; i++) {
    //if there are periods in the string, uppercase the first letter of the sentence... problem is, i have no idea how to do that...

    //this doesn't work and i have no idea why.
    if (capSent[i] === '. ') {
      capSent += sentence[0].toUpperCase()


    }
    //return our new str
    return capSent
  }

}
/*--------------*/
const isValidPassword = function (str) {
  let password = ""
  for (let i = 0; i < str.length; i++) {
    if (str.includes(" ")){
return false
    }
    else if(str.length < 12){
return false
    }
    }
  }



// const hyphenateName = function (name){
//   let hyphenated = "";
//   for(let i = 0; i < name.length; i++){
//     if(name[1]=== " "){
//       hyphenated = '-'+ name[i]

//     }

//   }
// return hyphenated
// }







if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
