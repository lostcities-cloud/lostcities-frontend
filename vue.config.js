const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({

    //runtimeCompiler: false,
    devServer: {
        host: "0.0.0.0",
        //webSocketServer: false,
        //disableHostCheck: true,
        allowedHosts: [
            "lostcities.app"
        ],

        proxy: {
            '^/api/accounts': {
                target: 'http://192.168.1.241:8090',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/matches': {
                target: 'http://192.168.1.241:8091',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/gamestate': {
                target: 'http://192.168.1.241:8092',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/player-events': {
                target: 'http://192.168.1.241:8093',
                changeOrigin: true,
                logLevel: 'info',
                ws: true


            }
        }
    },

})