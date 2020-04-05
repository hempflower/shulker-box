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
          target: "nsis-web"
        },
        linux: {
          target: "AppImage"
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
