function deepClone(obj) {

    //判断传入的obj是否为Symbol类型
    if (typeof obj === "symbol") {
        return Symbol(obj.description)
    }

    //判断传入的obj如果是基本类型 则直接返回
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    //判断传入的obj是否为set类型
    if (obj instanceof Set) {
        const newSet = new Set()
        for (const setItem of obj) {
            newSet.add(deepClone(setItem))
        }
        return newSet
    }

    //判断传入的obj是否为函数function类型 是则直接返回
    if (typeof obj === "function") {
        return obj
    }

    //判断传入的obj是否为数组类型
    const newObj = Array.isArray(obj) ? [] : {}

    for (const key in obj) {
        newObj[key] = deepClone(obj[key])
    }

    return newObj
}

const set = new Set(['abc','cba','nba'])
const info = {
    name: "jusic",
    age: 18,
    friend: {
        name: "lucy",
        address: {
            street: 'newYork',
            location:'newYork'
        }
    },

    //特殊类型：Set
    set: set,
    
    //特殊类型：Function
    running: function () {
        console.log("function:running");
    },
        
    //特殊类型：Symbol
    symbolKey:Symbol()
}

const books = [
    { name: 'JavaScript高级程序设计', price: 300 },
    { name: '你不知道的JavaScript', price: 99 }

]

//对对象进行深拷贝
const newObj = deepClone(info)
console.log(newObj);
console.log(newObj.symbolKey === info.symbolKey);

//对数组进行深拷贝
const newBooks = deepClone(books)
console.log(newBooks);

 debugger