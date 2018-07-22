'use strict';

const { currency } = require('../../converters/currency');

const example = x => new Promise(resolve => setTimeout(() => resolve(x + 1), 100));

describe('example', () => {
  it('should work', async () => {
    expect(await example(10)).toBe(11);
  });
});

describe('currency converter', () => {
  it('should be defined', async () => {
    expect(currency).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof currency).toBe('function');
  });
  it('should return a number', async () => {
    const x = await currency(100, 'PLN', 'USD');
    expect(typeof x).toBe('number');
  });
  it('should return a number', async () => {
    expect(await currency(100, 'PLN', 'USD')).toBe(371.7);
  });
});
