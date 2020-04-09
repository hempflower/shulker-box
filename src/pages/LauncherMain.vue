<template>
  <v-app style="height:100%;width:100%">
    <SideBar></SideBar>
    <v-content app>
      <transition name="fade">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
