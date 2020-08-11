const path = require("path");
const CracoLessPlugin = require('craco-less');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const options = {
    stylesDir: path.join(__dirname, './src/styles'),
    antDir: path.join(__dirname, './node_modules/antd'),
    mainLessFile: path.join(__dirname, './src/index.less'),
    varFile: path.join(__dirname, './src/styles/variables.less'),
    themeVariables: ['@primary-color'],
    indexFileName: 'index.html',
    generateOnce: false,
}

module.exports = {
    webpack: {
        plugins: [new AntDesignThemePlugin(options)],
        alias: {
            "@": path.resolve(__dirname, 'src')
            // 此处是一个示例，实际可根据各自需求配置
        },
        configure: {
            output: {
                path: path.resolve(__dirname, 'docs'),
            },
        }

    },

    devServer: {
        port: 3333
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    // modifyVars: {
                    //     '@primary-color': '#005792'
                    // },
                    javascriptEnabled: true,
                },
            },
        },
    }],
};