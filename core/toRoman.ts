export const MIN_SAFE_ROMAN_VALUE = 0;
export const MAX_SAFE_ROMAN_VALUE = 3_999;
export function toRoman(num: number): string {
  // the standard form system breaks down for numbers above 3999
  if (num < MIN_SAFE_ROMAN_VALUE || num > MAX_SAFE_ROMAN_VALUE) throw new Error('toRoman only accepts numbers between 0 and 3999')

  // lets use N to represent 0
  // https://en.wikipedia.org/wiki/Roman_numerals#Zero
  if (num === 0) return 'N';
  
  // note: we treat the numerals which have a subtractive form as individual tokens.
  //       this simplifies things, as it removes the need to special-case them while looping
  //       the numerals this applies to are 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM)
  //       read more about the standard roman numaral notation here: https://en.wikipedia.org/wiki/Roman_numerals#Standard_form
  const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  let romanNumeral = "";

  // loop through the decimal values
  for (let i = 0; i < decimalValues.length; i++) {
    // keep looping until the decimal value is less than or equal to the number
    while (decimalValues[i] <= num) {
      // add the corresponding roman numeral to the result string
      romanNumeral += romanNumerals[i];
      // subtract the decimal value from the number
      num -= decimalValues[i];
    }
  }

  return romanNumeral;
}