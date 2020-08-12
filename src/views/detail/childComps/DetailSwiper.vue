<template>
    <swiper class="detail-swiper">
      <swiper-item  v-for="item in topImages" 
      :key="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
</template>

<script>
import{Swiper , SwiperItem} from "common/swiper"

export default {
  name:'DetailSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.detail-swiper{
  height: 320px;
  overflow: hidden;
}
</style>