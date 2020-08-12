<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']"
    @tabClick="tabClick"
    ref="tabControl1" 
    class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    :pullUpLoad="true" 
    @scroll="contentScroll"
    @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <!-- <swiper-box :banners="banners"></swiper-box> -->
      <recommend-view :recommends="recommends"></recommend-view>
      <feature></feature>
      <tab-control @tabClick="tabClick" 
      :titles="['流行','新款','精选']"
      ref="tabControl2"
      :class="{fixed:isTabFixed}">
      </tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import SwiperBox from "common/swiper/SwiperBox";
import RecommendView from "./childComps/RecommendView";
import Feature from "./childComps/Feature";

import NavBar from "common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce, throttle } from "../../common/utils"

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    SwiperBox,
    Feature,

    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  props: {},
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:false,
      tabOffsetTop:0,
      isTabFixed:false,
      saveY:0
    }
  },
  watch: {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          // console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp()
      })
    },
    /**
     * 事件监听
     */
    tabClick(index) {
      // console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    backClick(){
      // console.log('native');
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(position){
      // 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
      // 判断TabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore(){
      // console.log(1);
      this.getHomeGoods(this.currentType)
    },
    swiperImageLoad(){
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    }
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  mounted() {
    // 监听图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on("itemImageLoad",() => {
      refresh()
      // this.debounce(this.$refs.scroll.refresh,200)()
    })
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9; */
}
.fixed{
  position: fixed;
}
.content{
  /* height: calc(100%-93px); */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control{
  position: relative;
  z-index: 9;
}
</style>