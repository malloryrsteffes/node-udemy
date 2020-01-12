const person = {
  name: "Mal",
  age: 25,
  greet() {
    console.log("Hi, I am " + this.name);
  }
};

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);
