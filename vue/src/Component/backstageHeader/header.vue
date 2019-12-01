<template>
  <div class="header">
    <div @click="collapse" class="toggleBar" ref="box">|||
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: true,
      };
    },
    methods: {
      collapse() {
        this.$emit('toggle', this.isCollapse)
        this.isCollapse = !this.isCollapse;
        this.$refs.box.classList.toggle('rotate')
      },
    }
  };
</script>

<style lang='scss'>
  .header {
    width: 100%;
    height: 50px;
    line-height: 50px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
  }
  .toggleBar {
    transform: rotate(0deg);
    transition: all .3s;
    width: 40px;
    height: 50px;
    font-size: 12px;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.2em;
    cursor: pointer;
  }
  .rotate {
    transform: rotate(90deg);
  }
</style>