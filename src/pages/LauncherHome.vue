<template>
  <div>
    <v-banner single-line :value="hasupdate">
      ShulkerBox将在关闭后进行更新。
      <template v-slot:actions>
        <v-btn text color="red" @click="closeRemind">我知道了</v-btn>
      </template>
    </v-banner>
    ddddddddddddd
    <v-card class="launch_panel">
      <v-select v-model="data" style="width:256px;float:left" :items="items" outlined hide-details></v-select>
      <v-btn class="launch_btn" color="green" x-large>启动游戏</v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [{ text: "水星迫降:1.12.2" }],
      data: null
    };
  },
  mounted() {
    for (let x = 0; x < 100; x++) {
      this.items.push({ text: "Minecraft:1.7." + x });
    }
  },
  computed: {
    hasupdate() {
      return this.$store.state.remindUpdate;
    }
  },
  methods: {
      closeRemind(){
          this.$store.commit("remindUpdate", false);
      }
  }
};
</script>

<style>
.launch_btn {
  width: 256px;
  float: right;
}

.launch_panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
}
</style>