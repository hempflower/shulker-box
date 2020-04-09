<template>
  <div>
    <v-card class="card_body">
      <v-list>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>版本</v-list-item-title>
            <v-list-item-subtitle v-if="updateState == 1">正在下载更新</v-list-item-subtitle>
            <v-list-item-subtitle v-if="updateState == 2">已准备好更新，将在您退出ShulkerBox后安装更新。</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{version}}</v-list-item-action-text>
            <v-icon v-if="updateState > 0" color="yellow">mdi-information</v-icon>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>作者</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>hempflower</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="openREPO">
          <v-list-item-content>
            <v-list-item-title>Github仓库</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>https://github.com/hempflower/shulker-box</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>开源协议</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>MIT</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>Electron</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{ versions.electron }}</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>Chrome</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{ versions.chrome }}</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>v8</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{ versions.v8 }}</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="common">
          <v-list-item-content>
            <v-list-item-title>node</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-list-item-action-text>{{ versions.node }}</v-list-item-action-text>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versions: null
    };
  },
  computed: {
    version() {
      return process.env.NODE_ENV == "production"
        ? "v" + require("electron").remote.app.getVersion()
        : "开发版";
    },
    updateState() {
      return this.$store.state.updateState;
    }
  },
  beforeMount() {
    this.versions = process.versions;
  },
  methods: {
    common() {},
    openREPO() {
      this.$shell.openExternal("https://github.com/hempflower/shulker-box");
    }
  }
};
</script>

<style>
.card_body {
  margin-top: 16px;
  margin-left: 16%;
  margin-right: 16%;
}
</style>