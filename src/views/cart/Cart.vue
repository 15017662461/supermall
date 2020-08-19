<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    // ...mapGetters([
    //   'cartLength'
    // ])
    ...mapGetters({
      'length':'cartLength'
    })
  },
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
.cart{
  height: 100vh;
  position: relative;
}
.nav-bar{
  color: white;
  background-color: var(--color-tint);
  font-weight: 700;
}
</style>