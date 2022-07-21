import axios from "axios";

export const createUser = async (name, email, mobuleNumber) => {
  try {
    const res = await axios.post("https://dummyjson.com/users/add", {
      firstName: "Muhammad",
      lastName: "Ovi",
      age: 250,
    });
    return true;
  } catch (error) {
    return false;
  }
};
