<template>
  <div class="main">
    <div class="topNav">
      <div class="badge-box">
        <Badge :content="messageNum" max="99">
          <span class="iconfont icon-icon--"></span>
        </Badge>
      </div>
      <Tabbar
        class="navBox"
        route
        v-model="active"
        :fixed="fixed"
        active-color="red"
      >
        <TabbarItem to="/home">我的</TabbarItem>
        <TabbarItem to="/find">发现</TabbarItem>
        <TabbarItem to="/community">云村</TabbarItem>
        <TabbarItem to="/video">视频</TabbarItem>
      </Tabbar>
      <span class="iconfont icon-sousuo"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Tabbar, TabbarItem, Badge } from "vant";

export default defineComponent({
  components: {
    Badge,
    Tabbar,
    TabbarItem,
  },
  setup() {
    const active = ref(0);
    const fixed = ref(false);
    const messageNum = ref(1);

    return { active, fixed, messageNum };
  },
});
</script>

<style lang="less" scoped>
.main {
  padding: 0 0.15rem;
  .topNav {
    width: 100%;
    height: 0.9rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .badge-box {
      width: 0.35rem;
      height: 0.35rem;
      margin-left: -10px;
    }

    .icon-icon--,
    .icon-sousuo {
      font-size: 0.35rem;
    }

    .navBox {
      width: 5.5rem;
    }
  }
}
</style>
