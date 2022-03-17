export default (array = []) => {
  const arr = array.map((el) => el);

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); //Random index
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Mixin
  }

  return arr;
};
