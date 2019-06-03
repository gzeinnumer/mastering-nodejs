//todo 1
var name="M. Fadli Zein";
var age=22;

function print(){
    console.log('You should exports first before use. name '+name);
}

module.exports.name_1 = name;
module.exports.age_1 = age;
module.exports.print = print();
