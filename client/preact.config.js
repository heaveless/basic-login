import dotenv from "dotenv";

import { DefinePlugin, ProvidePlugin } from "webpack";

export default (config, env, helpers, options) => {
  config.plugins.push(
    new DefinePlugin({
      "process.env": JSON.stringify(dotenv.config().parsed),
    })
  );

  config.plugins.push(
    new ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    })
  );

  const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
  postCssLoaders.forEach(({ loader }) => {
    const plugins = loader.options.postcssOptions.plugins;
    plugins.unshift(require("tailwindcss"));
  });
  return config;
};
