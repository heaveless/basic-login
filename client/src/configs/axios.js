import axios from "axios";

const configure = () => {
  let instance = null;

  const configuration = {
    baseURL: process.env.SERVER,
    timeout: 1000,
    headers: { "Content-Type": "application/json" },
  };

  return {
    getInstance: () => {
      if (!instance) instance = axios.create(configuration);
      return instance;
    },
  };
};

export default configure();
