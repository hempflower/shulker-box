<template>
  <v-app style="height:100%;width:100%">
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
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>