'use strict';

const { temperature } = require('../../converters/temperature');

const example = x => x + 1;

describe('example', () => {
  it('should work', () => {
    expect(example(10)).toBe(11);
  });
});

describe('temperature converter', () => {
  it('should be defined', () => {
    expect(temperature).toBeDefined();
  });
  it('should be function', () => {
    expect(typeof temperature).toBe('function');
  });
  it('should return a number', () => {
    const x = temperature(100, 'C', 'K');
    expect(typeof x).toBe('number');
  });
  it('should return proper value for 100C', () => {
    expect(temperature(100, 'C', 'K')).toBe(373.15);
  });
  it('should return proper value for 773.15K', () => {
    expect(temperature(773.15, 'K', 'C')).toBe(500);
  });
  it('should return proper value for 0C', () => {
    expect(temperature(0, 'C', 'F')).toBe(32);
  });
  it('should return proper value for 69.8F', () => {
    expect(temperature(69.8, 'F', 'C')).toBe(21);
  });
  it('should return proper value for 603.15K', () => {
    expect(temperature(603.15, 'K', 'F')).toBe(626);
  });
  it('should return proper value for same scale', () => {
    expect(temperature(100, 'C', 'C')).toBe(100);
  });
});
