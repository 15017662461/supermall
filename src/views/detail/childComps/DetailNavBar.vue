<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        :key="item" 
        class="title-item" 
        :class="{active:index == currentIndex}"
        @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "common/navbar/NavBar"
export default {
  name:'DetailNavBar',
  components:{
    NavBar
  },
  props:{
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  watch:{},
  computed:{},
  methods:{
    titleClick(index){
      this.currentIndex = index
      this.$emit("titleClick",index)
    },
    backClick(){
      this.$router.back()
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.title{
  display: flex;
  font-size: 15px;
}

.title-item{
  flex: 1;
}

.active{
  color: var(--color-high-text);
}

.back img{
  margin-top: 11px;
}
</style>