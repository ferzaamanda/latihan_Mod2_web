document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Menghentikan pengiriman form bawaan

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const alamat = document.getElementById("address").value;

            if (name.trim() === "" || email.trim() === "" || alamat.trim() === "") {
                alert("Harap isi semua kolom formulir!");
            } else {
                alert("Registrasi Berhasil!");
            }
        
    });
});
