const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    runtimeCompiler: false,
    devServer: {
        webSocketServer: false,
    },
    chainWebpack: config => {
        config.plugins.delete('hmr');
    },

})