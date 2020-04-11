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
        nsis: {
          artifactName: "${productName}-Setup-${version}.${ext}",
          oneClick: false,
          perMachine: true,
          allowToChangeInstallationDirectory: true
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
          "provider": "github"
        }
      }
    }
  }
}
