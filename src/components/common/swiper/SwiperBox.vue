<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="item in banners" :key="item.title">
      <a :href="item.link">
        <img :src="item.image" alt class="swiper-img" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper"
import "swiper/swiper-bundle.css"

export default {
  name: "SwiperBox",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        autoplay:true,
        loop: true,
        autoplay: {
          delay: 1000, //1秒切换一次
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable:true
        },
        // Some Swiper option/callback...
      },
    };
  },
  watch: {},
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  methods: {},
  created() {},
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style scoped>
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>