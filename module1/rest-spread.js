const person = {
  name: "Mal",
  age: 25,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};
// person.greet();

const copiedPerson = { ...person };
// console.log(copiedPerson);

const hobbies = ["Sports", "Cookies", "Video Games"];
let [hobby1, hobby2] = hobbies;
 console.log(hobby1, hobby2);

// Spread operator. Copies an array into an entirely different array
const copiedArray = [...hobbies];
// console.log(copiedArray);


// Rest operator. Creates an array out of arguments provided by the user.
const toArray = (...args) => {
  return args;
};
// console.log(toArray(1, 2, 3, 6, 7));
