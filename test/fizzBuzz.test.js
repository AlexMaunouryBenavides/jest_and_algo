const fizzbuzz = require("../algo/fizzBuzz");

test("verifier si argument est un number", () => {
   expect(fizzbuzz("abc")).toBe(false);
   expect(fizzbuzz(null)).toBe(false);
   expect(fizzbuzz(undefined)).toBe(false);
   expect(fizzbuzz({})).toBe(false);
});

test('return ["1","2","fizz"] pour n = 3', () => {
   expect(fizzbuzz(3)).toEqual(["1", "2", "fizz"]);
});

test("return buzz pour le chiffre 5", () => {
   const result = fizzbuzz(5);
   expect(result[4]).toBe("buzz");
});

test("return fizzbuzz pour le chiffre 15", () => {
   const result = fizzbuzz(15);
   expect(result[14]).toBe("fizzbuzz");
});
