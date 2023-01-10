
const randomIndexGenerator = (list=[0,1]) => {
  let index = Math.floor(Math.random() * list.length);
  return index;
};

export default randomIndexGenerator;
