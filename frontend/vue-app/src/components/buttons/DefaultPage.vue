<template>
  <div>
    <el-row
      ><el-table
        :data="customers"
        border
        height="250"
        style="width: 100%"
        :header-cell-style="{background: '#F2F6FC'}"
      >
        <el-table-column prop="USER_ID" label="USER_ID" width="1900">
        </el-table-column>
      </el-table>
      <el-table
        :data="articles"
        border
        height="250"
        style="width: 100%"
        :header-cell-style="{background: '#F2F6FC'}"
      >
        <el-table-column prop="ITEM_ID" label="ITEM_ID" width="1900">
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-col :span="12"
        ><div class="purchase-div">
          <el-button
            type="primary"
            class="center-position"
            @click="
              purchaseSendToS3()
              getCurrentTimestamp()
            "
            >Purchase the cloth</el-button
          >
        </div></el-col
      >
      <el-col :span="12"
        ><div class="view-div">
          <el-button
            type="success"
            class="center-position"
            @click="
              viewSendToS3()
              getCurrentTimestamp()
            "
            >View the cloth</el-button
          >
        </div></el-col
      >
    </el-row>
    <el-row>
      <h3>Randomly selected USER_ID : {{ random_user_id }}</h3>
      <h3>Randomly selected ITEM_ID : {{ random_item_id }}</h3>
      <h3>Selected Event Type : {{ selected_event_type }}</h3>
      <h3>Current Unix Time Stamp: {{ current_time_stamp }}</h3>
    </el-row>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      random_user_id: '',
      random_item_id: '',
      selected_event_type: '',
      current_time_stamp: '',
      customers: [
        {
          USER_ID:
            '0000423b00ade91418cceaf3b26c6af3dd342b51fd051eec9c12fb36984420fa'
        },
        {
          USER_ID:
            '000058a12d5b43e67d225668fa1f8d618c13dc232df0cad8ffe7ad4a1091e318'
        },
        {
          USER_ID:
            '0000757967448a6cb83efb3ea7a3fb9d418ac7adf2379d8cd0c725276a467a2a'
        },
        {
          USER_ID:
            '00007e8d4e54114b5b2a9b51586325a8d0fa74ea23ef77334eaec4ffccd7ebcc'
        },
        {
          USER_ID:
            '00008469a21b50b3d147c97135e25b4201a8c58997f78782a0cc706645e14493'
        },
        {
          USER_ID:
            '0001076e215991bad544dd3e7312f78d9f576a1cc3ddc407b2bc9024794ead5f'
        },
        {
          USER_ID:
            '00012315fd38859ff2c446876ca507abbcbcf582d0e266b1b696941c16e777a2'
        },
        {
          USER_ID:
            '00015c1a121e08bbd2552c15fbbb6e6b19d3bf8f7b6a3d60c6d7be26f06264d6'
        },
        {
          USER_ID:
            '000197360fe727d2cc0887073db9062bf37a8949a95c4a63db58661d94d2cb06'
        },
        {
          USER_ID:
            '0001b0127d3e5ff8dadcfc6e5043682dba2070f2667081623faeb31c996242a6'
        },
        {
          USER_ID:
            '0001f8cef6b9702d54abf66fd89eb21014bf98567065a9b5e42f37bc99528cf5'
        },
        {
          USER_ID:
            '000226b9ea81019249060b376b516f821a80e9b24f89a72106bf04b4c18b82f3'
        }
      ],
      articles: [
        {
          ITEM_ID: 108775015
        },
        {
          ITEM_ID: 108775044
        },
        {
          ITEM_ID: 108775051
        },
        {
          ITEM_ID: 110065001
        },
        {
          ITEM_ID: 110065002
        },
        {
          ITEM_ID: 110065011
        },
        {
          ITEM_ID: 111565001
        }
      ]
    }
  },
  methods: {
    purchaseSendToS3() {
      this.selected_event_type = 'Purchase'
      this.$message({
        message: 'Succesfully sent data to S3',
        type: 'success'
      })
      const randomCustomerIndex = Math.floor(
        Math.random() * this.customers.length
      )
      this.random_user_id = this.customers[randomCustomerIndex].USER_ID
      const randomArticleIndex = Math.floor(
        Math.random() * this.articles.length
      )
      this.random_item_id = this.articles[randomArticleIndex].ITEM_ID
    },
    viewSendToS3() {
      this.selected_event_type = 'View'
      this.$message({
        message: 'Succesfully sent data to S3',
        type: 'success'
      })
      const randomCustomerIndex = Math.floor(
        Math.random() * this.customers.length
      )
      this.random_user_id = this.customers[randomCustomerIndex].USER_ID
      const randomArticleIndex = Math.floor(
        Math.random() * this.articles.length
      )
      this.random_item_id = this.articles[randomArticleIndex].ITEM_ID
    },
    getCurrentTimestamp() {
      this.current_time_stamp = Date.now()
    }
  }
}
</script>

<style>
.purchase-div {
  height: 120px;
}
.view-div {
  height: 120px;
}
.center-position {
  position: relative;
  left: 40%;
  transform: translateX(-50%);
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 2rem !important;
}
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
