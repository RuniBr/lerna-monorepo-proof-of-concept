require("dotenv").config();
const path = require("path");
const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@shared/components"]);

module.exports = withPlugins([withTM], {
  webpack: webpackConfig => {
    const { resolve } = webpackConfig || {};

    return {
      ...webpackConfig,
      resolve: {
        ...resolve,
        modules: Array.from(new Set([path.resolve(__dirname, "/"), "node_modules", ...resolve.modules]))
      }
    };
  }
});
