export function scaleItemPrice(basePrice, itemCount){
    return Math.round(basePrice + basePrice ** (1 + itemCount / 6))
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
