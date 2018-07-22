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

const base = 'http://api.nbp.pl/api/exchangerates/rates/a';
const format = 'format=json';
const json = true;

const rate = async (unit) => {
  try {
    const url = `${base}/${unit.toLowerCase()}/?${format}`;
    const response = await request({ url, json });
    return response.rates[0].mid;
  } catch (err) {
    return null;
  }
};
const usd = () => rate('usd');
const eur = () => rate('eur');

const currency = async (value, from, to) => {
  if (from === to) {
    return value;
  }
  if (from === 'PLN' && to === 'USD') {
    return parseFloat((value * await usd()).toFixed(2));
  }
  if (from === 'USD' && to === 'PLN') {
    return parseFloat((value / await usd()).toFixed(2));
  }
  if (from === 'PLN' && to === 'EUR') {
    return parseFloat((value * await eur()).toFixed(2));
  }
  if (from === 'EUR' && to === 'PLN') {
    return parseFloat((value / await eur()).toFixed(2));
  }
  return 0;
};

module.exports = {
  currency,
};
