var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './app/index.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    resolve: {
        root: path.resolve('./app'),
        extensions: ['', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    postcss: function () {
        return [autoprefixer({browsers: ['last 2 versions']})];
    },
    module: {
        loaders: [
            {test: /\.js$/, loaders: ['babel'], exclude: /node_modules/},
            {test: /\.json$/, loader: 'json'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {
                test: /\.scss$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            },
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}

        ]
    }
};
