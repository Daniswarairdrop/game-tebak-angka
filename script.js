const angka = Math.floor(Math.random() * 10) + 1;

function tebak() {
  const input = document.getElementById("tebakan").value;
  const hasil = document.getElementById("hasil");

  if (parseInt(input) === angka) {
    hasil.innerText = "Benar! 🎉";
  } else {
    hasil.innerText = "Salah! Coba lagi.";
  }
}
