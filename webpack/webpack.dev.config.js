let path = require('path');
let frontendDir = path.join(__dirname, '../frontend');
let publicDir = path.join(__dirname, '../public');
module.exports = {
    entry: [
        path.join(frontendDir, 'index.js')
    ],
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.less$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(graphql|gql)$/,
                exclude: /node_modules/,
                loader: 'graphql-tag/loader'
            }
        ]
    },
    output: {
        path: publicDir,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: publicDir,
        historyApiFallback: true,
        headers: { "Access-Control-Allow-Origin": "*" }
    }

}
