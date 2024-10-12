const { defineConfig } = require('@vue/cli-service')


module.exports = defineConfig({

    //runtimeCompiler: false,
    devServer: {
        host: "0.0.0.0",
        //webSocketServer: false,
        //disableHostCheck: true,
        allowedHosts: [
            "192.168.1.241:8080",
            "192.168.1.231:8090",
            "192.168.1.231:8091",
            "192.168.1.231:8092",
            "192.168.1.231:8093",
            "lostcities.app"
        ],

        proxy: {
            '^/api/accounts': {
                target: 'http://192.168.1.233:9999',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/matches': {
                target: 'http://192.168.1.233:9999',
                changeOrigin: true,
                logLevel: 'info'
            },
            '^/api/gamestate': {
                target: 'http://192.168.1.233:9999',
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/player-events': {
                target: 'http://192.168.1.233:9999',
                changeOrigin: true,
                logLevel: 'info',
                ws: true
            }
        }
    },

})