<template>
  <v-app class="app" style="height:100%;width:100%">
    <WindowBar></WindowBar>
    <router-view></router-view>
    <v-dialog
      v-for="(item,index) in dialogs"
      :key="index"
      v-model="item.show"
      max-width="512px"
      persistent
    >
      <v-card>
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>{{item.content}}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            v-for="(bitem,bindex) in item.buttons"
            :key="bindex"
            color="green darken-1"
            text
            @click="dialogHandle(index,bindex)"
          >{{bitem.text}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import WindowBar from "./components/WindowBar";

export default {
  name: "App",
  components: {
    WindowBar
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$vuetify.theme.dark = true;
    //监听更新
    this.$ipc.once("update-avaliable", () => {
      this.$store.commit("updateState", 1);
    });
    this.$ipc.once("update-downloaded", () => {
      this.$store.commit("updateState", 2);
    });
  },
  computed: {
    dialogs() {
      return this.$store.state.dialog;
    }
  },
  methods: {
    dialogHandle(id, bid) {
      let dialogs = this.$store.state.dialog;
      dialogs[id]["buttons"][bid].cb();
      this.$store.state.dialog.splice(id, 1);
    }
  }
};
</script>
<style>
html::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.app {
  background-image: url(https://s1.ax1x.com/2020/04/09/G5LNCj.jpg) !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-color: unset !important;
}
.v-application {
  background-color: rgba(0,0,0,0)!important;
}
</style>