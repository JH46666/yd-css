const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[hash:64]',
    //                 'postcss-loader'],
    //         },
    //     ],
    // },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader?modules',
                ],
            },
        ],
    },
};