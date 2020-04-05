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
        nsis: {},
        directories: {
          buildResources: 'scripts'
        },
        publish: {
          "provider": "orecraft"
        }
      }
    }
  }
}
