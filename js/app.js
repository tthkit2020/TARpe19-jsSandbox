const button = document.querySelector('#btn');
const image = document.querySelector('#img');

button.addEventListener('click', (event) => {
    console.log('Hello from button click!');
    console.log(image);
    image.src = 'img/pic2.jpg';
    event.preventDefault();
});

console.log('Hello, World!');

//template literals
const name = 'John';
const age = 25;
const job = "Web Developer";
const city = 'London';

console.log(typeof(name));
console.log(typeof(age));

//function declaration
function hello(){
    return 'hello';
}

//let html = '<ul><li>Name: ' + name + '</li></ul>';
let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li>${hello()}</li>
        <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`;


//document.body.innerHTML = html;

//arrays and arrays methods
let fruit = ['apples', 'orange', 'bananas'];
console.log(fruit);



//add an element to the array
fruit.push(true);

fruit.unshift('tomato');


let orangeIndex = fruit.indexOf('orange');
console.log('index of orange', orangeIndex);

fruit.splice(orangeIndex, 1);

fruit.forEach(element => {
    console.log('Hello from fruit', element, typeof(element));
});

//Date and Time

const today = new Date();
console.log(today);
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
console.log(day, month, year);

let options = {weekday: 'long', month: 'long', year: 'numeric', day: 'numeric'};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

let birthday = new Date('December 18 1985');
let fullBirthday = birthday.toLocaleDateString("en-US", options);
console.log(fullBirthday);
