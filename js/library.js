/*
 * Library functions used throughout
 */

//
var genRandomNumber = function(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}



var getScoreRoundedByFactor = function(score) {
  var factor = 1000
  var final = ~~(score / factor);

  var remainder = score % factor;
  remainder = ~~(remainder / (factor / 10));
  remainder = remainder / 10;

  final = final + remainder;


  return final;
}