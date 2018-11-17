//regular expression 

/*let testStr = "freeCodeCamp";
let testRegex = /CODE/i;

let a = testRegex.test(testStr);

console.log(a);
*/

/*let petString = "james has three pets dog  and bird";

let petRegax = /cat|bird|dog/i;

let result = petRegax.test(petString);
console.log(result)*/

//match() method

let extractStr = "Extract the word 'coding''Coding''coding' from this string.";
/*let codingRegex = /coding/i;
*/let codingRegex = /Coding/ig; //multiple regex
//let result = extractStr.match(codingRegex); 

//document.write(result)

let humStr = "I'll hum hug a song";

let huRegex = /hu./g;
let a = humStr.match(huRegex);
//console.log(a[0]);

let str = "I am Shahriar shakil"
let myRegex = /sha./gi;
//let rslt =myRegex.test(str) /*str.match(myRegex)*/
//console.log(rslt);

/*let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

console.log(result)*/

//Match Letters of the Alphabet

/*let catStr = "Fat bat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-f]at/gi;

console.log(catStr.match(bgRegex))*/
/*let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result = quoteSample.match(alphabetRegex); 
console.log(result);
*/


// negated character sets

/*let quoteSample = "3 blind mice.";
let myRegexp = /[^0-9aeiou]/gi; 
let result =quoteSample.match(myRegexp);

console.log(result) */

/*let difficultSpelling = "Mississippi";
let myRegep = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegep);
console.log(result);
*/
//test 
let soccerWord = "goooooool!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*?/;// g
//console.log(gPhrase.match(goRegex))

//Find Characters with Lazy Matching

let text = "<h1>Winter is coming</h1>";
let nRegex = /<h1>*/; // it's the answer!
let result = text.match(nRegex);;
//console.log(result);


let strr = "titanic";
let regex=/t[a-z]*i/;
let myrslt = strr.match(regex)

//console.log(myrslt)


// find criminal
let crowd = 'P6P2ccccP7P4P5CCCCCP3P1';

let reCriminals = /c+/i; // Change this line

let matchedCriminals = crowd.match(reCriminals);
//console.log(matchedCriminals);


//Match Beginning String Patterns
let firstString = " is Ricky first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let match = firstString.match(firstRegex);
//console.log(match)//null

let quoteSample = "hey ! five ? boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let alphabetRegexV3 = /[^A-Za-z0-9_]/g; //upercase w return opposite

let result2 = quoteSample.match(alphabetRegexV3);
//console.log(result2)

let quoteSample1 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result3 = quoteSample1.match(nonAlphabetRegex).length;
//console.log(result3)


// \d for digit [0-9] and 
 // \D for opposite | non number [^0-9]
/*
let numString = "Your sandwich will be 9 9";
let numRegex = /\D/g; // Change this line
let result4 = numString.match(numRegex);

console.log(result4)*/
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable
console.log(outputTwo)

let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once
console.clear()

// Use console.log() to print the outputOne variable
//console.log(outputOne)

/*let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i < len; i++) {
  // loops one too many times at the end
  console.log(alphabet[i]);
}for (let j = 1; j < len; j++) {
  // loops one too few times and misses the first character at index 0
  console.log(alphabet[j]);
}*/

  // Creates a 2-D array with m rows and n columns of zeroes

//infinite loop

