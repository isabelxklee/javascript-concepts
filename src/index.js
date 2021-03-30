import "./styles.css";

const reactConcepts = [
  "components",
  "hooks",
  "JSX",
  "props",
  "lifecycle methods"
];

//// different ways to write functions ////

// traditional function
function greeting() {
  console.log("I love React!");
}

// arrow function
reactConcepts.map((concept) => console.log(concept));

// named arrow function with implicit return
// const greeting = () => console.log("I love React!");

// named arrow function with explicit return
// const greeting = () => {
//   const message = "I love React!";
//   return console.log(message);
// };

greeting();

const unorderedList = document.querySelector("ul");

const createList = () => {
  reactConcepts.map((item) => {
    const listItem = document.createElement("li");
    listItem.innerText = item;
    return unorderedList.append(listItem);
  });
};

createList();

//// destructuring an array ////

// extracting values without destructuring
let x = reactConcepts[0];
let y = reactConcepts[1];

// with destructuring //
// const [x, y] = reactConcepts;

// what do you think is going to be logged to the console?

console.log([x]);
console.log([y]);

//// destructuring an object ////

const reactFacts = {
  birthYear: 2011,
  company: "Facebook",
  openSource: true,
  contributors: 1541
};

// extracting properties without destructuring
let birthYear = reactFacts.birthYear;
let company = reactFacts.company;
let contributors = reactFacts.contributors;

// with destructuring //
// const { birthYear, company, contributors } = reactFacts;

// what do you think is going to be logged to the console?

console.log(birthYear);
console.log(company);
console.log(contributors);

//// template literals ////

console.log(
  `React was initially released in ${birthYear} and now has ${contributors} contributors.`
);

console.log(`React was built by developers at ${company.toUpperCase()}.`);

console.log(
  `It has been ${2021 - birthYear} years since React was first released.`
);
