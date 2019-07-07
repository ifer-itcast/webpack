const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const htmlIndexPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html',
    chunks: ['index']
});

const htmlTestPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/test.html'),
    filename: 'test.html',
    chunks: ['test', 'index']
});

module.exports = {
    mode: 'development',
    entry: {
        test: './src/test.js',
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    devServer: {
        hot: true,
        contentBase: path.resolve('dist')
    },
    devtool: 'source-map',
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
                test: /\.jsx?$/,
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
            },
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: path.resolve(__dirname, 'src/ts'),
                exclude: /node_modules/
            },
            {
                test: require.resolve('jquery'),
                use: 'expose-loader?$'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        htmlIndexPlugin,
        htmlTestPlugin,
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery'
        // }),
        new webpack.BannerPlugin('weixian'),
        new CleanWebpackPlugin()
    ],
    externals: {
        jquery: '$'
    },
    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCssAssetsWebpackPlugin()
        ]
    }
};