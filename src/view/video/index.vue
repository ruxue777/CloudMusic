<template>
  <div>
    <NavigationBar></NavigationBar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "../../components/NavigationBar.vue";

export default defineComponent({
  components: { NavigationBar },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped></style>
