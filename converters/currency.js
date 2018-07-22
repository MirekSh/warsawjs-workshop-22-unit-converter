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
  const promise = request('http://api.nbp.pl/api/exchangerates/rates/a/usd?format=json',
    { json: true });
  const response = await promise;
  const rate = response.rates[0].mid;
  if (from === 'PLN' && to === 'USD') {
    return value * rate;
  }
};

module.exports = {
  currency,
};
