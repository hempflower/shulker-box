<template>
  <v-navigation-drawer permanent app>
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
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
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
        { title: "主页", icon: "mdi-home" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" }
      ],  
    };
  },
  computed: {
      version (){
          return process.env.NODE_ENV == "production"
          ? "v" + require("electron").remote.app.getVersion()
          : "开发版";
      },
      logo (){
          return process.env.NODE_ENV == "production"
          ? "/logo/icon.png"
          : "/logo/icon-debug.png";
      }
  }
};
</script>

<style>
</style>