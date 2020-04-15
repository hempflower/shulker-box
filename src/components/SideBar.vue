<template>
  <v-navigation-drawer class="sidebar" permanent app expand-on-hover>
    <v-list two-line dense>
      <v-list-item link class="px-2">
        <v-list-item-avatar tile>
          <v-img :src="'https://mcskin.cn/avatar/25/MTk5Mzk5NjMxMEBxcS5jb20=.png?tid=1'"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="title">Ma_Hua_</v-list-item-title>
          <v-list-item-subtitle>1993996310@qq.com</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="toggleAccount">
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link :to="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
          <v-badge v-if="item.dot" color="pink" dot></v-badge>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "主页", icon: "mdi-home", url: "/home/home" },
        { title: "游戏管理", icon: "mdi-checkbox-multiple-blank", url: "/home/game" },
        { title: "账号管理", icon: "mdi-account", url: "/home/accounts" },
        { title: "资源中心", icon: "mdi-download", url: "/home/download" },
        { title: "启动器设置", icon: "mdi-cog-outline", url: "/home/setting" },
        {
          title: "关于",
          icon: "mdi-help-box",
          dot: this.updateState() > 0,
          url: "/home/about"
        }
      ]
    };
  },
  computed: {
    version() {
      return process.env.NODE_ENV == "production"
        ? "v" + require("electron").remote.app.getVersion()
        : "开发版";
    },
    logo() {
      return process.env.NODE_ENV == "production"
        ? "/logo/icon.png"
        : "/logo/icon-debug.png";
    }
  },
  methods: {
    updateState() {
      return this.$store.state.updateState;
    },
    toggleAccount(){
      console.log('点击了切换账号')
    },
  }
};
</script>

<style>
.sidebar::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  backdrop-filter: saturate(180%) blur(20px);
}
.sidebar {
  background-color: rgba(0, 0, 0, 0.72) !important;
}
</style>