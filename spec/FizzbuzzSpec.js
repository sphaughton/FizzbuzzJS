describe("FizzBuzz", function() {

  var fizzbuzz;

    beforeEach(function() {
    fizzbuzz = new FizzBuzz();
    });

  describe("it knows when a number is", function() {

    it("divisible by three", function() {
      expect(fizzbuzz.isDivisiblebyThree(3)).toBe(true);
    });

    it("divisible by five", function() {
      expect(fizzbuzz.isDivisiblebyFive(5)).toBe(true);
    });

    it("divisible by fifteen", function() {
      expect(fizzbuzz.isDivisiblebyFifteen(15)).toBe(true);
    });

  });

  describe("it knows when a number is NOT", function() {

    it("divisible by three", function() {
      expect(fizzbuzz.isDivisiblebyThree(1)).toBe(false);
    });

    it("divisible by five", function() {
      expect(fizzbuzz.isDivisiblebyFive(1)).toBe(false);
    });

    it("divisible by fifteen", function() {
      expect(fizzbuzz.isDivisiblebyFifteen(1)).toBe(false);
    });

  });

  describe("playing a number", function() {

    it("it knows when a number is played", function() {
      expect(fizzbuzz.playNumber(1)).toBe(1);
    });

    it("returns fizz when the number played is divisible by three", function() {
      expect(fizzbuzz.playNumber(3)).toEqual ("fizz");
    });

    it("returns buzz when the number played is divisible by five", function() {
      expect(fizzbuzz.playNumber(5)).toEqual ("buzz");
    });

    it("returns fizzbuzz when the number played is divisible by fifteen", function() {
      expect(fizzbuzz.playNumber(15)).toEqual ("fizzbuzz");
    });

  });

});