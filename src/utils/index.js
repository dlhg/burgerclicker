// export function scaleItemPrice(basePrice, itemCount) {
//   return Math.round(basePrice + basePrice ** (1 + itemCount / 6));
// }

export function scaleItemPrice(basePrice, itemCount) {
  return Math.round(basePrice * 1.15 ** itemCount);
}

export function getRandomIndex(array) {
  const length = array.length;
  return getRandomNumber(length);
}
export function getRandomNumber(length) {
  const randomDecimal = Math.random();
  const randomNumber = Math.floor(randomDecimal * (length + 1));
  return randomNumber;
}

export function findAverageArrayValue(arr) {
  const arrLength = arr.length;
  let sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  //only shows the first two decimal values
  return (sum / arrLength).toFixed(2);
}

export function formatNumber(number) {
  if (number < 1e6) {
    return number.toFixed(0);
  } else if (number < 1e9) {
    return (number / 1e6).toFixed(3) + " million";
  } else if (number < 1e12) {
    return (number / 1e9).toFixed(3) + " billion";
  } else if (number < 1e15) {
    return (number / 1e12).toFixed(3) + " trillion";
  } else if (number < 1e18) {
    return (number / 1e15).toFixed(3) + " quadrillion";
  } else if (number < 1e21) {
    return (number / 1e18).toFixed(3) + " quintillion";
  } else if (number < 1e24) {
    return (number / 1e21).toFixed(3) + " sextillion";
  } else if (number < 1e27) {
    return (number / 1e24).toFixed(3) + " septillion";
  } else if (number < 1e30) {
    return (number / 1e27).toFixed(3) + " octillion";
  } else if (number < 1e33) {
    return (number / 1e30).toFixed(3) + " nonillion";
  } else if (number < 1e36) {
    return (number / 1e33).toFixed(3) + " decillion";
  } else if (number < 1e39) {
    return (number / 1e36).toFixed(3) + " undecillion";
  } else if (number < 1e42) {
    return (number / 1e39).toFixed(3) + " duodecillion";
  } else if (number < 1e45) {
    return (number / 1e42).toFixed(3) + " tredecillion";
  } else if (number < 1e48) {
    return (number / 1e45).toFixed(3) + " quattuordecillion";
  } else if (number < 1e51) {
    return (number / 1e48).toFixed(3) + " quindecillion";
  } else if (number < 1e54) {
    return (number / 1e51).toFixed(3) + " sexdecillion";
  } else if (number < 1e57) {
    return (number / 1e54).toFixed(3) + " septendecillion";
  } else if (number < 1e60) {
    return (number / 1e57).toFixed(3) + " octodecillion";
  } else if (number < 1e63) {
    return (number / 1e60).toFixed(3) + " novemdecillion";
  } else if (number < 1e66) {
    return (number / 1e63).toFixed(3) + " vigintillion";
  } else {
    return "An extremely large number";
  }
}

export function formatNumberTruncated(number) {
  if (number < 1e6) {
    return number.toFixed(0);
  } else if (number < 1e9) {
    return (number / 1e6).toFixed(1) + " M";
  } else if (number < 1e12) {
    return (number / 1e9).toFixed(1) + " B";
  } else if (number < 1e15) {
    return (number / 1e12).toFixed(1) + " t";
  } else if (number < 1e18) {
    return (number / 1e15).toFixed(1) + " q";
  } else if (number < 1e21) {
    return (number / 1e18).toFixed(1) + " Q";
  } else if (number < 1e24) {
    return (number / 1e21).toFixed(1) + " s";
  } else if (number < 1e27) {
    return (number / 1e24).toFixed(1) + " S";
  } else if (number < 1e30) {
    return (number / 1e27).toFixed(1) + " o";
  } else if (number < 1e33) {
    return (number / 1e30).toFixed(1) + " n";
  } else if (number < 1e36) {
    return (number / 1e33).toFixed(1) + " d";
  } else if (number < 1e39) {
    return (number / 1e36).toFixed(1) + " U";
  } else if (number < 1e42) {
    return (number / 1e39).toFixed(1) + " D";
  } else if (number < 1e45) {
    return (number / 1e42).toFixed(1) + " T";
  } else if (number < 1e48) {
    return (number / 1e45).toFixed(1) + " Qt";
  } else if (number < 1e51) {
    return (number / 1e48).toFixed(1) + " Qd";
  } else if (number < 1e54) {
    return (number / 1e51).toFixed(1) + " Sd";
  } else if (number < 1e57) {
    return (number / 1e54).toFixed(1) + " St";
  } else if (number < 1e60) {
    return (number / 1e57).toFixed(1) + " O";
  } else if (number < 1e63) {
    return (number / 1e60).toFixed(1) + " N";
  } else if (number < 1e66) {
    return (number / 1e63).toFixed(1) + " v";
  } else {
    return "An extremely large number";
  }
}
