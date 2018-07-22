'use strict';

// Write a function to convert between currencies
// EUR, PLN and USD as reported by NBP API
// as of 2018-01-02
//
// Example values:
//   value = 10
//   from = 'USD'
//   to = 'PLN'
//
// Return a promise that will resolve to the result of conversion.
const request = require('request-promise');

const currency = async (value, from, to) => {
  if (from === to) {
    return value;
  }
  const promiseToUSD = request('http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json',
    { json: true });
  const promiseToEUR = request('http://api.nbp.pl/api/exchangerates/rates/a/eur?format=json',
    { json: true });
  const responseUSD = await promiseToUSD;
  const rateUSD = responseUSD.rates[0].mid;
  const responseEUR = await promiseToEUR;
  const rateEUR = responseEUR.rates[0].mid;
  if (from === 'PLN' && to === 'USD') {
    return parseFloat((value * rateUSD).toFixed(2));
  }
  if (from === 'USD' && to === 'PLN') {
    return parseFloat((value / rateUSD).toFixed(2));
  }
  if (from === 'PLN' && to === 'EUR') {
    return parseFloat((value * rateEUR).toFixed(2));
  }
  if (from === 'EUR' && to === 'PLN') {
    return parseFloat((value / rateEUR).toFixed(2));
  }
  return 0;
};

module.exports = {
  currency,
};
