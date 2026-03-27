function palindrome(str) {
   if (str === "") return false;
   //    const reversed = str.split("").reverse().join("");
   //    if (reversed === str) {
   //       return true;
   //    } else {
   //       return false;
   //    }

   //    si premiere et derniere lettre sont identique
   // si deuxieme et avant derniere lettre sont identique
   // etc
   let gauche = 0;
   let droite = str.length - 1;
   while (gauche < droite) {
      if (str[gauche] !== str[droite]) {
         return false;
      }
      gauche++;
      droite--;
   }
   return true;
}
module.exports = palindrome;
