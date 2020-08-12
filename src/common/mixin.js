import {debounce} from "./utils"
import BackTop from "components/content/backTop/BackTop"
export const itemListenerMixin = {
  data(){
    return {
      itemImgListener:null,
      refresh:function(){}
    }
  },
  mounted() {
    // 防抖函数初始化
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    this.itemImgListener = () => {
      this.refresh()
    }
    // 监听图片加载，防抖函数触发
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  },
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false,
    }
  },
  methods:{
    backClick() {
      // console.log('native');
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  }
}