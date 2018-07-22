'use strict';

// const mock = require('mock-require');
// const data = require('./fixture1.json');
// const nock = require('nock');

// mock('requset-promise', async () => {
//   return data;
// });

const { currency } = require('../../converters/currency');

// const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

// describe('example', () => {
//   it('should work', async () => {
//     expect(await example(10)).toBe(11);
//   });
// });

describe('currency converter', () => {
  it('should be defined', async () => {
    expect(currency).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof currency).toBe('function');
  });
  it('should return a number', async () => {
    expect(typeof await currency(100, 'PLN', 'USD')).toBe('number');
  });
  it('should return proper value for 100PLN', async () => {
    expect(await currency(100, 'PLN', 'USD')).toBe(371.7);
  });
  it('should return proper value for 100PLN', async () => {
    // nock('http://api.nbp.pl/api/exchangerates/rates/a/')
    //   .get('usd?format=json')
    //   .reply(200, {
    //     "rates":[{"no":"140/A/NBP/2018","effectiveDate":"2018-07-20","mid":4.7170}]});
    expect(await currency(1, 'PLN', 'USD')).toBe(3.72);
  });
});
