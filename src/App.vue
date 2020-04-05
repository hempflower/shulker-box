<template>
  <v-app style="height:100%;width:100%">
    <WindowBar></WindowBar>
    <router-view></router-view>
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
  }
};
</script>
<style>
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>