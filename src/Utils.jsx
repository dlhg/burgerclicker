
export function getRandomIndex(array) {
    const length = array.length;
    return getRandomNumber(length);
}
export function getRandomNumber(length) {
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * (length + 1));
    return randomNumber;
}


