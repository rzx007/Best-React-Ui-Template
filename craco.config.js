const path = require("path");
const CracoLessPlugin = require('craco-less');
module.exports = {

    webpack: {
        alias: {
            "@": path.resolve(__dirname, 'src')
            // 此处是一个示例，实际可根据各自需求配置
        }
    },
    devServer:{
        port:3333
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#005792'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },],
};