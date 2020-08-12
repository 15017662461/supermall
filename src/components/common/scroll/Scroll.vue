<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Scroll',
  components:{},
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    }
  },
  watch:{},
  computed:{},
  methods:{
    scrollTo(x,y,time=300){
      this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
      this.scroll && this.scroll.refresh()
    },
  },
  created(){},
  mounted(){
    // 创建
    this.scroll = new BScroll(this.$refs.wrapper,{
      pullUpLoad:this.pullUpLoad,
      click:true,
      probeType:this.probeType
    })
    this.scroll.on('scroll' ,(position) => {
      // console.log(position);
      this.$emit('scroll',position)
    })
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',() => {
        // console.log(1);
        this.$emit('pullingUp')
      })
    }
  }
}
</script>
<style scoped>
</style>