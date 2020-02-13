// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
function addChallengeBanner (num){
  console.log('######### '+'Challenge ' + num + ' #########')
}
addChallengeBanner('Banner Function Works!')
addChallengeBanner(2);
// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
let num = 1;
while (num <=20) {
  if (num % 3 === 0){
  console.log(num)};
  num=num + 1;
}

// for (let i = 1; i < 5; i++) {
//   console.log(i)
// }
// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
addChallengeBanner(3);
for (let i = 20; i > 1; i = i - 3){
  console.log(i)
}

// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
addChallengeBanner(4);
for (let num = 20; num > 0; num= num-1){
  console.log(num)
}
// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
addChallengeBanner(5);
let phrase = 'Boy howdy am I good at this!'
for (let i = 0; i < phrase.length; i++){
  console.log(phrase[i])
}

// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
addChallengeBanner(6);
let question6 = 'And getting better every day.'
for (i = 1; i < question6.length; i= i+3){
  console.log(question6[i])
}

// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
addChallengeBanner(7);
let question7 = 'Am I the best?'
for (let i = 0; i < question7.length; i = i + 1){
  
  console.log(question7.toUpperCase()[i])
}

// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
addChallengeBanner(8);
let question8 = 'Whoa, I am the best!'
for (let i = 0; i < question8.length; i = i + 1){
  if (i=== 8){
console.log(question8.toUpperCase()[i])
} else if (i=== 9){
  console.log(question8.toUpperCase()[i])
} else {
  console.log(question8[i])
}
}


// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
addChallengeBanner(9);
let question9 = 'I am become death, destroyer of worlds.'
for (let i = question9.length; i >=0; i = i - 1){
  console.log(question9[i])
}


//10. Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
addChallengeBanner(10);
let name = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';
for (let i = 0; i < name.length; i++){
  if (name[i] === '|'){
  console.log('Here today is: ')
}else {
  console.log(name[i])
}
}

// 11.
//
// There is no 11. Celebrate! You did it!
