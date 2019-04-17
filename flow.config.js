const VueHook = require("@local/flow-vue-hook");
const FtpHook = require("@local/flow-ftp-hook");

module.exports = {
    entry: {
        // entry
        app: "./src/app.js"
    },

    dev: {
        host: "c.taihe.com",
        port: 8080,
        // proxy: {
        //     "/api": {
        //         target: "http://localhost:3000",
        //         pathRewrite: { "^/api": "/" }
        //     }
        // }
    },

    build: {
        outputPath: "./ua/h5/spring/",
        assetsSubDirectory: "static",
        publicPath: "/ua/spring/" // should be your cdn path
    },

    js: {
        babel: {
            presets: [
                [
                    "env",
                    {
                        modules: false,
                        targets: {
                            browsers: ["> 1%", "last 2 versions", "not ie <= 8"]
                        },
                        useBuiltIns: true
                    }
                ],
                "stage-2"
            ],
            plugins: [
                [
                    "component",
                    {
                        libraryName: "@local/thm-ui",
                        libDir: "dist/components"
                    }
                ]
            ]
        }
    },

    css: {
        engine: "css" // css engine，string||array
    },

    // html config
    html: {
        template: {
            filename: "index.html",
            path: "./src/index.html"
        }
    },

    alias: {
        musicApi: "@local/flow-axios/dist/ssr"
    },

    plugins: {
        npm: true
    },

    // vue/react/multiple/spa
    mode: "vue",

    hooks: [new VueHook(), new FtpHook({
        dirname: "c-taihe", //ftp服务器的目录地址
        clearCDN: ["/ua/spring/"] // 清理CDN缓存
    })]
};
