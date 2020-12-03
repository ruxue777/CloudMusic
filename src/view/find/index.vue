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
          <img class="swipeImage" :src="image.pic" />
        </SwipeItem>
      </Swipe>
    </div>
    <div class="selectbox">
      <div class="selectitem">
        <img class="itemimg" src="/@/assets/img/recommend.svg" />
        <span>每日推荐</span>
      </div>
      <div class="selectitem">
        <img class="itemimg" src="/@/assets/img/songlist.svg" />
        <span>我的歌单</span>
      </div>
      <div class="selectitem">
        <img class="itemimg" src="/@/assets/img/rank.svg" />
        <span>热歌排名</span>
      </div>
      <div class="selectitem">
        <img class="itemimg" src="/@/assets/img/myfm.svg" />
        <span>私人FM</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavigationBar from "../../components/NavigationBar.vue";
import { Swipe, SwipeItem } from "vant";
import { getBanner } from "./service";

export default defineComponent({
  components: {
    Swipe,
    SwipeItem,
    NavigationBar,
  },
  setup() {
    const autoplay = ref(3000);
    const imgList = ref([]);

    getBanner({ type: 1 }).then((res: any) => {
      imgList.value = res.banners;
    });

    return { autoplay, imgList };
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
.selectbox {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .selectitem {
    display: flex;
    flex-direction: column;
    align-items: center;

    .itemimg {
      width: 0.65rem;
      height: 0.65rem;
    }

    span {
      font-size: 0.05rem;
      margin-top: 0.05rem;
      color: #646566;
    }
  }
}
</style>
