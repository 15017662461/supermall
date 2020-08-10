<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <!-- <swiper-box :banners="banners"></swiper-box> -->
    <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import SwiperBox from 'common/swiper/SwiperBox'
import RecommendView from "./childComps/RecommendView";

import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    SwiperBox
  },
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {
    getHomeMultidata()
      .then((res) => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {},
};
</script>
<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>