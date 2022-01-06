const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MinCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {

    const environment = env.mode;
    console.log(`MODE: ${environment}`);

    return {
        mode: environment,
        output: {
            path: path.join(__dirname, '/dist'), 
            filename: 'bundle.js',
            publicPath: '/',
            clean: true
        },
        devServer: {
            port: 3010,
            historyApiFallback: true
        },
        module: {
            rules: [
                {
                    test: /\.(png|jp?eg|gif|svg)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    resolve: {
                        extensions: ['.js', '.jsx']
                    },
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MinCssExtractPlugin.loader,
                            options: { publicPath: "" }
                        },
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: './index.html',
            }),
            new MinCssExtractPlugin(),
            new ESLintPlugin({
                overrideConfigFile: path.resolve(__dirname, '.eslintrc.json'),
                extensions: ['.jsx', '.js']
            }),
            new Dotenv({
                path: `./.env.${ environment }`
            })
        ]
    }

};