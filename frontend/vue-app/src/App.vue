<template>
  <div id="app">
    <el-row>
      <div id="nav">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="white"
          text-color="black"
          active-text-color="#606266"
          router
        >
          <el-menu-item
            ><div class="logo">
              <i class="el-icon-goods"></i> Simulated H&M
            </div></el-menu-item
          >
        </el-menu>
      </div>
      <router-view />
    </el-row>
  </div>
</template>

<script>
export default {
  created() {
    console.log('vue app starting')
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Seoul Hangang';
  font-style: normal;
  font-weight: 400;
  src: url('https://cdn.jsdelivr.net/gh/jbfactory/jb-skin-fonts/fonts/seoulhangangjungm.woff2')
      format('woff2'),
    url('https://cdn.jsdelivr.net/gh/jbfactory/jb-skin-fonts/fonts/seoulhangangjungm.woff')
      format('woff');
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  font-size: 16px;
  margin: auto;
}

#nav {
  position: sticky;
  top: 0px;
  z-index: 10;
}

.el-menu-item.is-active {
  background-color: #546fff !important;
  color: white !important;
}

.el-menu--horizontal > .el-menu-item.dock-right {
  float: right;
  font-family: 'Seoul Hangang';
}
.el-menu--horizontal > .el-submenu.dock-right {
  float: right;
  font-family: 'Seoul Hangang';
}

i.el-icon-goods {
  color: #546fff !important;
  font-size: 30px !important;
}

.logo {
  font-size: 30px !important;
}
</style>
