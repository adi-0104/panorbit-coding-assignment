
const randomIndexGenerator = (list) => {
  let index = Math.floor(Math.random() * list.length);
  return index;
};

export default randomIndexGenerator;
