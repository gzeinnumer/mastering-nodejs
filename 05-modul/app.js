//memanggil function dalam object
var myObject = {
    name : "M. Fadli Zein",
    age : 22,
    print : function(){
        console.log(this.name +"is "+this.age+" years old"); //M. Fadli Zeinis 22 years old
        //bkti kalau this ini milik myObject
        console.log(this === myObject); //true
    }
};
function myFunction(){
        console.log('my = Function called'); //my = Function called
        console.log(this === global); //true
};

myObject.print();
myFunction();
