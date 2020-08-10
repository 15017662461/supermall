<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.title" class="recommend-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  components:{},
  props:{
    recommends:{
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
.recommend{
  display: flex;
  font-size: .32rem;
  text-align: center;
  padding: .266667rem 0 .533333rem;
  width: 100%;
  border-bottom: .266667rem solid #eee;
}

.recommend-item{
  flex: 1;
  text-align: center;
}

.recommend-item img{
  width:1.866667rem;
  height: 1.866667rem;
  margin-bottom:.266667rem;
}
</style>