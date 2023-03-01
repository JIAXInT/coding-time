# JavaScript 中深浅拷贝的区别以及如何实现浅拷贝和深拷贝

在 JavaScript 中，拷贝对象是非常常见的操作。有时候我们需要复制一个对象并对其进行修改，但是这个新对象不应该影响到原始对象。这就需要我们了解深浅拷贝的区别以及如何实现它们。

## 浅拷贝

浅拷贝是指复制对象的第一层属性，也就是说如果对象的属性是一个引用类型，那么浅拷贝只会复制这个引用类型的地址，而不是这个引用类型所指向的对象。这就意味着，如果我们修改了这个引用类型所指向的对象，那么原始对象和浅拷贝出来的新对象都会受到影响。

### 如何实现浅拷贝

### 1. Object.assign()

Object.assign() 方法可以将所有可枚举属性的值从一个或多个源对象复制到目标对象。它返回目标对象。

```jsx
let obj1 = { a: 1, b: 2 };
let obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 1, b: 2 }
```

### 2. 扩展运算符

扩展运算符(...) 可以将一个数组转换为逗号分隔的参数序列。

```jsx
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1 };
console.log(obj2); // { a: 1, b: 2 }
```

## 深拷贝

深拷贝是指复制整个对象，包括对象的所有属性，不管是基本类型还是引用类型。这就意味着，如果我们修改了深拷贝出来的新对象中的引用类型所指向的对象，原始对象不会受到影响。

### 如何实现深拷贝

### 1. JSON.parse() 和 JSON.stringify()

使用 JSON 对象的 parse() 和 stringify() 方法可以实现深拷贝，但是它有一些限制，例如不能拷贝函数和 Date 对象等。

```jsx
let obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
};

let obj2 = JSON.parse(JSON.stringify(obj1));
console.log(obj2); // { a: 1, b: { c: 2, d: 3 } }
```

### 2. 递归

我们可以使用递归来实现深拷贝。

```jsx
function deepClone(obj) {
  //判断如果是基本类型 则直接返回
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  //判断传入的obj是否为数组类型
  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    newObj[key] = deepClone(obj[key]);
  }

  return newObj;
}

const info = {
  name: "jusic",
  age: 18,
  friend: {
    name: "lucy",
    address: {
      street: "newYork",
      location: "newYork",
    },
  },
};

const newObj = deepClone(info);
console.log(newObj);
```

## 总结

浅拷贝只会复制对象的第一层属性，深拷贝会复制整个对象，包括对象的所有属性。浅拷贝会导致修改引用类型所指向的对象时，原始对象和浅拷贝出来的新对象都会受到影响。深拷贝则不会影响原始对象。实现浅拷贝可以使用 Object.assign() 方法或扩展运算符；实现深拷贝可以使用 JSON.parse() 和 JSON.stringify() 方法或者递归函数。
