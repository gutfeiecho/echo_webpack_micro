const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // 开发模式
    entry: path.resolve(__dirname, './src/main.js'), // 入口文件
    output: {
        filename: '[name].[hash:8].js', // [name]指entry属性名字， 默认为main
        path: path.resolve(__dirname, './dist'), // 打包后目录
        clean: true, // 打包前清空输出目录，相当于clean-webpack-plugin插件的作用，webpack5新增。
    },
    resolve: {
        // 配置 extensions来告诉webpack 在没有书写后缀是，以什么养的顺序去寻找文件
        extensions: ['.mjs', '.js', '.json', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader'] // webpack loader的执行顺序是从右至左
            },
            {
                test: /\.less$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html')
        })
    ]
}