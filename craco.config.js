const path = require("path");
const CracoLessPlugin = require('craco-less');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
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
        plugins: [
            new AntDesignThemePlugin(options),
            new CompressionPlugin({
                filename: '[path].gz[query]', // 目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[query] 替换成原查询字符串
                algorithm: 'gzip', // 算法       
                test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
                threshold: 1024, // 只处理比这个值大的资源。按字节计算
                minRatio: 0.8 // 只有压缩率比这个值小的资源才会被处理
            }),

        ],
        alias: {
            "@": path.resolve(__dirname, 'src')
            // 此处是一个示例，实际可根据各自需求配置
        },
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