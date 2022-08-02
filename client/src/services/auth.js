import axios from "../configs/axios";

const http = axios.getInstance();

export const login = ({ username, password }) => {
  const encode = Buffer.from(`${username}:${password}`).toString("base64");

  return http.get("/login", {
    headers: {
      Authorization: `Basic ${encode}`,
    },
  });
};
