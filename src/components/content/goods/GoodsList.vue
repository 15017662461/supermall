<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.acm" :goodsItem="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
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
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>