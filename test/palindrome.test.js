const palindrome = require("../algo/palindrome");

test("kayak devrait return kayak ", () => {
   expect(palindrome("kayak")).toBe(true);
});

test("chaine vide devrait retourner false", () => {
   expect(palindrome("")).toBe(false);
});
test("hello devrait return false", () => {
   expect(palindrome("hello")).toBe(false);
});
