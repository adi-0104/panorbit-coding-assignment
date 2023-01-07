import stringToColor from "../utilities/stringToColor";

const stringAvatar = (name,height=30,width=30) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: height,
      height: width,
      mr: 1,
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default stringAvatar
