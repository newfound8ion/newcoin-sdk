const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: 'development',
    target: 'node',
    devtool: "eval-cheap-source-map",
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
    output: {
        filename: "index.js", // => x.chunk.name.replace('_', '-') + '.js',
        library: {
            type: "commonjs2",
            name: "NCO_BlockchainAPI",
            // path: path.resolve(__dirname, 'dist'),
            export: "NCO_BlockchainAPI"
        }
    }
};