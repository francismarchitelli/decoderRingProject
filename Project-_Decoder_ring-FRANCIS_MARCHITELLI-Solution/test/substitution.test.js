const {expect} = require("chai");
const { substitution } = require('../src/substitution');

describe('substitution function', () => {
  it('should encode a message correctly', () => {
    const input = 'hello world';
    const alphabet = 'qwertzuiopasdfghjklyxcvbnm';
    const expected = 'itssg vgksr';
    const result = substitution(input, alphabet);
    expect(result).to.equal(expected);
  });

  it('should decode a message correctly', () => {
    const input = 'itssg vgksr';
    const alphabet = 'qwertzuiopasdfghjklyxcvbnm';
    const expected = 'hello world';
    const result = substitution(input, alphabet, false);
    expect(result).to.equal(expected);
  });

  it('should return false if alphabet is invalid', () => {
    const input = 'hello world';
    const alphabet = 'abc';
    const expected = false;
    const result = substitution(input, alphabet);
    expect(result).to.equal(expected);
  });

  it('should return false if alphabet contains duplicate characters', () => {
    const input = 'hello world';
    const alphabet = 'abcdefghijklmnopqrstuvwxyzx';
    const expected = false;
    const result = substitution(input, alphabet);
    expect(result).to.equal(expected);
  });

  it('should maintain spaces in input', () => {
    const input = 'hello world';
    const alphabet = 'qwertzuiopasdfghjklyxcvbnm';
    const expected = 'itssg vgksr';
    const result = substitution(input, alphabet);
    expect(result).to.equal(expected);
  });

  it('should ignore capital letters in input', () => {
    const input = 'Hello World';
    const alphabet = 'qwertzuiopasdfghjklyxcvbnm';
    const expected = 'itssg vgksr';
    const result = substitution(input, alphabet);
    expect(result).to.equal(expected);
  });
});
