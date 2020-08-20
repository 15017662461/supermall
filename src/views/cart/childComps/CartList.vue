<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :itemInfo="item" :key="index"></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "common/scroll/Scroll";
import CartListItem from "./CartListItem"

import { mapGetters } from "vuex";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["cartList"]),
  },
  methods: {},
  created() {},
  mounted() {},
  updated() {},
  destroyed() {},
  activated() {
    this.$refs.scroll.refresh()
  }
};
</script>
<style scoped>
.cart-list{
  height: 100vh;
}
.content{
  position: absolute;
  top: 44px;
  bottom: 99px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>