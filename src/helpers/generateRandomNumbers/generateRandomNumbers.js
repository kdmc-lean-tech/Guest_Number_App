
export const generateRandomNumbers = (min, max, exclude) => {
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generateRandomNumbers(min, max, exclude);
  } else {
    return random;
  }
}
