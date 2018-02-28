const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            parallel: true,
            uglifyOptions: {
                ecma: 8,
                warnings: false,
            },
            extractComments: true,
            sourceMap: true,
        }),
    ],
});
