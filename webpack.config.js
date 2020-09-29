/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        },
                    },
                ],
                exclude: "/node_modules/",
            },
        ],
    },
    devServer: {
        port: 5000,
        compress: false,
        open: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
