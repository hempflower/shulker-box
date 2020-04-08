<template>
  <v-app style="height:100%;width:100%">
    <SideBar></SideBar>
    <v-content app>
    </v-content>
    <v-snackbar value=true bottom left absolute>
      新版本可用
      <v-btn color="red" text>我知道了</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  data() {
    return {
      right: null
    };
  },
  mounted() {},
  components: { SideBar },
  methods: {
    
  }
};
</script>

<style>
</style>