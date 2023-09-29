document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const hasilTabel = document.getElementById("hasilTabel");
    const downloadButton = document.getElementById("downloadButton");

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const nomor = document.getElementById("nomor").value;
        const dokter = document.getElementById("dokter").value;
        const tanggal = document.getElementById("tanggal").value;
        const jam = document.getElementById("jam").value;

        // Membuat baris baru di tabel
        const newRow = hasilTabel.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellNomor = newRow.insertCell(1);
        const cellDokter = newRow.insertCell(2);
        const cellTanggal = newRow.insertCell(3);
        const cellJam = newRow.insertCell(4);

        // Menambahkan data hasil booking ke dalam sel-sel tabel
        cellNama.innerHTML = nama;
        cellNomor.innerHTML = nomor;
        cellDokter.innerHTML = dokter;
        cellTanggal.innerHTML = tanggal;
        cellJam.innerHTML = jam;

        // Tampilkan tombol "Download PDF"
        downloadButton.style.display = "block";

        // Reset formulir
        bookingForm.reset();
    });

    downloadButton.addEventListener("click", function () {
        // Konversi elemen hasil booking menjadi PDF (seperti yang telah dijelaskan sebelumnya)
        const element = document.getElementById("hasilBooking");
        const pdfOptions = { margin: 10, filename: "booking_dokter.pdf", image: { type: "jpeg", quality: 0.98 } };

        html2pdf().from(element).set(pdfOptions).save();
    });
});

 