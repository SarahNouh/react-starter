/**
 * @Author: sarah
 * @Date:   2019-07-31T13:41:35+02:00
 * @Last modified by:   sarah
 * @Last modified time: 2019-08-04T12:15:39+02:00
 */

const { override, fixBabelImports } = require("customize-cra");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  require("react-app-rewire-postcss")(config, {
    plugins: [
      loader => [
        require("postcss-preset-env")(),
        require("precss")(),
        require("autoprefixer")()
      ]
    ]
  });
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  });

  return config;
};
