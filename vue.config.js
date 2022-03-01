module.exports = {
    runtimeCompiler: true,
    devServer: {
        //hotReload: false,
        host: '0.0.0.0',
        port: 8080,
        public: 'https://lostcities.app/',
        liveReload: false,
        disableHostCheck: false,
        inline: false,
        injectClient: false,
    }
}