<template>
  <div>
    <WindowBar></WindowBar>
    <router-view />
  </div>
</template>
<script>
import WindowBar from "./components/WindowBar";
export default {
  components: { WindowBar }
};
</script>

<style lang="scss">
</style>
