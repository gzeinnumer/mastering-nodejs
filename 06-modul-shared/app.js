//todo 2
var modul = require('./modul.js');
var modul_2 = require('./modul_2.js');

console.log(modul.name_1+" is "+modul.age_1+" year old");
//M. Fadli Zein is 22 year old

modul.print;
//You should exports first before use. name M. Fadli Zein

//todo 4, panggil todo3 dengan cara ini
console.log(modul_2.name_o+" is "+modul_2.age_o+" year old. from object");
//M. Fadli Zein dari object is 22 year old. from object

modul_2.print_o();//You should exports first before use. from object