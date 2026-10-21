// LATIHAN 1: Menampilkan Output
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// LATIHAN 3: Function dan Operasi Aritmetika
function operasiDasar(a, b) {
    console.log("=== Hasil Latihan 3 ===");
    console.log("Penjumlahan:", a + b);
    console.log("Pengurangan:", a - b);
    console.log("Perkalian:", a * b);
    console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
    console.log("Modulus:", a % b);
}
operasiDasar(9, 4); 

// LATIHAN 6: Fungsi Cek Bilangan Genap / Ganjil
function cekBilangan() {
    const input = document.getElementById("bilangan").value;
    const angka = Number(input);
    const hasil = document.getElementById("hasilBilangan");

    if (input.trim() === "" || !Number.isInteger(angka)) {
        hasil.textContent = "Masukkan bilangan bulat yang valid.";
    } else if (angka % 2 === 0) {
        hasil.textContent = "Bilangan genap";
    } else {
        hasil.textContent = "Bilangan ganjil";
    }
}

// LATIHAN 7: Fungsi Mengubah Warna Latar
function ubahWarnaLatar(warna) {
    document.body.style.backgroundColor = warna;
}

// LATIHAN 8: Perhitungan Otomatis Checkbox
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
    item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
    let total = 0;
    daftarMenu.forEach((item) => {
        if (item.checked) {
            total += Number(item.value);
        }
    });
    document.getElementById("total").textContent = total.toLocaleString("id-ID");
}
// ==========================================
// MINI PROJECT: Kalkulator Nilai Mahasiswa
// ==========================================
function hitungKalkulatorNilai() {
    const nilaiTugas = Number(document.getElementById("tugas").value);
    const nilaiUts = Number(document.getElementById("uts").value);
    const nilaiUas = Number(document.getElementById("uas").value);

    // Validasi rentang nilai 0 - 100
    if (nilaiTugas < 0 || nilaiTugas > 100 || nilaiUts < 0 || nilaiUts > 100 || nilaiUas < 0 || nilaiUas > 100) {
        alert("Input nilai tidak valid! Nilai harus berada di rentang 0 sampai 100.");
        return;
    }

    // Hitung Nilai Akhir (Tugas 30%, UTS 30%, UAS 40%)
    const nilaiAkhir = (nilaiTugas * 0.30) + (nilaiUts * 0.30) + (nilaiUas * 0.40);

    // Menentukan Predikat Huruf
    let predikat = "E";
    if (nilaiAkhir >= 85) predikat = "A";
    else if (nilaiAkhir >= 75) predikat = "B";
    else if (nilaiAkhir >= 60) predikat = "C";
    else if (nilaiAkhir >= 50) predikat = "D";

    // Menentukan Status Kelulusan
    const status = nilaiAkhir >= 60 ? "Lulus" : "Belum lulus";

    // Tampilkan hasil ke halaman HTML
    document.getElementById("txtNilaiAkhir").textContent = nilaiAkhir.toFixed(2);
    document.getElementById("txtPredikat").textContent = predikat;
    document.getElementById("txtStatus").textContent = status;

    // Munculkan bagian hasil kalkulasi
    document.getElementById("hasilKalkulator").style.display = "block";
}
