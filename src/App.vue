<template>
  <router-view />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },

  setup() {
    return {};
  },
});
</script>
