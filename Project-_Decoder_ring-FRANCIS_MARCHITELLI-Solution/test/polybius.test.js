// Write your tests here!
const {expect} = require("chai");
const { polybius } = require('../src/polybius');

describe('polybius()', () => {
  it('encodes "thinkful" correctly', () => {
    const expected = '4432423352125413';
    const actual = polybius('thinkful');
    expect(actual).to.equal(expected);
  });

  it('encodes "hello world" correctly', () => {
    const expected = '3251131343 2543241341';
    const actual = polybius('hello world');
    expect(actual).to.equal(expected);
  });

  it('decodes "3251131343 2543241341" correctly', () => {
    const expected = 'hello world';
    const actual = polybius('3251131343 2543241341', false);
    expect(actual).to.equal(expected);
  });

  it('decodes "4432423352125413" correctly', () => {
    const expected = 'th(i/j)nkful';
    const actual = polybius('4432423352125413', false);
    expect(actual).to.equal(expected);
  });

  it('returns false when decoding "44324233521254134"', () => {
    const expected = false;
    const actual = polybius('44324233521254134', false);
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to i and j when decoding", () => {
        const input = "42";
        const actual = polybius(input, encode = false);
        expect(actual).to.include("i");
        expect(actual).to.include("j");
    });
});