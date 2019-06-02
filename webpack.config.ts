import webpack, { Configuration } from 'webpack';
import path from 'path';
import { WebpackEntrypointPlugin } from "./tools/webpack-entrypoint-plugin";

export default <Configuration> {
    entry: {
        'home/index': './Views/Main/Index.tsx'
    },
    output: {
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: 'public/',
        filename: '[name]-[chunkhash].js'
    },
    module:{
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    resolve: {
        alias: {
            modules: path.resolve(__dirname, 'modules'),
            components: path.resolve(__dirname, 'components')
        },
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new WebpackEntrypointPlugin(
            path.resolve(__dirname, 'Views/Shared/CssEntrypoints.cshtml'), 
            path.resolve(__dirname, 'Views/Shared/JsEntrypoints.cshtml'))
    ]
}