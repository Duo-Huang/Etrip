module.exports = {
    configureWebpack: {
        devServer: {
            disableHostCheck: true,
            historyApiFallback: false,
        }
    },
    chainWebpack: config => {
        config.module
            .rule('scss')
            .oneOf('vue-modules')
            .use('sass-resources-loader')
            .loader('sass-resources-loader')
            .tap(() => {
                return {
                    resources: [
                        './src/styles/common/variable.scss',
                        './src/styles/common/function.scss',
                        './src/styles/common/mixins.scss'
                    ]
                };
            });

        config.module
            .rule('scss')
            .oneOf('vue-modules')
            .use('css-loader')
            .loader('css-loader')
            .tap(options => {
                options.localIdentName = '[folder]_[name]_[local]_[hash:base64:5]'
                return options
            });
    }
}