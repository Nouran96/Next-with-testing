import axios from "axios";

export const fetchUsers = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/users");
};

export const fetchUserDetails = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
