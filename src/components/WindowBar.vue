<template>
  <v-system-bar app window style="-webkit-app-region: drag;-webkit-user-select: none;">
    <span>Shulker Box - 潜影盒</span>
    <v-spacer></v-spacer>
    <v-icon class="btn" @click="mini">mdi-window-minimize</v-icon>
    <v-icon class="btn" @click="size">{{ icon }}</v-icon>
    <v-icon class="btn" @click="close">mdi-close</v-icon>
  </v-system-bar>
</template>

<script>
export default {
  name: "WindowBar",
  data() {
    return {
      state: 0
    };
  },
  computed: {
    icon() {
      return this.state == 0 ? "mdi-window-maximize" : "mdi-window-restore";
    }
  },
  methods: {
    mini() {
      this.$ipc.send("window", "min");
    },
    size() {
      this.$ipc.send("window", this.state == 0 ? "max" : "unmaximize");
    },
    close() {
      this.$ipc.send("window", "close");
    }
  },
  mounted() {
    
    this.$ipc.on("window-event", (event, arg) => {
      if (arg == "max") {
        this.state = 1;
      }
      if (arg == "unmaximize") {
        this.state = 0;
      }
    });
  }
};
</script>

<style scoped>
.btn {
  -webkit-app-region: no-drag;
}
</style>