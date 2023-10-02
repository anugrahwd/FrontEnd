// login.js

const wrapper = document.querySelector(".wrapper"),
signupHeader = document.querySelector(".signup header"),
loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
wrapper.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Lakukan validasi login di sini, contoh sederhana:
        if (username === "pengguna" && password === "password") {
            // Jika login berhasil, arahkan ke halaman booking
            window.location.href = "booking.html";
        } else {
            // Jika login gagal, tampilkan pesan kesalahan
            alert("Login gagal. Periksa kembali username dan password Anda.");
        }
    });
});
