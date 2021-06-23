const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./test.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(mp3|wav)$/,
        loader: "file-loader",
        options: {
          name: "samples/[name].[ext]",
        },
      },
    ],
  },
};
