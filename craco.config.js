const path = require("path");
const CracoLessPlugin = require('craco-less');
module.exports = {
    resolve: {
        alias: {
            "@": path.resolve(__dirname, 'src')
        },
    },
    plugins: [{
        plugin: CracoLessPlugin,
        options: {
            lessLoaderOptions: {
                lessOptions: {
                    modifyVars: {
                        '@primary-color': '#1DA57A'
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },],
};