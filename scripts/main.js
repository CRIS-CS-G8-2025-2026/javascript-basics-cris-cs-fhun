
const firstName = "Wasrissara";
const lastName = "Jantunyarux";
const fullName = firstName + " " + lastName;

let myAge = 13;

// select elements
const section = document.querySelector("section");
const heading = document.querySelector("h1");
const paraAge = document.getElementById("age");
const paraNextAge = document.createElement("p");

// update content
heading.textContent = fullName;
paraAge.textContent = "age: " + myAge;

const nextMsg = `In 20 years, I will be ${myAge + 20}`;
paraNextAge.textContent = nextMsg;
section.appendChild(paraNextAge);