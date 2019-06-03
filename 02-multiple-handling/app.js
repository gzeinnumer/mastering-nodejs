//no fuction
setTimeout(function(){
    console.log("Saya di panggil dengan jeda 3 detik.");
},3000);
//Saya di panggil dengan jeda 3 detik.

//with function
function order(idOrder,time){
    console.log("idOrder "+idOrder);
    prosesOrder(idOrder,time);
}

function prosesOrder(idOrder,time){
    setTimeout(function(){
        console.log("idOrder "+idOrder+" Processed");
    },time);
}

order(15,3000);
order(17,2000);
// idOrder 15
// idOrder 17
// idOrder 15 Processed in 3sec
// idOrder 17 Processed in 2sec