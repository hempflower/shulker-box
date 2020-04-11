<template>
  <div>
    <v-card class="side_card" color="#1e1e1ec9">
      <v-list color="rgba(0,0,0,0)">
        <v-list-group v-for="(v,i) in games" :key="i" prepend-icon="mdi-folder">
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
          >
            <v-list-item-content>
              <v-list-item-title>{{value}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
    <v-card class="main_card" color="#1e1e1ec9"></v-card>
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
      }
    };
  },
  methods: {
    common(path, version) {
      this.selected.path = path
      this.selected.version = version
    }
  }
};
</script>

<style scoped>
.side_card {
  width: 300px;
  position: absolute;
  top: 8px;
  left: 8px;
  bottom: 8px;
}

.main_card {
  position: absolute;
  top: 8px;
  right: 8px;
  bottom: 8px;
  left: 316px;
}
</style>