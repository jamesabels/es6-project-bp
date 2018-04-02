const path = require('path');

module.exports = function(config) {
    config.set({
        basePath: '.',
        frameworks: ['mocha', 'chai'],
        browsers : ['ChromeHeadless'],
        jsdomLauncher: {
            jsdom: {
              userAgent: "foobar"
            }
        },
        client: {
          mocha: {
            // change Karma's debug.html to the mocha web reporter
            reporter: 'html',
            // require specific files after Mocha is initialized
            // require: [path.join(__dirname, "test/env.js")]
            // custom ui, defined in required file above
            // ui: 'bdd-lazy-var/global',
          }
        },
        files: [
            { pattern: 'test/*_test.js', watched: true },
            { pattern: 'test/**/*_test.js', watched: true }
        ],
        plugins: [
            'karma-jsdom-launcher',
            'karma-webpack',
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher'
        ],
        webpack: {
            output: {
              filename: 'bundle.js',
              path: path.resolve(__dirname, 'dist')
            },
            devServer: {
              contentBase: path.join(__dirname, "dist"),
              compress: true,
              port: 9000
            },
            module: {
              rules: [
                {
                  test: /\.js$/,
                  exclude: /(node_modules|bower_components)/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
                }
              ]
            }
        },
        preprocessors: {
            // add webpack as preprocessor
            'test/*_test.js': ['webpack'],
            'test/**/*_test.js': ['webpack']
        },
        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            stats: 'errors-only'
        },
    });
};