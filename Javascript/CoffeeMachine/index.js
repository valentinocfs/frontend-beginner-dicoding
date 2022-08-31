// const {coffeeStock, isCoffeeMachineReady} = require('./state');
import {coffeeStock as stock, isCoffeeMachineReady} from './state.js'

const makeCoffee = (type, miligrams) => {
    if(isCoffeeMachineReady){
        if(stock[type] >= miligrams){
            return `Kopi berhasil dibuat!`
        }
    
        return `Biji kopi habis!`
    } else {
        return `Machine is not ready!`
    }
}

console.log(makeCoffee("robusta", 80));

