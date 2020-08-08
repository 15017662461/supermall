<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="[activeStyle]">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    path:{
      type:String
    },
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  watch: {},
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick(){
      if(this.$route.path.indexOf(this.path) !== -1){
        return true
      }
      this.$router.replace(this.path)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tab-bar-item {
  flex: 1;
  height: 1.6rem;
  text-align: center;
  font-size: .5rem;
}

.tab-bar-item img {
  width: .8rem;
  height: .8rem;
  margin-top: .08rem;
  vertical-align: middle;
  margin-bottom: .053333rem;
}

.active {
  color: red;
}
</style>