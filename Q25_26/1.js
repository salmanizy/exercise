var nama;
nama = "Salman"; // inisialisasi, global scope

function Show() {
    console.log("Nama: " + nama);
    
    if(nama === "Salman"){
        const makanan = "Telor Dadar"; // deklarasi dan inisialisasi, block scope
        const minuman = "Teh Manis"; // deklarasi dan inisialisasi, block scope
        console.log("Makanan Kesukaan: " + makanan); // menampilkan makanan, block scope
        console.log("Minuman Kesukaan: " + minuman); // menampilkan minuman, block scope
    }
}

Show();