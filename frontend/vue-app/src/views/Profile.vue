<template>
  <div class="profile" id="fullpage">
    <profile-home class="section item"></profile-home>
    <carou-sel class="section item" id="carousel"></carou-sel>
    <time-line class="section item" id="timeline"></time-line>
  </div>
</template>

<script>
import ProfileHome from '../components/ProfileHome.vue'
import CarouSel from '../components/CarouSel.vue'
import TimeLine from '../components/TimeLine.vue'
// <vue-scroll-snap :fullscreen="true"> -- in html
export default {
  components: {
    ProfileHome,
    CarouSel,
    TimeLine
  }
}
</script>

<style scoped>
.section {
  height: 100vh;
  width: 100%;
}
</style>
