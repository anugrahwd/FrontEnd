document.addEventListener("DOMContentLoaded", function () {
    const messageForm = document.getElementById("message-form");
    const messagesContainer = document.getElementById("messages");
    const USER_STORAGE_KEY = "forum_user";
    const MESSAGES_STORAGE_KEY = "forum_messages";

    // Mengambil nama pengguna dari localStorage jika ada
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUser) {
        document.getElementById("user").value = savedUser;
    }

    // Mengambil pesan dari localStorage jika ada
    const savedMessages = JSON.parse(localStorage.getItem(MESSAGES_STORAGE_KEY)) || [];

    savedMessages.forEach((message, index) => {
        const messageDiv = createMessage(message.user, message.content, index);
        messagesContainer.appendChild(messageDiv);
    });

    messageForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const user = document.getElementById("user").value;
        const content = document.getElementById("content").value;

        if (user.trim() === "" || content.trim() === "") {
            alert("Silakan isi nama pengguna dan pesan Anda.");
            return;
        }

        const message = createMessage(user, content, savedMessages.length);
        messagesContainer.appendChild(message);

        // Menyimpan pesan ke localStorage
        savedMessages.push({ user, content });
        localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));

        // Menyimpan nama pengguna ke localStorage
        localStorage.setItem(USER_STORAGE_KEY, user);

        document.getElementById("user").value = "";
        document.getElementById("content").value = "";
    });

    function createMessage(user, content, index) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");

        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.textContent = user + ":";

        const contentDiv = document.createElement("div");
        contentDiv.classList.add("content");
        contentDiv.textContent = content;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            editMessage(index, content);
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.classList.add("delete"); // Menambahkan kelas "delete"
        deleteButton.addEventListener("click", () => {
            deleteMessage(index);
        });

        messageDiv.appendChild(userDiv);
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(editButton);
        messageDiv.appendChild(deleteButton);

        return messageDiv;
    }

    function editMessage(index, content) {
        const newContent = prompt("Edit pesan:", content);
        if (newContent !== null) {
            savedMessages[index].content = newContent;
            localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));
            const messageDiv = document.querySelectorAll(".message")[index];
            messageDiv.querySelector(".content").textContent = newContent;
        }
    }

    function deleteMessage(index) {
        if (confirm("Apakah Anda yakin ingin menghapus pesan ini?")) {
            savedMessages.splice(index, 1);
            localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(savedMessages));
            const messageDiv = document.querySelectorAll(".message")[index];
            messageDiv.remove();
        }
    }

    // Menambahkan tindakan klik untuk tombol kembali
    const backButton = document.getElementById("back-button");
    backButton.addEventListener("click", function () {
        window.history.back();
    });
});
