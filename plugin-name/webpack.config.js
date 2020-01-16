const path = require("path");

module.exports = env => {
  var entry = {};
  if (env.development) {
    entry = {
      "public/js/react-public.min": "./react-src/public.js",
      "admin/js/react-admin.min": "./react-src/admin.js"
    };
  } else {
    entry = {
      "public/js/react-public": "./react-src/public.js",
      "admin/js/react-admin": "./react-src/admin.js"
    };
  }
  return {
    entry,
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname)
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"]
            }
          }
        }
      ]
    }
  };
};
