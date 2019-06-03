var myObject = {
    name : "M. Fadli Zein",
    age : 22
};

console.log(myObject); //{ name: 'M. Fadli Zein', age: 22 }

var myObject2= myObject;
myObject2.age=21;
console.log(myObject); //{ name: 'M. Fadli Zein', age: 21 }
console.log(myObject2); //{ name: 'M. Fadli Zein', age: 21 }
// myObject juga berubah karna itu lah object references