var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './index.jsx',
        vendor: ['react', 'react-router']
    },
    output: {
        path: './dist',
        filename: '[name]_[chunkhash].js'
    },
    module:{
        rules: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif)/,
                loader: 'url-loader',
                options: {
                    limit: 8000
                }
            }
        ]
    },
    resolve: {
        modules: ['node_modules', './'],
        extensions: ['.js', '.json', '.jsx']
    },
    devServer: {
        port: 8080,
        hot: true,
        historyApiFallback: {
            verbose: true,
            index: '/'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            async: true
        }),
        new HtmlWebpackPlugin({
            title: '',
            template: './index_template.ejs',
            inject: true,
            chunks: ['index', 'vendor']
        })
    ]
}