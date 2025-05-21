const amountInput = document.querySelector('.number');
const fromCurrency = document.querySelector('.from-currency');
const toCurrency = document.querySelector('.to-currency');
const convertButton = document.querySelector('.button');
const resultInput = document.querySelector('.result-number');
const switchButton = document.querySelector('.switch-arrows');

let exchangeRates = {};

// Beim Laden der Seite Standardwerte setzen und Wechselkurse laden
window.addEventListener('load', () => {
  fromCurrency.value = 'USD';
  toCurrency.value = 'EUR';
  getExchangeRates(fromCurrency.value);
});

// Wechselkurse abrufen
async function getExchangeRates(base = 'USD') {
  const url = `https://api.frankfurter.app/latest?from=${base}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    exchangeRates = data.rates;
    exchangeRates[base] = 1;
  } catch (error) {
    // Kein alert mehr – optional: console.log für Entwickler
    console.error('Fehler beim Laden der Wechselkurse', error);
  }
}

// Wechselkurs neu laden, wenn die Ausgangswährung geändert wird
fromCurrency.addEventListener('change', () => {
  getExchangeRates(fromCurrency.value);
});

// Währungsumrechnung durchführen
function convertCurrency() {
  let amount = amountInput.value.replace(',', '.');
  amount = parseFloat(amount);

  // Wenn kein gültiger Betrag eingegeben wurde, Ergebnis leer lassen
  if (isNaN(amount)) {
    resultInput.value = '';
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (from === to) {
    resultInput.value = amount.toFixed(2).replace('.', ',');
    return;
  }

  const rate = exchangeRates[to];
  if (!rate) {
    resultInput.value = '';
    return;
  }

  const result = amount * rate;
  resultInput.value = result.toFixed(2).replace('.', ',');
}

// Klick-Event für den Convert-Button
convertButton.addEventListener('click', convertCurrency);

// Währungen tauschen und neu konvertieren
switchButton.addEventListener('click', () => {
  const temp = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = temp;

  getExchangeRates(fromCurrency.value);
  convertCurrency();
});
