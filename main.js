const capitalizeSentences = function (sentence) {
  //the output of our function, a new str
  let capSent = "";
  //we want to go through the sentences to see where each period is so that we can capitalize the following character
  for (let i = 0; i < sentence.length; i++) {
    //if there are periods in the string, uppercase the first letter of the sentence... problem is, i have no idea how to do that...

    //this doesn't work and i have no idea why.
    if (i === '. ') {
      capSent += sentence[0].toUpperCase()


    }
    //return our new str
    return capSent
  }

}
/*--------------*/
const isValidPassword = function (str) {
  //loop through the given str
  for (let i = 0; i < str.length; i++) {
    //if the str includes a space return false
    if (str.includes(" ")){
return false
    }
    //if the string is less than 12 char. return false
    else if(str.length < 12){
return false
    }
    //otherwise return true
    else{
      return true
    }
    }
    
  }
/*--------------*/
  
const makeHalfSquares = function(given){
  //returns a new array
  let newArr =[]
//loop through
for(let i = 0; i < given.length; i++){
  //pushes to the array 
  newArr.pop(given * given / 2)
}
return newArr
}
//doesn't work and idk why 

const countAs = function(num){
for(let i = 0; i <num.length;i++){
  let result = []
  //returns the numbers if at least 90?
  if(num => 90){

    //should push it into the array
    return result.push(num)

  }
}
}


const deleteMiddleLetters= function(str){
  //new str
  let result = '';
  //loop through
  for(let i=0; i < str.length; i++){
    let mid =str[]
//find the middle str
result += str[i]
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
