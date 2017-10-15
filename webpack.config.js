var webpack = require('webpack')

module.exports = {
    entry: './entry.js',

    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },

    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|bmp)$/i,
                use: ['url-loader']
            }
        ]
    },

    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress:{warnning:false}
    //     })
    // ]
        
}