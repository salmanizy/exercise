var Gender;
(function (Gender) {
    Gender["LakiLaki"] = "Laki-Laki";
    Gender["Perempuan"] = "Perempuan";
})(Gender || (Gender = {}));
var Spesialis;
(function (Spesialis) {
    Spesialis["Mata"] = "Mata";
    Spesialis["Jantung"] = "Jantung";
    Spesialis["Pencernaan"] = "Pencernaan";
})(Spesialis || (Spesialis = {}));
var Shift;
(function (Shift) {
    Shift["Malam"] = "Malam";
    Shift["Siang"] = "Siang";
    Shift["Pagi"] = "Pagi";
})(Shift || (Shift = {}));
var pasien1 = {
    id: 1,
    nama: "Salman",
    umur: 25,
    gender: Gender.LakiLaki,
    jenisPekerjaan: "Pelajar"
};
var dokter1 = {
    id: 2,
    nama: "Dr. Bobby Siswanto",
    umur: 45,
    gender: Gender.LakiLaki,
    jenisPekerjaan: "Dokter",
    spesialis: Spesialis.Mata,
    ruangPraktek: "Ruang 101"
};
var perawat1 = {
    id: 3,
    nama: "Marina",
    umur: 28,
    gender: Gender.Perempuan,
    jenisPekerjaan: "Perawat",
    shift: Shift.Siang
};
console.log(pasien1);
console.log(dokter1);
console.log(perawat1);
