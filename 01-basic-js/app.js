//operator MTK
var satu = 10;
var dua = 20;
var tiga = satu+dua;

console.log("Satu tambah Dua adalah "+tiga);

//if switch
var nim = "1601081035";

if(nim=="1601081035"){
    console.log("M. Fadli Zein dengan if");
} else{
    console.log("Bukan M. Fadli Zein dengan if");
} 

switch(nim){
    case "1601081035":
        console.log("M. Fadli Zein dengan switch");
        break;
    default:
        console.log("Bukan siapa-siapa dengan switch");
        break;
}

// for while do while
var n = 4;

for(var i=0; i<n; i++){
    console.log("No ke "+i+" dengan for");
}

var i2=0;
while(i2<n){
    console.log("No ke "+i2+" dengan while");
    i2++;
}

var i3 =0;
do{
    console.log("No ke "+i3+" dengan do while");
    i3++;
} while(i3<n);

//array
var arr = [10,20,30];

console.log(arr);
console.log(arr[1]);

for(var i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//json / object
var json=[
    {
        name: "M. Fadli Zein",
        age : 22
    }, 
    {
        name: "Pai",
        age : 17
    }, 
    {
        name: "Zein",
        age : 21
    }, 
];

for(var i=0; i<json.length; i++){
    console.log(json[i]);
}
for(var i=0; i<json.length; i++){
    console.log(json[i].name+"==>"+json[i].age);
}

//function
function myFunctionVoid(){
    console.log("I am function void");
}
function myFunctionReturn(){
    return "I am function return";
}

myFunctionVoid();
console.log(myFunctionReturn());