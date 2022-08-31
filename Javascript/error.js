try {
    console.log("Awal blok try");   
    // errorCode;
    console.log("Akhir blok try"); 
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log('Akan tetap dieksekusi')
}

console.log('----------')

let json = '{ "name": "Yoda", "age": 20 }';
// let json = '{ bad json }';
// let json = '{ "name" : "Yoda" }';
 
let user = JSON.parse(json);

try {
    if(!user.age){
        throw new SyntaxError("age is required.")
    }

    errorCode;

    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if(error instanceof SyntaxError){
        console.log(`JSON error : ${error.message}`);;
    } else if (error instanceof ReferenceError) {
        console.log(error.message)
    } else {
        console.log(error.stack)
    }
}

console.log('----------')

class ValidationError extends Error {
    constructor(message){
        super(message)
        this.name = 'ValidationError'
    }
}

let json2 = '{"age": 30}';

try {
    let user = JSON.parse(json2);
 
    if (!user.name) {
        throw new ValidationError("'name' is required.");
    }
    if (!user.age) {
        throw new ValidationError("'age' is required.");
    }
 
    console.log(user.name);
    console.log(user.age);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Syntax Error: ${error.message}`);
    } else if (error instanceof ValidationError) {
        console.log(`Invalid data: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}

console.log('----------')

const detectTriangle = (a, b, c) => {
    try{
        validateNumberInput(a, b, c)
    } catch(error){
        return error.message;
    }

    if (a === b && b === c) {
      return 'Segitiga sama sisi';
    }
  
    if (a === b || a === c || b === c) {
      return 'Segitiga sama kaki';
    }
  
    return 'Segitiga sembarang';
};

const validateNumberInput = (a, b, c) => {
    if (isNaN(a)){
        throw new ValidationError('Argumen pertama harus number')
    } 
    if(isNaN(b)){
        throw new ValidationError('Argumen kedua harus number')
    } 
    if(isNaN(c)) {
        throw new ValidationError('Argumen ketiga harus number')
    }
}

const one = detectTriangle(1,'as',3);
console.log(one)