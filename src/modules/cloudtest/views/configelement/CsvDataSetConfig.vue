<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments" placeholder>
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset>
          <legend>{{input4}}</legend>
          <div class="csvdatasetproperty">
            <el-input v-model="filename">
              <template slot="prepend">Filename:</template>
              <el-button type="primary" slot="append">Browse...</el-button>
            </el-input>
            <el-input v-model="fileEncodinginput" :readonly="editfileencode">
              <template slot="prepend">File encoding:</template>
              <el-select slot="append" placeholder v-model="fileEncoding">
                <el-option label="UTF-8" value="UTF-8"></el-option>
                <el-option label="UTF-16" value="UTF-16"></el-option>
                <el-option label="ISO-8859-15" value="ISO-8859-15"></el-option>
                <el-option label="US-ASCII" value="US-ASCII"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="variableNames">
              <template slot="prepend">Variable Names(comma-delimited):</template>
            </el-input>
            <el-input v-model="ignoreFirstLineinput" :readonly="editignorefirstline">
              <template slot="prepend">Ignore first line(only used if Variable Names is not Empty):</template>
              <el-select slot="append" placeholder v-model="ignoreFirstLine">
                <el-option label="True" value="true"></el-option>
                <el-option label="False" value="false"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="delimiter">
              <template slot="prepend">Delimiter(use '\t' for tab):</template>
            </el-input>
            <el-input v-model="input2" placeholder>
              <template slot="prepend">Allow quoted data?:</template>
              <el-select slot="append" placeholder v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder>
              <template slot="prepend">Recycle on EOF?:</template>
              <el-select slot="append" placeholder v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder>
              <template slot="prepend">Stop Thread on EOF?:</template>
              <el-select slot="append" placeholder v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder>
              <template slot="prepend">Sharing mode:</template>
              <el-select slot="append" placeholder v-model="input2">
                <el-option label="All threads" value="1"></el-option>
                <el-option label="Current thread group" value="2"></el-option>
                <el-option label="Current thread" value="3"></el-option>
                <el-option label="Edit" value="4"></el-option>
              </el-select>
            </el-input>
          </div>
        </fieldset>
      </div>
    </el-main>
  </el-container>
</template>


<script>
  export default {
    props: {
      content: {
        type: Object,
        required: true
      }
    },
    name: "CsvDataSetConfig",
    data() {
      return {
        input: "Csv Data Set Config",
        input2: "",
        input3: "User Defined Variables",
        input4: "Configure the Csv Data Source",
        input5: ",",
        pagedata: {},
        elementname: "",
        comments: "",
        filename: "",
        fileEncoding: "",
        fileEncodinginput: "",
        ignoreFirstLine: false,
        ignoreFirstLineinput: false,
        quotedData: false,
        recycle: true,
        shareMode: "shareMode.all",
        stopThread: false,
        variableNames: "",
        delimiter: ",",
        editfileencode: true,
        editignorefirstline: true
      };
    },
    methods: {
      getContentData() {
        //var urldata = this.$route.query
        //this.pagedata = JSON.parse(urldata.content)
        // props获取来自父控件的数据
        this.pagedata = this.content.content;
        this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"][
          "data"
        ]["value"];
        if (this.pagedata["data"]["propMap"]["TestPlan.comments"] == undefined) {
          this.comments = "";
        } else {
          this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"][
            "data"
          ]["value"];
        }
        this.delimiter = this.pagedata["data"]["propMap"]["delimiter"]["data"][
          "value"
        ];
        this.fileEncoding = this.pagedata["data"]["propMap"]["fileEncoding"][
          "data"
        ]["value"];
        this.filename = this.pagedata["data"]["propMap"]["filename"]["data"][
          "value"
        ];
        this.ignoreFirstLine = this.pagedata["data"]["propMap"][
          "ignoreFirstLine"
        ]["data"]["value"];
        this.quotedData = this.pagedata["data"]["propMap"]["quotedData"]["data"][
          "value"
        ];
        this.recycle = this.pagedata["data"]["propMap"]["recycle"]["data"][
          "value"
        ];
        this.shareMode = this.pagedata["data"]["propMap"]["shareMode"]["data"][
          "value"
        ];
        this.stopThread = this.pagedata["data"]["propMap"]["stopThread"]["data"][
          "value"
        ];
        this.variableNames = this.pagedata["data"]["propMap"]["variableNames"][
          "data"
        ]["value"];
      }
    },
    beforeMount() {
      this.getContentData();
    },
    watch: {
      fileEncoding(val) {
        if (val == "Edit") {
          this.editfileencode = false
          this.fileEncodinginput = ""
        } else {
          this.editfileencode = true
          this.fileEncodinginput = this.fileEncoding
        }
      },
      ignoreFirstLine(val) {
        if (val == "Edit") {
          this.editignorefirstline = false
          this.fileEncodinginput = ""
        } else {
          this.editignorefirstline = true
          this.fileEncodinginput = this.fileEncoding
        }
      }
    }
  };

</script>

<style scoped>
  .el-main {
    margin-top: 10px;
  }

  div .baseproperty {}

  div .testelementproperty {
    text-align: center;
  }

  fieldset legend {
    text-align: left;
  }

</style>
