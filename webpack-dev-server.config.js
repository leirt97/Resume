var webpack = require('webpack')
// var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = {
    entry: './entry.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    // resolve: {
    //     extensions: ['', 'js', 'jsx']
    // },

    module: {
        rules: [
            {
                test: /\.(js)$/, 
                exclude: /node_modules/,
                use: ['babel-loader'] 
            },
            {
                test: /\.css$/, 
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/i,
                use: ['url-loader']
            }
        ]
    },

    //一个利用 js 插件来转换 css 的插件
    // postcss: [
    //     require('autoprefixer')
    // ],

    plugins: [
        //html 模板插件
        new HtmlWebpackPlugin({
            template: __dirname + '/index.tmp.html'
        }),

        //热模块替换
        new webpack.HotModuleReplacementPlugin(),

        //自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),

        //在 js 代码中使用 __DEV__ 判断是否是 dev 模式（dev 模式下可以提示错误，测试报告等， production 模式则不会提示）
        // new webpack.DefinePlugin({
        //     __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
        // })
    ],

    devServer: {
        contentBase: './responsive_design',   //本地服务器所加载的页面所在的目录
        historyApiFallback: true,   //不跳转
        inline: true,   //实时（自动）刷新
        color: true,    //终端输出的结果为彩色
        hot: true   //启用热模块替换插件
    }
}