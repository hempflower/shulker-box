<template>
  <div>
    <v-card class="side_card" color="#1e1e1ec9">
      <v-app-bar dense>
        <v-btn icon>
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-folder</v-icon>
        </v-btn>
      </v-app-bar>
      <v-list color="rgba(0,0,0,0)" class="game_list">
        <v-list-group v-for="(v,i) in games" :key="i" prepend-icon="mdi-folder" no-action>
          <template v-slot:activator>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-list-item-content v-on="on">
                  <v-list-item-title>{{v.name}}</v-list-item-title>
                  <v-list-item-subtitle v-if="!v.system">{{v.path}}</v-list-item-subtitle>
                </v-list-item-content>
              </template>
              <span v-if="!v.system">{{v.path}}</span>
              <span v-else>系统内置目录</span>
            </v-tooltip>
          </template>
          <v-list-item
            v-for="(value,i) in v.versions"
            :key="i"
            @click="common(v.path,value)"
            :input-value="selected.path == v.path && selected.version == value"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{value}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <v-card class="main_card" color="#1e1e1ec9">
      <v-toolbar dense>
        <v-toolbar-title>官方启动器/1.15</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tab" show-arrows="">
            <v-tabs-slider></v-tabs-slider>
            <v-tab>基本设置</v-tab>
            <v-tab>自动安装</v-tab>
            <v-tab>MOD管理</v-tab>
            <v-tab>材质包管理</v-tab>
            <v-tab>光影包管理</v-tab>
            <v-tab>存档管理</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          name: "下载的整合包",
          path: "shulker-box://mod-pack",
          system: true,
          versions: ["1.7.10"]
        },
        {
          name: "下载的服务器",
          path: "shulker-box://server-pack",
          system: true,
          versions: ["1.7.10"]
        },
        {
          name: "官方启动器",
          path: "shulker-box://offical-minecraft",
          system: true,
          versions: ["1.7.10"]
        },
        {
          name: "贝爷整合包",
          path: "C:/mc",
          system: false,
          versions: ["1.6.4-MITE"]
        }
      ],
      selected: {
        path: null,
        version: null
      },
      tab: null,
    };
  },
  methods: {
    common(path, version) {
      this.selected.path = path;
      this.selected.version = version;
    }
  }
};
</script>

<style scoped>
.side_card {
  width: 260px;
  position: absolute;
  top: 8px;
  left: 8px;
  bottom: 8px;
}
.game_list {
  max-height: calc(100% - 48px);
  overflow-y: scroll;
}

.main_card {
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  left: 276px;
}
</style>