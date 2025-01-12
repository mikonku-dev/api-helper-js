const path = require("path");
const nodeExternals = require("webpack-node-externals"); // Jika Anda menggunakan ini

module.exports = {
  entry: "./src/index.js", // Titik masuk file Anda
  target: "web", // Target untuk browser //
  // externals: [nodeExternals()], // Jika Anda ingin mengecualikan dependensi dari node_modules
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "apihelper.bundle.js",
    library: "apihelper",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    // Resolusi untuk modul-modul Node.js yang tidak ada di browser
    alias: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
    fallback: {
      buffer: false, // Tidak menyertakan polyfill untuk buffer
    },
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  mode: "production",
};
