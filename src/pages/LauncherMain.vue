<template>
  <v-app style="height:100%;width:100%">
    <v-navigation-drawer permanent app>
      <v-list-item>
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
    <v-content app>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
      <p>测试内容</p>
    </v-content>
  </v-app>
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
      right: null,
      version: process.env.npm_package_version
        ? "v" + process.env.npm_package_version
        : "开发版"
    };
  },
  mounted (){
    
  }
};
</script>

<style>
</style>