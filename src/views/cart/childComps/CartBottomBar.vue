<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button 
      :isChecked="isSelectAll" 
      class="check-button" 
      @click.native="checkClick" />
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalPrice}}
    </div>

    <div class="calculate" @click="calculateClick">
      去计算({{checkedLength}})
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"

import { mapGetters } from "vuex"

export default {
  name:'CartBottomBar',
  components:{
    CheckButton
  },
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
      return '￥' + this.cartList.filter((item) => {
        return item.checked
      }).reduce((preValue,item) => {
        return item.price * item.count + preValue
      },0).toFixed(2)
    },
    checkedLength(){
      return this.cartList.filter(item => {
        return item.checked
      }).reduce((preValue,item) => {
        return item.count + preValue
      },0)
    },
    isSelectAll(){
      return !this.cartList.filter(item => {
        return !item.checked
      }).length
    }
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){
        // 全部选中
        this.cartList.forEach(item => {
          item.checked = false
        })
      }else{
        // 没有全部选中
        this.cartList.forEach(item => {
          item.checked = true
        })
      }
    },
    calculateClick(){
      if(this.checkedLength == 0){
        this.$toast.show("请选择要结算的商品",2000)
      }
    }
  },
  created(){},
  mounted(){},
  updated(){},
  destroyed(){}
}
</script>
<style scoped>
.bottom-bar{
  display: flex;
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 40px;
  background-color: #eee;
  font-size: 18px;
  line-height: 40px;
}
.check-content{
  display: flex;
  align-items: center;
  margin-left: 10px;
  width: 70px;
}
.check-button{
  width: 22px;
  height: 22px;
  line-height: 20px;
  margin-right: 5px;
}
.price{
  margin-left: 20px;
  flex: 1;
}
.calculate{
  width: 90px;
  background-color: red;
  color: #fff;
  text-align: center;
}
</style>