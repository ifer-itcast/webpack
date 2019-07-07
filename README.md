# 一起来玩 Webpack

## 00_base

基本跑通

- 加入 `webpack-dev-server`
- 加入 `html-webpack-plugin`

## 02_style

如何使用 Loader 和 样式？

- 使用 CSS，`style-loader`、`css-loader`
- 使用 Less，`less`、`less-loader`
- 使用 Sass，`node-sass`、`sass-loader`
- 给样式加前缀，`postcss-loader`、`autoprefixer`
- 抽离样式，`mini-css-extract-plugin`

## 03_image

如何使用图片？

- JS 和 CSS 中使用，`file-loader`、`url-loader`
- HTML 中使用，`html-withimg-loader`

## 04_js

如何使用 JS？

- 转换箭头函数等，`@babel/core`、`@babel/preset-env`
- 转换类等，`@babel/plugin-proposal-class-properties`
- 转换装饰器等，`@babel/plugin-proposal-decorators`
- 转换生成器等，`@babel/plugin-transform-runtime`、`@babel/runtime`
- 转换 includes 等，`@babel/polyfill`

## 05_ts

如何使用 TS？

- 依赖 `typescript`、`ts-loader`

## 06_react

如何使用 React？

- 使用 React，`react`、`react-dom`
- 使用 JSX，`@babel/preset-react`

## 07_jquery

如何配置全局变量？

```javascript
module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ]
}
```

如何不打包已经通过 CDN 引入的库？

```javascript
module.exports = { 
    externals: {
        // 意思是这个 jquery 是外部提供的，别再给老子打包进去了
        jquery: '$'
    }
};
```

## 08_compress

- 压缩 JS，`uglifyjs-webpack-plugin`
- 压缩 CSS，`optimize-css-assets-webpack-plugin`

## 09_morepage

- 多页面，还是用到了 `html-webpack-plugin`