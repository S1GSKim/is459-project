<template>
  <div>
    <el-row>

    </el-row>
    <el-row>
      <el-col :span="12"
        ><div class="purchase-div">
        </div></el-col
      >
      <el-col :span="12"><div class="view-div"></div></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      customers: [],
      articles: [],
      fileList: []
    }
  },
  methods: {
  }
}
</script>

<style>
#filter-by {
  background-color: #546fff;
  color: white;
  padding: 10px;
}

.white-text {
  color: white !important;
  font-size: 1em;
  margin: 10px;
}

label.el-checkbox::after {
  content: '\a';
  white-space: pre;
  color: white !important;
  font-size: 1em;
  margin: 10px;
}

label.el-radio::after {
  content: '\a';
  white-space: pre;
  color: white !important;
  font-size: 1em;
  margin: 10px;
}

label.el-checkbox.black-text {
  color: black !important;
  font-size: 1em;
  margin-right: 100px;
}

.margin-box {
  margin: 20px;
}

i.el-icon-error {
  color: red !important;
}

.demo-input-label {
  display: inline-block;
  width: 130px;
}

.input-form {
  margin: auto;
  width: 50%;
  padding: 10px;
}

.course-card {
  margin: 20px !important;
}

.course-status {
  float: right !important;
}

div.scroll-bar {
  height: 800px !important;
  overflow: scroll !important;
}

div.filter-role {
  height: 160px;
  overflow: scroll !important;
  color: white !important;
}

div.filter-skill {
  height: 160px;
  overflow: scroll !important;
}

.add-button {
  font-size: 60px !important;
  color: #546fff !important;
}

.edit-button {
  font-size: 10px !important;
}

.el-card {
  height: 400px !important;
}
</style>
