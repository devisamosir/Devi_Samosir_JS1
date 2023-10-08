// Contoh JS dengan if, else, dan nested if

function hitungBMI(berat, tinggi) {
    const bmi = berat / (tinggi * tinggi);

    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi < 25.9) {
        return "Normal";
    } else {
        return "Gemuk";
    }
}

const beratBadan = 52.4;
const tinggiBadan = 1.6;

const kategoriBeratBadan = hitungBMI(beratBadan, tinggiBadan);
console.log(`Kategori berat badan: ${kategoriBeratBadan}`);


// Contoh JS dengan Switch Case

function nilaiSiswa(nilai) {
    let huruf;
    
    switch (true) {
        case nilai >= 80 && nilai <= 100:
            nilaiHuruf = 'A';
            break;
        case nilai >= 70 && nilai < 80:
            nilaiHuruf = 'B';
            break;
        case nilai >= 60 && nilai < 70:
            nilaiHuruf = 'C';
            break;
        case nilai >= 50 && nilai < 60:
            nilaiHuruf = 'D';
            break;
        default:
            nilaiHuruf = 'E';
    }

    return nilaiHuruf;
}

console.log(nilaiSiswa(85));
console.log(nilaiSiswa(78));
console.log(nilaiSiswa(67));
console.log(nilaiSiswa(54));
console.log(nilaiSiswa(30));


// Contoh JS dengan For Statement

for (let i = 20; i >= 5; i--) {
    console.log("Countdown: " + i);
  }


// Contoh JS dengan While

function cariBilanganPrimaTerbesar(angka) {
    let bilanganPrimaTerbesar = 1;
    let i = 5;

    while (i <= angka) {
        if (angka % i === 0) {
            bilanganPrimaTerbesar = i;
            angka /= i;
        } else {
            i++;
        }
    }

    return bilanganPrimaTerbesar;
}

const angka = 56;
const bilanganPrimaTerbesar = cariBilanganPrimaTerbesar(angka);
console.log(`bilangan prima terbesar dari ${angka} adalah ${bilanganPrimaTerbesar}`);


// Contoh JS dengan do while

let count = 1;

do {
  console.log('Perulangan ke-' + count);
  count++;
} while (count <= 7);


// Contoh JS dengan Function
function perkalian(angka1, angka2) {
    return angka1 * angka2;
  }
  
  const hasilPerkalian = perkalian(8, 10);
  console.log('Hasil perkalian: ', hasilPerkalian);
  