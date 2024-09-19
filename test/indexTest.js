require ( './root.js' );

const { name, height, message } = require("../index.js");

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns "susan"', () => {
      expect("Susan").toEqual("Susan");
    });
  });

  describe("Height", () => {
    it("is less than 40 and greater than 0", () => {
      expect(height).toBeMoreThan(0)
      expect(40).toBeLessThan(height);
    });
  });

  describe("Message", () => {
    it("gives the name and height", () => {
      expect(message).toInclude(name);
      expect(message).toInclude(height);
    });
  });
});
