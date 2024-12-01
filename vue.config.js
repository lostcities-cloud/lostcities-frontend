const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({

    //runtimeCompiler: false,
    devServer: {
        host: "0.0.0.0",
        //webSocketServer: false,
        //disableHostCheck: true,
        allowedHosts: [
            "192.168.1.201:8080",
            "192.168.1.201:8090",
            "192.168.1.201:8091",
            "192.168.1.201:8092",
            "192.168.1.201:8093",
            "lostcities.app"
        ],

        proxy: {
            '^/api/accounts': {
                target: 'https://lostcities.app',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/matches': {
                target: 'https://lostcities.app',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/gamestate': {
                target: 'https://lostcities.app',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/player-events': {
                target: 'https://lostcities.app',
                changeOrigin: true,
                logLevel: 'info',
                ws: true
            }
        }
    },

})
