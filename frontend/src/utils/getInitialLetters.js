export default (name) => {
  const [firstName, secondName, ...rest] = name.split(' ');

  const initialLetters = firstName[0].toUpperCase() + secondName[0].toUpperCase();
  return initialLetters;
};
