let score = 90;
let result = null;
if(score >= 90 && score <= 100){
    result = 'Selamat! Anda mendapatkan nilai A.'
} else if(score >= 80 && score <= 89){
    result = 'Anda mendapatkan nilai B.'
} else if(score >= 70 && score <= 79){
    result = 'Anda mendapatkan nilai C.'
} else if(score >= 60 && score <= 69){
    result = 'Anda mendapatkan nilai D.'
} else {
    result = 'Anda mendapatkan nilai E.'
}

let restaurant = {
    name: "Janji Jiwa",
    city: "Bandung",
    "favorite drink": "Caramel Latte",
    "favorite food": "Toast Beef",
    isVegan: false
}
let name = restaurant.name
let favoriteDrink = restaurant["favorite drink"]

let evenNumber = []

for (let index = 1; index <= 100; index++) {
    if(index % 2 === 0){
        evenNumber.push(index)
    }
}

const priceInJPY = 5000;

let currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
])

let priceInIDR = priceInJPY * currency.get("JPY");

const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];

delete artistsAndSongs["Keyakizaka46"];

function minimal(a, b){
    let result = 0;
    if(a <= b){
        result = a 
    } else {
        result = b
    }

    return result;
}

let  power = (a, b) => {
    return a ** b
} 

function calculate(value) {
    return value < 2 ? value : (calculate(value - 1) + calculate(value - 2));
}

function minMax(arrayOfNumbers) {
    let currentMin = arrayOfNumbers[0];
    let currentMax = arrayOfNumbers[0];
    for (value of arrayOfNumbers) {
        if (value < currentMin) {
            currentMin = value;
        } else if (value > currentMax) {
            currentMax = value;
        }
    }

    return `currentMin: ${currentMin}, currentMax: ${currentMax}`
}

minMax([8, -6, 0, 9, 40, 2, 23, 50, 2, -3, -15, 15, -23, 71]);

class Animal {
    constructor(name, age, isMammal){
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal{
    eat(){
        return `${this.name} sedang makan!`
    }
}

class Eagle extends Animal {
    fly(){
        return `${this.name} sedang terbang!`
    }
}

const myRabbit = new Rabbit("Labi", 2, true)
const myEagle = new Eagle("Elo", 4, false)

const books = [
    { title: 'The Da Vinci Code', author: 'Dan Brown', sales: 5094805 },
    { title: 'The Ghost', author: 'Robert Harris', sales: 807311 },
    { title: 'White Teeth', author: 'Zadie Smith', sales: 815586 },
    { title: 'Fifty Shades of Grey', author: 'E. L. James', sales: 3758936 },
    { title: 'Jamie\'s Italy', author: 'Jamie Oliver', sales: 906968 },
    { title: 'I Can Make You Thin', author: 'Paul McKenna', sales: 905086 },
    { title: 'Harry Potter and the Deathly Hallows', author: 'J.K Rowling', sales: 4475152 },
];

let greatAuthors = books.filter((item) => item.sales > 1_000_000).map((item) => `${item.author} adalah penulis buku ${item.title} yang sangat hebat!`)

