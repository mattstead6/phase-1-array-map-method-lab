const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



const capitalizeWords = string => {
  const arr = string.split(" ");
  for (let i = 0; i  < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    return tutorialsTwo = arr.join(" ");
  }
}
let titleCased = [];
titleCased = tutorials.map(element => capitalizeWords(element) 
);
