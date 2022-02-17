<template>
  <div id="app" class="bckg-black">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import 'assets/styles/_main.scss';

body {
  padding: 0;
  margin: 0;
  background: $color-black;
}
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
