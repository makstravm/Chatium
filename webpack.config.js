const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const Dotenv = require("dotenv-webpack");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    static: "./dist",
    port: 3000,
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      store: path.resolve(__dirname, "src/store/"),
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      public: path.resolve(__dirname, "public/"),
    },
  },
  stats: { assets: false },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [new CssMinimizerPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html"),
      title: "Chatium",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new CssMinimizerPlugin(),
    new Dotenv(),
  ],
};
