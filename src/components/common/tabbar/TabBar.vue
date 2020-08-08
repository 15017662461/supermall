<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
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
#tab-bar {
  display: flex;
  background-color: #f6f6f6c4;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -1px 1px rbga(100, 100, 100, 0.1);
}


</style>