const {expect} = require("chai");
const {caesar} = require("../src/caesar.js");

describe("caesar()", () => {
  const phrase = "thinkful";
  const phraseOriginal = "wklqnixo";
  it("should encode the message by the shift amount to the right", () => {
    const result = caesar(phrase, 3);
  expect(result).to.equal("wklqnixo");
  });
  
  it("should encode the message by the shift amount to the left", () => {
    const result = caesar(phrase, -3);
  expect(result).to.equal("qefkhcri");
  });
  
  it("should decode the given message to its original form", () => {
    const result = caesar(phraseOriginal, 3, false);
  expect(result).to.equal("thinkful");
  });
  
  it("should return false if shift value is not present", () => {
    const result = caesar(phrase, null);
  expect(result).to.equal(false);
  });
  
  it("should return false if shift value is 0", () => {
    const result = caesar(phrase, 0);
  expect(result).to.equal(false);
  });
  
  it("should return false if shift value is less than -25", () => {
    const result = caesar(phrase, -26);
  expect(result).to.equal(false);
  });
  
  it("should return false if shift value is greater than 25", () => {
    const result = caesar(phrase, 40);
  expect(result).to.equal(false);
  });
});
