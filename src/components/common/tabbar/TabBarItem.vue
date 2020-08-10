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
  height: 60px;
  text-align: center;
  font-size: 18px;
}

.tab-bar-item img {
  width: 30px;
  height: 30px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>