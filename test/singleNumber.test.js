const singleNumber = require("../algo/singleNumber");

test("arr ne contient que 5", () => {
   expect(singleNumber([5])).toBe(5);
});

test("[1,2,1] doit return 2", () => {
   expect(singleNumber([1, 2, 1])).toBe(2);
});
test("[3,3,9] doit return 9", () => {
   expect(singleNumber([3, 3, 9])).toBe(9);
});
test("[8,5,5] doit return 8", () => {
   expect(singleNumber([8, 5, 5])).toBe(8);
});
test("[10, 2, 10, 5, 4, 2, 4] doit return 5", () => {
   expect(singleNumber([10, 2, 10, 5, 4, 2, 4])).toBe(5);
});

test("[2,4,7,2] doit return 7", () => {
   expect(singleNumber([2, 4, 7, 2, 4])).toBe(7);
});
