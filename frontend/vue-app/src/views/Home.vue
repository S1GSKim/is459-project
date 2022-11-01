<template>
  <div class="home" id="home">
    <Intro></Intro>
    <About id="about"></About>
    <Contact id="contact"></Contact>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Intro from '../components/Intro.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
@Component({
  components: {
    Intro,
    About,
    Contact
  }
})
export default class Home extends Vue {
  title = 'Upload Example' // For Q14
  exampleList: Array<string> = []

  created() {
    console.log('get started')
  }
}
</script>

<style lang="scss">
ol {
  padding-left: 20px;
}

.mt-20 {
  margin-top: 40px;
}

.mt-40 {
  margin-top: 40px;
}

.text-center {
  text-align: center;
}

.el-collapse-item__header {
  font-size: 20px !important;
}

.el-collapse-item__content {
  font-size: 16px !important;
}
</style>
