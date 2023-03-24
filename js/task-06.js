const input = document.querySelector('#validation-input');
const dataLength = input.dataset.length;
input.addEventListener("blur", () => {
    const inputLength = input.value.length;
    if (dataLength < inputLength || dataLength > inputLength) {
        // input.classList.add("valid");
        input.classList.add("invalid");
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
});
