const qrInput = document.querySelector(".qr-input");
const qrButton = document.querySelector(".qr-button");
const qrImage = document.querySelector(".qr-image");

qrButton.addEventListener('click', () => {
    const inputValue = qrInput.value;

    if (!inputValue.trim()) {
        alert("Please enter a valid URL");
    } else {
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrImage.alt = `QR Code from ${inputValue}`;
    }
});
