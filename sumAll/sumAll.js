const sumAll = function(num1, num2) {

    if (isPositiveNumber(num1) && isPositiveNumber(num2)) {
      if (num1 > num2) {
        return calcSumNumbersBetween(num2, num1);
      } else { 
        return calcSumNumbersBetween(num1, num2);   
      }        
    } 
    return "ERROR"; 
    };  
     


module.exports = sumAll




function isPositiveNumber(number) {
  if (typeof(number) !== "number" || number < 0) {
    return false;
  }
  return true;
}
function calcSumNumbersBetween(lowerNumber, higherNumber) {
    let total = 0;
    for (lowerNumber; lowerNumber <= higherNumber; lowerNumber++) {
         total += lowerNumber;
    }
    return total;
}