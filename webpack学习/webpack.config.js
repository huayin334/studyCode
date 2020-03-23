/*
 * @Author: your name
 * @Date: 2020-03-23 10:46:00
 * @LastEditTime: 2020-03-23 20:08:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Editul
 * @FilePath: /studyCode/webpack学习/webpack.config.js
 */

//  这个配置文件 其实就是一个js文件 通过node中的模块操作
// 向外暴露一个 配置对象

const path = require('path')
// 启用热更新第二步
var webpack = require('webpack');
// 导入插件：在内存中生成html页面
// 注意：只要是插件 都一定要放在plugins配置中去
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    // 在配置文件中，需要手动指定入口和出口
    // 入口 表示要使用 webpack打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 出口 输出文件的相关配置

    output: {
        // 指定打包好的文件输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 指定输出的文件名称
        filename: 'bundle.js'
    },
    // 模式
    mode: 'development',

    //webpack-dev-server 配置
    devServer: {
        // 自动打开
        open: true,
        port: 8080,
        // 启用热更新第一步
        hot: true,
        // 打开时候的目录
        contentBase: './src'
    },
    plugins: [ //配置插件的节点
        // 启用热更新的第三步 new一个热更新的模块对象
        new webpack.HotModuleReplacementPlugin(),
        // 插件 创建一个在内存中生产html页面插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面的名称
            filename: 'index.html'
        })
    ],
    // 这个节点，用于配置 所有第三方模块 加载器
    module: {
        // 规则
        rules: [
            // test表示正则 以.css结尾 前面的\是转译符
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                // 匹配less文件
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // 匹配图片文件
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                //问号传参 limit表示极限
                use: 'url-loader?limit=1218310&name=[hash:8]-[name].[ext]'
            },
            {
                // 匹配字体文件
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                use: 'url-loader'
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                // 排除node_modules 因为里面很多js代码 不需要我们打包编译 消耗内存
                exclude:/node_modules/
            }
        ]
    }
}