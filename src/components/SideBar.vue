<template>
  <v-navigation-drawer class="sidebar" permanent app>
    <v-list-item>
      <v-list-item-avatar tile>
        <img :src="logo" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="title">ShulkerBox</v-list-item-title>
        <v-list-item-subtitle>{{ version }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
        { title: "游戏管理", icon: "mdi-image", url: "/home/game" },
        { title: "账号管理", icon: "mdi-image", url: "/home/accounts" },
        { title: "资源下载", icon: "mdi-image", url: "/home/download" },
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
    }
  }
};
</script>

<style>
.sidebar::before {
  content: '';
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