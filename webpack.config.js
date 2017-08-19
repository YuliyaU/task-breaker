var path = require('path');

module.exports = {    
    entry: "./src/index.js",    
    output: {
        path: path.resolve(__dirname, "src"),        
        filename: "bundle.js"
    },    
    plugins: [
        
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            }
        ]
    }
}