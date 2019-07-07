const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
});

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve('dist')
    },
    module: {
        rules: [
            /* {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }, */
            {
                test: /\.css$/,
                use: [{
                    // 我使用了抽离 CSS，修改 CSS 文件不会自动刷新
                    loader: MiniCssExtractPlugin.loader
                }, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test:  /\.(gif|jpg|jpeg|png|bmp|eot|woff|woff2|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10 * 1024,
                            outputPath: '/img/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-withimg-loader'
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: [
                        //     '@babel/preset-env'
                        // ],
                        // plugins: [
                        //     ['@babel/plugin-proposal-class-properties',{'loose': true}]
                        // ]
                    }
                },
                // 别忘记排除这个，注意这里的值没有引号！
                exclude: /node_modules/,
                // 最好写上
                include: path.resolve(__dirname, 'src')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        })
    ]
};