function fizzbuzz(n) {
   let res = [];
   if (typeof n !== "number") {
      return false;
   }
   for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
         res.push("fizzbuzz");
      } else if (i % 3 === 0) {
         res.push("fizz");
      } else if (i % 5 === 0) {
         res.push("buzz");
      } else {
         res.push(String(i));
      }
   }

   return res;
}
fizzbuzz(15);

module.exports = fizzbuzz;
