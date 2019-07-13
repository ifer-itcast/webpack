const express = require('express');
const morgan = require('morgan');
const app = express();
const webpack = require('webpack');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler));
app.use(morgan('dev'));

app.get('/user', (req, res) => {
    res.send({
        name: "ifer",
        age: 17
    });
});

app.listen(3001);