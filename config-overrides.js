module.exports = function override(config, env) {
  //do stuff with the webpack config...
  require("react-app-rewire-postcss")(config, {
    plugins: loader => [require("postcss-preset-env")(), require("precss")(),require("autoprefixer")()]
  });

  return config;
};
