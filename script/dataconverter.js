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
const switchButton = document.querySelector('.switch-arrows');

// Standardwerte setzen beim Laden
window.addEventListener('load', () => {
    fromSelect.value = 'Bit';
    toSelect.value = 'Byte';
});

// Umrechnungsfunktion
function convertUnits() {
    const inputValue = parseFloat(userInput.value);
    const fromUnit = fromSelect.value;
    const toUnit = toSelect.value;

    if (isNaN(inputValue)) {
        resultField.value = '';
        return;
    }

    const valueInBytes = inputValue * units[fromUnit];
    const result = valueInBytes / units[toUnit];

    resultField.value = result.toFixed(12);
}

// Umrechnung bei Button-Klick
convertButton.addEventListener("click", convertUnits);

// Switch-Button zum Tauschen der Einheiten + automatische Umrechnung
switchButton.addEventListener('click', () => {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;

    convertUnits();
});
