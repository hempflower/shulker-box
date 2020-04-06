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
            target: "nsis",
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
        publish: {
          "provider": "custom"
        }
      }
    }
  }
}
