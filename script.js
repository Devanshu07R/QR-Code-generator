document.querySelector(".btn").addEventListener("click", function() {
    const qrText = document.getElementById("qr-text").value.trim();
    const qrImage = document.getElementById("QR-img");
    const qrBox = document.getElementById("QR-box");

    if (qrText) {
        // Update the QR code image source with the new input
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrText)}`;
        qrBox.classList.add("show-img");
    } else {
        alert("Please enter some text or URL.");
        qrBox.classList.remove("show-img");  // Hide the QR code box if input is empty
    }
});