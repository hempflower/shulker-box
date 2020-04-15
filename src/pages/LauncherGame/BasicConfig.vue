<template>
  <v-card class="non-background" flat>
    <v-alert dense >
      因为此版本使用了全局配置，所以在此处所做的更改将会保存到全局配置中。
    </v-alert>
    <v-container>
      <v-row>
        <v-col>
          <v-checkbox v-model="config.global" label="使用全局配置"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader>JVM设置</v-subheader>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-combobox :items="javalist" no-filter label="JAVA路径"></v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" md="3">
          <v-text-field label="最大游戏内存(MB)"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="JVM附加参数"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-subheader>Minecraft设置</v-subheader>
          <v-divider></v-divider>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-checkbox label="演示模式(DEMO)"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-select :items="gameDir" label="游戏目录"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-text-field label="窗口宽度"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field label="窗口高度"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-checkbox label="全屏"></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field label="直连服务器地址"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field label="端口"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-text-field label="代理服务器地址"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-text-field label="端口"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="用户名"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field label="密码"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="额外参数"></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  props: ["config"],
  data() {
    return {
      javalist: [],
      gameDir: [
        {
          text: "在.minecraft目录下",
          value: 0
        },
        {
          text: "在.minecraft/versions/<version>目录下",
          value: 1
        }
      ]
    };
  }
};
</script>

<style>
</style>