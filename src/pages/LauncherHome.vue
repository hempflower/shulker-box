<template>
  <div>
    <v-banner single-line :value="updateTip">
      ShulkerBox将在关闭后进行更新。
      <template v-slot:actions>
        <v-btn text color="red" @click="updateTip = false">我知道了</v-btn>
      </template>
    </v-banner>
    <v-card tile class="launch_panel">
      <v-container fluid>
        <v-row>
          <v-col cols="6" md="5" offset-md="4" lg="3" offset-lg="7">
            <v-select
              v-model="data"
              :items="items"
              outlined
              hide-details
            ></v-select>
          </v-col>
          <v-col cols="6" md="3" lg="2">
            <v-btn block class="launch_btn" color="primary" depressed x-large height="56px">启动游戏</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [{ text: "水星迫降:1.12.2" }],
      data: null,
      updateTip: false
    };
  },
  mounted() {
    this.updateTip = this.$store.state.updateState == 2;
    for (let x = 0; x < 100; x++) {
      this.items.push({ text: "Minecraft:1.7." + x });
    }
  },
  computed: {},
  methods: {}
};
</script>

<style>
.launch_btn {
  float: right;
}

.launch_panel {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0px;
}
</style>