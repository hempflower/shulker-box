<template>
  <v-app style="height:100%;width:100%">
    <SideBar></SideBar>
    <v-content app>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  data() {
    return {};
  },
  mounted() {},
  components: { SideBar },
  methods: {}
};
</script>

<style scoped>

</style>
