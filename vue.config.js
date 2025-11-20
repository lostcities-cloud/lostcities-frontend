const { defineConfig } = require('@vue/cli-service')

// const host = 'lostcities.app'
const host = 'localhost';

module.exports = defineConfig({

    //runtimeCompiler: false,
    devServer: {
        host: "0.0.0.0",
        port: 8084,
        //webSocketServer: false,
        //disableHostCheck: true,
        allowedHosts: [
          `${host}:8080`,
          `${host}:8080`,
          `${host}:8081`,
          `${host}:8082`,
          `${host}:8083`,
          "127.0.0.1:8080",
          "127.0.0.1:8090",
          "127.0.0.1:8091",
          "127.0.0.1:8092",
          "127.0.0.1:8093",
          "192.168.1.201:8080",
          "192.168.1.201:8090",
          "192.168.1.201:8091",
          "192.168.1.201:8092",
          "192.168.1.201:8093",
          "lostcities.app"
        ],

        proxy: {
            '^/api/accounts': {
                target: `http://localhost:8080`,
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/matches': {
                target: `http://localhost:8081`,
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/gamestate': {
                target: `http://localhost:8082`,
                changeOrigin: true,
                logLevel: 'debug'
            },
            '^/api/player-events': {
                target: `http://localhost:8083`,
                changeOrigin: true,
                logLevel: 'info',
                ws: true
            }
        }
    },

})
