/*
 * Library functions used throughout
 */

//
var genRandomNumber = function(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
