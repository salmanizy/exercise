enum Gender {
    LakiLaki = "Laki-Laki",
    Perempuan = "Perempuan"
}

enum Spesialis {
    Mata = "Mata",
    Jantung = "Jantung",
    Pencernaan = "Pencernaan"
}

enum Shift {
    Malam = "Malam",
    Siang = "Siang",
    Pagi = "Pagi"
}

interface Pasien {
    id: number;
    nama: string;
    umur: number;
    gender: Gender;
    jenisPekerjaan: string;
}

interface Dokter extends Pasien {
    spesialis: Spesialis;
    ruangPraktek: string;
}

interface Perawat extends Pasien {
    shift: Shift;
}

type GenderType = Gender;
type SpesialisType = Spesialis;
type ShiftType = Shift;

const pasien1: Pasien = {
    id: 1,
    nama: "Salman",
    umur: 25,
    gender: Gender.LakiLaki,
    jenisPekerjaan: "Pelajar"
};

const dokter1: Dokter = {
    id: 2,
    nama: "Dr. Bobby Siswanto",
    umur: 45,
    gender: Gender.LakiLaki,
    jenisPekerjaan: "Dokter",
    spesialis: Spesialis.Mata,
    ruangPraktek: "Ruang 101"
};

const perawat1: Perawat = {
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
