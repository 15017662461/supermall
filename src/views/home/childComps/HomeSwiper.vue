<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "common/swiper/index";
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
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
      isLoad: false,
    };
  },
  watch: {},
  computed: {},
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        this.$emit("swiperImageLoad")
        this.isLoad = true
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
</style>