export default (name) => {
  const [firstName, secondName, ...rest] = name.split(' ');

  if (secondName) {
    const initialLetters =
      firstName[0].toUpperCase() + secondName[0].toUpperCase();
    return initialLetters;
  }

  const initialLetters =
    firstName[0].toUpperCase() + firstName[1].toUpperCase();
  return initialLetters;
};
