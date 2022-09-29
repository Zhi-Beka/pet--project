/* eslint-disable no-param-reassign */
import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { cssLoaders } from '../build/loaders/cssLoaders';
import { BuildPaths } from '../build/types/configs';

export default ({
    config,
}: {
    config: {
        resolve: any;
        module: any;
        config: webpack.Configuration;
    };
}) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve.modules.push(paths.src);
    config.resolve.extensions.push('.ts', '.tsx');

    // eslint-disable-next-line no-param-reassign
    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });

    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module.rules.push(cssLoaders(true));

    return config;
};
