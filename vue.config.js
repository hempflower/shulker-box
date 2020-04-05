module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "cn.orecraft.shulkerbox",
        productName: "ShulkerBox",
        win: {
          target: {
            target: "nsis-web",
            arch: [
              "x64",
              "ia32"
            ]
          }

        },
        linux: {
          target: {
            target: "AppImage",
            arch: [
              "x64",
              "ia32"
            ]
          }
        },
        nsisWeb: {
          appPackageUrl: 'https://shulkerbox.orecraft.cn/download/latest'
        },
        directories: {
          buildResources: 'scripts'
        },
        publish: {
          "provider": "custom"
        }
      }
    }
  }
}
