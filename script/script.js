// script.js
document.addEventListener("DOMContentLoaded", function () {
    const spesialisSelect = document.getElementById("spesialis");
    const dokterSelect = document.getElementById("dokter");
    const bookingForm = document.getElementById("bookingForm");
    const hasilTabel = document.getElementById("hasilTabel");
    const downloadButton = document.getElementById("downloadButton");

    spesialisSelect.addEventListener("change", function () {
        // Dapatkan nilai spesialis yang dipilih
        const selectedSpesialis = spesialisSelect.value;

        // Hapus semua opsi dokter saat ini
        dokterSelect.innerHTML = "";

        // Tambahkan opsi dokter sesuai dengan spesialis yang dipilih
        switch (selectedSpesialis) {
            case "Spesialis A":
                addDokterOptions(["--..--","Dokter X", "Dokter Y", "Dokter Z"]);
                break;
            case "Spesialis B":
                addDokterOptions(["--..--","Dokter P", "Dokter Q", "Dokter R"]);
                break;
            case "Spesialis C":
                addDokterOptions(["--..--","Dokter F", "Dokter G", "Dokter H"]);
                break;
            default:
                addDokterOptions([]);
        }
    });

    // Fungsi untuk menambahkan opsi dokter ke elemen select
    function addDokterOptions(dokterList) {
        for (const dokter of dokterList) {
            const option = document.createElement("option");
            option.value = dokter;
            option.textContent = dokter;
            dokterSelect.appendChild(option);
        }
    }

    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const nomor = document.getElementById("nomor").value;
        const spesialis = document.getElementById("spesialis").value;
        const dokter = document.getElementById("dokter").value;
        const tanggal = document.getElementById("tanggal").value;
        const waktu = document.getElementById("waktu").value;
        const alamat = document.getElementById("alamat").value;

        const bookingData = {
            nama: nama,
            nomor: nomor,
            spesialis: spesialis,
            dokter: dokter,
            tanggal: tanggal,
            waktu: waktu,
            alamat: alamat,
        };

        // Menambahkan data hasil booking ke tabel
        const newRow = hasilTabel.insertRow();
        const cellNama = newRow.insertCell(0);
        const cellNomor = newRow.insertCell(1);
        const cellSpesialis = newRow.insertCell(2);
        const cellDokter = newRow.insertCell(3);
        const cellTanggal = newRow.insertCell(4);
        const cellWaktu = newRow.insertCell(5);
        const cellAlamat = newRow.insertCell(6);

        cellNama.innerHTML = nama;
        cellNomor.innerHTML = nomor;
        cellSpesialis.innerHTML = spesialis;
        cellDokter.innerHTML = dokter;
        cellTanggal.innerHTML = tanggal;
        cellWaktu.innerHTML = waktu;
        cellAlamat.innerHTML = alamat;
        

        // Menampilkan tombol Download PDF
        downloadButton.style.display = "block";

        // Reset formulir
        bookingForm.reset();
    });

    downloadButton.addEventListener("click", function () {
        // Konversi elemen hasil booking menjadi PDF (seperti yang telah dijelaskan sebelumnya)
        const element = document.getElementById("hasilBooking");
        const pdfOptions = { margin: 10, filename: "booking_dokter.pdf", image: { type: "jpeg", quality: 0.98 } }
        
        html2pdf().from(element).set(pdfOptions).save();
        


    
    });
});
