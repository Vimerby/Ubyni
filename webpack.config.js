const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


// Toggle mode
let mode = 'development';
if( process.env.NODE_ENV === 'production') mode = 'production';

module.exports = {
    mode: mode, 

    output:{
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: 'images/[hash][ext][query]',
        filename: 'scripts/index.js'
    },

    module: {
        rules:[
            {//fonts
            test: /\.(woff(2)?|eot|ttf|otf)$/,
            exclude: /node_modules/,
            type: 'asset/resource',
            generator: {filename: "fonts/[name].[hash][ext]"},
            }, 

            {//images
            test: /\.(png|svg|jpg|jpe?g|gif)$/i,
            type: 'asset',
            },

            {//styles
            test: /\.(s[ac]|c)ss$/i,
            use: [{loader: MiniCssExtractPlugin.loader, options:{publicPath: '/'}}, 
            "css-loader","postcss-loader", "sass-loader"],
            exclude: /node_modules/,
            },


            {//scripts
            test: /\.[jt]s(x)?$/,
            use:['babel-loader','ts-loader'],
            exclude: /node_modules/
            },

        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html', 
            inject: false, 
        }),

        // new HtmlWebpackPlugin({
        //     filename: 'about.html',
        //     template: './src/about.html', 
        //     inject: false,
        // }),

        new MiniCssExtractPlugin({filename: '/styles/index.css'}),
    ],

    resolve:{
        extensions: ['.js', '.jsx', '.tsx', 'json'],
    },
    
    performance : {
        hints : false
    }, 

    devtool: "source-map",
    devServer: {
    static: {directory: path.join(__dirname, './dist')},
    compress: true,
    port: 8000,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
};