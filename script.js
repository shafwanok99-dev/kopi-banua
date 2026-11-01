// Validasi dan pemberitahuan saat pesanan dibuat
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        // Mencegah halaman reload otomatis saat tombol dikirim
        e.preventDefault();
        
        const nama = document.querySelector("#nama").value;
        const wa = document.querySelector("#wa").value;
        const menu = document.querySelector("#pilih-menu").value;
        
        // Validasi nomor WhatsApp minimal 10 digit
        if (wa.length < 10) {
            alert("Nomor WhatsApp minimal 10 digit.");
            return;
        }

        // Validasi pilihan menu wajib dipilih
        if (menu === "") {
            alert("Silakan pilih menu terlebih dahulu.");
            return;
        }

        // Jika lolos validasi, tampilkan pemberitahuan sukses!
        alert("Terima kasih, " + nama + "! Pesanan kamu berhasil dibuat. Kami akan segera menghubungi nomor WhatsApp kamu.");
        
        // Mengosongkan form kembali setelah berhasil
        form.reset();
    });
}