import webpack from 'webpack';
import { cssLoaders } from './loaders/cssLoaders';
import { BuildOptions } from './types/configs';

export default function buildLoaders({
    isDev,
}: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
    const typescriptLoaders = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['en', 'ru'],
                            keyAsDefaultValue: true,
                        },
                    ],
                ],
            },
        },
    };

    const cssLoader = cssLoaders(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [fileLoader, svgLoader, babelLoader, typescriptLoaders, cssLoader];
}
