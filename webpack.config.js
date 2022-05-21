const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './dist/index.js',
    mode: 'development',
    target: 'node',
    devtool: "source-map",
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: { configFile: 'tsconfig.web.json' },
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    externals: [nodeExternals()], // ignore all modules in node_modules folder

    output: {
        filename: "index.js", // => x.chunk.name.replace('_', '-') + '.js',
        library: {
            type: "commonjs2",
            name: "NCO_BlockchainAPI",
            // path: path.resolve(__dirname, 'dist'),
            export: "NCO_BlockchainAPI"
        },
        // libraryTarget: "umd"
    }
};