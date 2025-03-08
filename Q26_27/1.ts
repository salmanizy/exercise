let nama : string = "Toni";

let umur : number = 12;

let punyaKTP : boolean = false;

console.log(nama, umur, punyaKTP);

function consoleNama() {
    nama += 100
    console.log("Nama: " + nama)
    if (umur < 17 && !punyaKTP) {
        console.log("Toni belum bisa memiliki SIM")
    }
    // console.log(typeof(nama));
    // console.log(typeof(umur));
    // console.log(typeof(punyaKTP));
}

consoleNama()