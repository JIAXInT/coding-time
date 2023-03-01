function deepClone(obj) {

    //判断如果是基本类型 则直接返回
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    const newObj = {} 

    for (const key in obj) {
        newObj[key] = deepClone(obj[key])
    }

    return newObj
}


const info = {
    name: "jusic",
    age: 18,
    friend: {
        name: "lucy",
        address: {
            street: 'newYork',
            location:'newYork'
        }
    }
}

const newObj = deepClone(info)
console.log(newObj);