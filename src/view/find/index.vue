<template>
  <div class="main">
    <NavigationBar></NavigationBar>
    <div class="swipebox">
      <Swipe :autoplay="3000" indicator-color="#f42710">
        <SwipeItem
          :autoplay="autoplay"
          v-for="(image, index) in imgList"
          :key="index"
        >
          <img class="swipeImage" :src="image" />
        </SwipeItem>
      </Swipe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import NavigationBar from "../../components/NavigationBar.vue";
import { Swipe, SwipeItem, Lazyload } from "vant";
import axios from "axios";

export default defineComponent({
  components: {
    Swipe,
    Lazyload,
    SwipeItem,
    NavigationBar,
  },
  setup() {
    const autoplay = ref(3000);
    const imgList = reactive([
      "http://i0.hdslb.com/bfs/archive/1f0ab4563fe592036dacbd3c8644d321b3f92e06.jpg@880w_388h_1c_95q",
      "//i0.hdslb.com/bfs/archive/647cfd216fba45085c70494f7243c94c158cdb97.jpg@880w_388h_1c_95q",
      "https://i0.hdslb.com/bfs/sycp/creative_img/202011/352cb68348e9055df01e092a34cfb457.jpg@880w_388h_1c_95q",
      "https://i0.hdslb.com/bfs/sycp/creative_img/202011/0072d22f7235f69b962c9fdb5ec937fc.jpg@880w_388h_1c_95q",
    ]);

    const result = axios
      .get("http://localhost:3000/banner?type=1")
      .then((res) => {
        console.log(res);
      });

    return { autoplay, imgList, result };
  },
});
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.swipebox {
  padding: 0.15rem;

  .swipeImage {
    width: 100%;
    height: 2.85rem;
    border-radius: 10px;
  }
}
</style>
