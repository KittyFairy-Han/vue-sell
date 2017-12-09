'use strict'
const express = require('express')
const app = express()
var appData = require('../db.json')
// var seller = appData.seller
// var goods = appData.goods
// var ratings = appData.ratings
var userInfo=appData.login
var productList=appData.getProductList
var newsList=appData.getNewsList
var boardList=appData.getBoardList
var detailProducts=appData.getDetailProducts

var amount=appData.getPrice

var orderList=appData.getOrderList
var orderId=appData.createOrder

var apiRoutes = express.Router()
app.use('/api', apiRoutes)

const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? {
      warnings: false,
      errors: true,
    } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app) {
      app.get('/api/login', (req, res) => {
        res.json({
          errno: 0,
          data: userInfo
        })
      });
      app.get('/api/out', (req, res) => {
        res.json({
          errno: 0,
          data: "out successfully"
        })
      });
      app.get('/api/products', (req, res) => {
        res.json({
          errno: 0,
          data: appData.getProductList
        })
      });
      app.get('/api/news', (req, res) => {
        res.json({
          errno: 0,
          data: newsList
        })
      });
      app.get('/api/boards', (req, res) => {
        res.json({
          errno: 0,
          data: boardList
        })
      });
      app.get('/api/details', (req, res) => {
        res.json({
          errno: 0,
          data: detailProducts
        })
      });
      app.get('/api/price', (req, res) => {
        res.json({
          errno: 0,
          data: amount
        })
      });
      app.post('/api/total', (req, res) => {
        res.json({
          errno: 0,
          data: amount
        })
      });
      app.post('/api/order', (req, res) => {
        res.json({
          errno: 0,
          data: orderId
        })
      });
      app.post('/api/corder', (req, res) => {
        res.json({
          errno: 0,
          data: orderId
        })
      });
        // app.get('/api/goods', (req, res) => {
        //   res.json({
        //     // 这里是你的json内容
        //     errno: 0,
        //     data: goods
        //   })
        // }),
        // app.get('/api/ratings', (req, res) => {
        //   res.json({
        //     // 这里是你的json内容
        //     errno: 0,
        //     data: ratings
        //   })
        // })
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${config.dev.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
