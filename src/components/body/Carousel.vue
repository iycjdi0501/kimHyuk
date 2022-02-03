<template>
  <div class="Carousel">
    <slot></slot>
    <div class="left-cursor" @click="leftClick"><font-awesome-icon :icon="['fas', 'arrow-alt-left']" /></div>
    <div class="right-cursor" @click="rightClick"><font-awesome-icon :icon="['fas', 'arrow-alt-right']" /></div>
  </div>
</template>

<script>
export default {
  methods : {
    leftClick : function() {
      this.$store.dispatch('leftClick')
    },
    rightClick : function() {
      this.$store.dispatch('rightClick');
    }
  }
}
</script>

<style>
  .Carousel{
    width: 1000px;
    height: 250px;
    display: flex;
    position: relative;
  }
  .left-cursor{
    position: absolute;
    color: white;
    font-size: 20px;
    left: 10px;
    top: calc(50% - 10px);
    cursor: pointer;
  }
  .right-cursor{
    position: absolute;
    color: white;
    font-size: 20px;
    right: 10px;
    top: calc(50% - 10px);
    cursor: pointer;
  }
</style>