<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imgLoad" />
      <detail-param-info :paramInfo="paramInfo" @imgLoad="imgLoad" />
      <detail-comment-info :commentInfo="commentInfo" />
      <goods-list :goods="recommends" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo";

import Scroll from "common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList"

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "network/detail";
import { debounce } from "../../common/utils";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
  },
  props: {},
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      refresh: function () {},
      recommends:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    imgLoad() {
      this.refresh();
    },
  },
  created() {
    //保存传递过来的iid
    this.iid = this.$route.query.id;

    //请求详情数据
    getDetail(this.iid).then((res) => {
      // console.log(res);
      const data = res.result;
      // 顶部轮播图
      this.topImages = data.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺信息
      this.shop = new Shop(data.shopInfo);
      // 商品详情数据
      this.detailInfo = data.detailInfo;
      // 商品参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      // 评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }
    });
    
    //请求推荐数据
    getRecommend().then(res => {
      // console.log(res);
      this.recommends = res.data.list
    }) 
  },
  mounted() {
    // 防抖函数初始化
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    // 监听图片加载，防抖函数触发
    this.$bus.$on('itemImageLoad',() => {
      this.refresh()
    })
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  background-color: #fff;
  z-index: 10;
}
.content {
  /* height: calc(100% - 44px); */
  position: absolute;
  top: 44px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>