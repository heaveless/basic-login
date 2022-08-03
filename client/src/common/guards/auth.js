import { getToken } from "../../services/storage";

export default () =>
  new Promise((resolve, reject) => {
    const token = getToken();

    if (token) resolve();
    else {
      window.location.href = "/auth";
      reject();
    }
  });
