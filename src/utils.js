/**
 * Returns the decimal representation of the passed binary number
 *
 * @param {string} binary binary digits as a string
 */
export function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

/**
 * Returns an array of binary digits with each item containing:
 * - id: The digit's unique id
 * - index: 0 based index of the digit, from left to right
 * - value: The binary digit value
 *
 * This function is used to initialize an array used to render the list of
 * binary digits in the page
 *
 * @param {number} digits Number of binary digits
 */
export function getBinaryPositions(digits) {
  let binaryValue = digits * (digits * 2);
  const binaryPositions = [];

  for (let i = 0; i < digits; i++) {
    binaryPositions.push({
      id: `binary-digit-${binaryValue}`,
      index: i,
      value: binaryValue
    });
    binaryValue /= 2;
  }

  return binaryPositions;
}
