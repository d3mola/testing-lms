/**
 * @description checks if the number ofl "X" and "O" in the word supplied are equal
 * 
 * @param { string } str word to be checked
 * 
 * @returns { boolean | string } boolean representasion of X and O equaltiy or Error message
 */
var XO = (str) => {

  if(typeof str === 'undefined' || typeof str === 'null') {
    return 'Please pass in the word to be tested';
  }

  if(typeof str !== 'string') {
    return 'Argument should be a string';
  }

  if(str.length === 0) {
    return true;
  }

  let xCount = 0;
  let yCount = 0;

  for (let letter of str) {

    if (letter.toLowerCase() === 'x') {
      xCount += 1;
    }

    if (letter.toLowerCase() === 'o') {
      yCount += 1;
    }

  }

  return xCount === yCount;

}

module.exports = XO;
