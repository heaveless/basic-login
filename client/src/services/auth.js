import axios from "../configs/axios";
import { setToken, clearAll } from "./storage";

const http = axios.getInstance();

export const login = ({ username, password }, cb) => {
  const encode = Buffer.from(`${username}:${password}`).toString("base64");

  http
    .get("/login", {
      headers: {
        Authorization: `Basic ${encode}`,
      },
    })
    .then(({ status, data: { token } }) => {
      if (status == 200) {
        setToken(token);
        window.location.href = "/";
      }
    })
    .finally(() => cb(true));
};

export const logout = () => clearAll();
