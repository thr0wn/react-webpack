const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const path = require("path");

module.exports = (env, argv) => ({
  entry: {
    app: path.resolve(__dirname, "src/index.jsx"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[fullhash].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
        use: {
          loader: "file-loader",
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s?css)$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "public/index.html"),
      favicon: path.resolve(__dirname, "public/images/logo.svg"),
      chunks: ["app"],
    }),
    argv.mode === "production"
      ? new BundleAnalyzerPlugin({ analyzerMode: "static" })
      : false,
  ].filter((plugin) => !!plugin),
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  devtool: argv.mode !== "production" ? "source-map" : undefined,
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    hot: true,
    port: 9000,
    historyApiFallback: true
  },
  optimization: {
    runtimeChunk: true
  }
});
