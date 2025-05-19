const amountInput = document.querySelector('.number');
const fromCurrency = document.querySelector('.from-currency');
const toCurrency = document.querySelector('.to-currency');
const convertButton = document.querySelector('.button');
const resultInput = document.querySelector('.result-number');

window.addEventListener('load', () => {
  fromCurrency.value = 'USD';
  toCurrency.value = 'EUR';
  getExchangeRates(fromCurrency.value);
});

let exchangeRates = {};

async function getExchangeRates(base = 'USD') {
  const url = `https://api.frankfurter.app/latest?from=${base}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    exchangeRates = data.rates;
    exchangeRates[base] = 1;
  } catch (error) {
    alert('Fehler beim Laden der Wechselkurse');
  }
}

window.addEventListener('load', () => {
  getExchangeRates(fromCurrency.value);
});

fromCurrency.addEventListener('change', () => {
  getExchangeRates(fromCurrency.value);
});

function convertCurrency() {
  let amount = amountInput.value.replace(',', '.');
  amount = parseFloat(amount);

  if (isNaN(amount)) {
    alert('Bitte einen gültigen Betrag eingeben!');
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
    alert('Wechselkurs nicht verfügbar');
    return;
  }

  const result = amount * rate;
  resultInput.value = result.toFixed(2).replace('.', ',');
}

convertButton.addEventListener('click', convertCurrency);
