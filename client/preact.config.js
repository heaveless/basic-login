export default (config, env, helpers, options) => {
    const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
    postCssLoaders.forEach(({ loader }) => {
      const plugins = loader.options.postcssOptions.plugins;
      plugins.unshift(require("tailwindcss"));
    });
    return config;
}