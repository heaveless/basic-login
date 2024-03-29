import { h } from "preact";

import { logout } from "../services/auth";

const Theme = (props) => {
  return (
    <div class="theme">
      <nav class="bg-white py-2 md:py-4">
        <div class="container px-4 mx-auto md:flex md:items-center">
          <div
            class="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
            <a
              onClick={logout}
              href=""
              class="p-2 lg:px-4 md:mx-2 text-neutral-700 text-center border border-solid border-neutral-700rounded hover:bg-neutral-700 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              logout
            </a>
          </div>
        </div>
      </nav>

      <div class="bg-neutral-700 text-white py-6 md:py-12">
        <div class="container px-4 mx-auto">{props.children}</div>
      </div>
    </div>
  );
};

export default Theme;
