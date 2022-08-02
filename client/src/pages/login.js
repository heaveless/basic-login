import { h } from "preact";

import { login } from "../services/auth";

const Login = () => {
  const getData = (form) =>
    Array.prototype.slice.call(form.elements).reduce((acc, curr) => {
      if (curr.name) Object.assign(acc, { [curr.name]: curr.value });
      return acc;
    }, {});

  const onSubmit = (e) => {
    e.preventDefault();

    const payload = getData(e.target);

    login(payload).then((res) => console.log(res.data));
  };

  return (
    <div class="flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <div class="flex flex-col">
          <label for="username">Username</label>
          <input id="username" name="username" type="text" />
        </div>
        <div class="flex flex-col mt-3">
          <label for="password">Password</label>
          <input id="password" name="password" type="password" />
        </div>
        <div class="flex flex-col mt-3">
          <button type="submit" class="bg-indigo-500 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
