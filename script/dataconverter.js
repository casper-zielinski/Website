const units = {
    Bit: 1 / 8,
    Byte: 1,
    Kilobyte: 1000,
    Megabyte: 1000 ** 2,
    Gigabyte: 1000 ** 3,
};

const userInput = document.getElementById("unit");
const convertButton = document.getElementById("convert");
const fromSelect = document.querySelector("#calculate-from");
const toSelect = document.querySelector("#calculate-to");
const resultField = document.querySelector("#convert-result");


convertButton.addEventListener("click", function () {
    const inputValue = parseFloat(userInput.value);
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;

    if (isNaN(inputValue)) {
        resultField.value = "Input is not a valid number!";
        return;
    }

    const valueInBytes = inputValue * units[fromUnit];

    const result = valueInBytes / units[toUnit];

    resultField.value = result.toFixed(12);
});