console.log("=====Global======");
var x = 25;
let nama =  "Salman";

function global(){
    console.log(`Usia ${nama} adalah ${x} tahun`)
}

global();

console.log("=====Local======");

function hitung() {
    var a = 10;
    var b = 20;
    var hasil = a + b;
    console.log(`Hasil Penjumlahan ${a} + ${b} adalah ${hasil}`);
}

hitung();

function cekAngka(angka) {
    if (angka > 0) {
        console.log(`Angka ${angka} bernilai positif`)
    } else {
        console.log(`Angka ${angka} bernilai negatif`)
    }
}

cekAngka(5);

console.log("=====Block Scope======");
const y = true;
if (true) {
    const x = 12
    console.log(`Value hanya berlaku di dalam if: ${x}`)
}

for (var x = 1; x <= 3; x++){
    console.log(x)
}