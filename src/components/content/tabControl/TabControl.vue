<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="item"
      class="tab-control-item"
      :class="{active:index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  watch: {},
  computed: {},
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit('tabClick',index)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 0.4rem;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
  height: 1.066667rem;
  line-height: 1.066667rem;
}

.tab-control-item span{
  padding: .133333rem;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: .08rem solid var(--color-tint);
}
</style>