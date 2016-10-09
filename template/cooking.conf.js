/* eslint-disable */

var path = require('path');
var cooking = require('cooking');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer')
var browserslist = require('browserslist')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
    entry: {
        app: './src/main.js',
        vendor: ['vue', 'vue-resource', 'vue-router', 'vuex', 'vuex-router-sync', './src/polyfill']
    },
    dist: './dist',
    devServer: {
        port: 8080,
        publicPath: '/',
        clean: false,
        proxy: {

        }
    },

    // production
    clean: true,
    hash: true,
    sourceMap: false,
    publicPath: '/',
    assetsPath: 'images',
    urlLoaderLimit: 10000,
    extractCSS: 'css/[name].[contenthash:7].css',
    css: '-autoprefixer',
    postcss: [
        autoprefixer({ browsers: browserslist('last 2 version, > 0.1%')})
    ],
    extends: ['lcy-vue2', 'eslint']
}

if (process.env.NODE_ENV === 'production') {
    config.template = [{
        filename: 'index.html',
        template: 'src/template/index.html'
    }]
} else {
    config.template = [{
        filename: 'index.html',
        template: 'src/template/index.html',
        chunks: ['vendor', 'app']
    }]
}

cooking.set(config);

cooking.add('resolve.alias', {
    'src': path.join(__dirname, 'src')
});

if (process.env.NODE_ENV === 'production') {
    cooking.add('output.filename', 'js/[name].[chunkhash].js')
    cooking.add('output.chunkFilename', 'js/[id].[chunkhash].js')
    cooking.add('plugin.CommonsChunk', new webpack.optimize.CommonsChunkPlugin({
        names: ["vendor", "manifest"]
    }))
} else {
    cooking.add('output.path', '/')
}
module.exports = cooking.resolve()
