// script.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const nama = form.querySelector("input[name='nama']").value;
      const barang = form.querySelector("input[name='barang']").value;
      const lokasi1 = form.querySelector("input[name='lokasi1']").value;
      const lokasi2 = form.querySelector("input[name='lokasi2']").value;
      const catatan = form.querySelector("textarea[name='catatan']").value;
  
      const nomorAdmin = "628888034201"; // Ganti dengan nomor admin kamu
      const pesan = `Halo kak! Saya ${nama}, mau titip: ${barang}, penjemputan ${lokasi1}, pengiriman ${lokasi2}. Catatan: ${catatan}`;
      const urlWA = `https://wa.me/${nomorAdmin}?text=${encodeURIComponent(pesan)}`;
  
      window.open(urlWA, '_blank');
    });
  });