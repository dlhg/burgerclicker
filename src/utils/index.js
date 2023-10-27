export function scaleItemPrice(basePrice, itemCount) {
  return Math.round(basePrice + basePrice ** (1 + itemCount / 6));
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
  } else {
    return "An extremely large number";
  }
}
