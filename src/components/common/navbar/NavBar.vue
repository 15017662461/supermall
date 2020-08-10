<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 1.173333rem;
  height: 1.173333rem;
  text-align: center;
  box-shadow: 0 .026667rem .026667rem rgba(100, 100, 100, .1);
  font-size: .48rem;
}
.nav-bar .left {
  width: 1.6rem;
}
.nav-bar .center {
  flex: 1;
}
.nav-bar .right {
  width: 1.6rem;
}
</style>