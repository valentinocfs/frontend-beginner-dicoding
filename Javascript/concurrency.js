// console.log("Selamat datang!");
// setTimeout(() => {
//   console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

// console.log('-------- setTimeout -------------')

// const orderCoffee = callback => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee)
//     }, 1000);
// }

// orderCoffee(coffee => console.log(coffee))

console.log('--------- Promise -------------')

const executorFunction = (resolve, reject) => {
    const isCoffeeMakerReady = true;
    if (isCoffeeMakerReady) {
        resolve("Kopi berhasil dibuat");
    } else {
        reject("Mesin kopi tidak bisa digunakan");
    }
}
 
 
const makeCoffee = () => {
    return new Promise(executorFunction);
}

const coffeePromise = makeCoffee();
console.log(coffeePromise);

// console.log('--------- then ----------')

const stock = {
    coffeeBeans: 250,
    water: 1000,
}
 
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi");
//         } else {
//             reject("Stok tidak cukup");
//         }
//     });
// };

// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue);
// }
 
// const handleFailure = rejectionReason => {
//     console.log(rejectionReason);
// }

// checkStock().then(
//     handleSuccess,
//     handleFailure
// )

// checkStock()
//     .then(handleSuccess)
//     .catch(handleFailure)

const state = {
    stock: {
        coffeeBeans: 250,
        water: 1000,
    },
    isCoffeeMachineBusy: false,
}

const checkAvailability = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!state.isCoffeeMachineBusy) {
                resolve("Mesin kopi siap digunakan.");
            } else {
                reject("Maaf, mesin sedang sibuk.");
            }
        }, 1000);
    });
};

const checkStock = () => {
    return new Promise((resolve, reject) => {
        state.isCoffeeMachineBusy = true;
        setTimeout(() => {
            if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
                resolve("Stok cukup. Bisa membuat kopi.");
            } else {
                reject("Stok tidak cukup!");
            }
        }, 1500);
    });
};

const brewCoffee = () => {
    console.log("Membuatkan kopi Anda...")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kopi sudah siap!")
        }, 2000);
    });
};

const boilWater = () => {
    return new Promise((resolve, reject) => {
        console.log("Memanaskan air...");
        setTimeout(() => {
            resolve("Air panas sudah siap!");
        }, 2000);
    })
}
 
const grindCoffeeBeans = () => {
    return new Promise((resolve, reject) => {
        console.log("Menggiling biji kopi...");
        setTimeout(() => {
            resolve("Kopi sudah siap!");
        }, 1000);
    })
}

async function makeEspresso() {
    // checkAvailability()
    //     .then((value) => {
    //         console.log(value);
    //         return checkStock();
    //     })
    //     .then((value) => {
    //         console.log(value)
    //         const promises = [boilWater(), grindCoffeeBeans()]

    //         return Promise.all(promises)
    //     })
    //     .then((value) => {
    //         console.log(value)
    //         return brewCoffee();
    //     })
    //     .then((value) => {
    //         console.log(value);
    //     })
    //     .catch((rejectedReason) => {
    //         console.log(rejectedReason);
    //     });
    try {
        await checkAvailability()
        await checkStock()
        await Promise.all([boilWater(), grindCoffeeBeans()])
        const coffee = await brewCoffee()
        console.log(coffee)
    } catch (err) {
        console.log(err)
    }
}
    
makeEspresso();

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

async function makeCoffeeAgain() {
    try {
        const coffee = await getCoffee();
        
        console.log('------ async await --------')
        console.log(coffee);
        
        console.log('---------------------------')
    } catch (err) {
        console.log(err)
    }
}

makeCoffeeAgain();

class NetworkError extends Error {
    constructor(message) {
      super(message);
      this.name = 'NetworkError';
    }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isOffline) {
                reject(new NetworkError('Gagal mendapatkan data dari internet'));
            }
            resolve({ name: 'John', age: 18 });
        }, 500);
    })
};


// TODO: 2
const gettingUserName = async () => {
    try {
        const user = await fetchingUserFromInternet(false)     
        return user.name
    } catch (err) {
        return err.message
    }
}

gettingUserName()