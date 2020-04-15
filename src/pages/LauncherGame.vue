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
            @click="common(v,value)"
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
    <v-card v-show="selected.pathName!=null" class="main_card" color="#1e1e1ec9">
      <v-toolbar dense>
        <v-toolbar-title>{{selected.pathName}}/{{selected.version}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs v-model="tab" show-arrows>
            <v-tabs-slider></v-tabs-slider>
            <v-tab>参数设置</v-tab>
            <v-tab>自动安装</v-tab>
            <v-tab>MOD管理</v-tab>
            <v-tab>材质包管理</v-tab>
            <v-tab>光影包管理</v-tab>
            <v-tab>存档管理</v-tab>
            <v-tab>实用工具</v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab" class="non-background scroll-content">
        <v-tab-item>
          <BasicConfig :config="selected.config.basic"></BasicConfig>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面2</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面3</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面4</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面5</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面6</v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card class="non-background" flat>
            <v-card-text>表单页面7</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import BasicConfig from "./LauncherGame/BasicConfig";
export default {
  components: { BasicConfig },
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
        pathName: null,
        version: null,
        config: {
          basic: {}
        }
      },
      tab: null
    };
  },
  methods: {
    common(pathobj, version) {
      this.selected.pathName = pathobj.name;
      this.selected.path = pathobj.path;
      this.selected.version = version;
    }
  },
  mounted() {}
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

.non-background {
  background-color: rgba(0, 0, 0, 0);
}

.scroll-content {
  height: calc(100% - 96px);
  overflow-y: scroll;
}
</style>