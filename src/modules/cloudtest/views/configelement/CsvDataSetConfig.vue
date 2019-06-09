<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments" placeholder="">
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset>
          <legend>{{input4}}</legend>
          <div class="csvdatasetproperty">
            <el-input>
              <template slot="prepend">Filename:</template>
              <el-button type="primary" slot="append">Browse...</el-button>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">File encoding:</template>
              <el-select slot="append" placeholder="" v-model="input2">
                <el-option label="utf-8" value="1"></el-option>
                <el-option label="utf-16" value="2"></el-option>
                <el-option label="iso-8859-15" value="3"></el-option>
                <el-option label="US-ASCII" value="4"></el-option>
                <el-option label="Edit" value="5"></el-option>
              </el-select>
            </el-input>
            <el-input>
              <template slot="prepend">Variable Names(comma-delimited):</template>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">Ignore first line(only used if Variable Names is not Empty):</template>
              <el-select slot="append" placeholder="" v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input5">
              <template slot="prepend">Delimiter(use '\t' for tab):</template>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">Allow quoted data?:</template>
              <el-select slot="append" placeholder="" v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">Recycle on EOF?:</template>
              <el-select slot="append" placeholder="" v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">Stop Thread on EOF?:</template>
              <el-select slot="append" placeholder="" v-model="input2">
                <el-option label="True" value="1"></el-option>
                <el-option label="False" value="2"></el-option>
                <el-option label="Edit" value="3"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="input2" placeholder="">
              <template slot="prepend">Sharing mode:</template>
              <el-select slot="append" placeholder="" v-model="input2">
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
        type: String,
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
        filename:"",
        fileEncoding:"",
        ignoreFirstLine:false,
        quotedData:false,
        recycle:true,
        shareMode:"shareMode.all",
        stopThread:false,
        variableNames:"",
        delimiter:","

      };
    },
    methods: {
      getContentData() {
        //var urldata = this.$route.query
        //this.pagedata = JSON.parse(urldata.content)
        // props获取来自父控件的数据
        this.pagedata = JSON.parse(this.content);
        this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"]["data"]["value"]
        if (this.pagedata["data"]["propMap"]["TestPlan.comments"] == undefined) {
          this.comments = "";
        } else {
          this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"][
            "data"
          ]["value"];
        }
        this.delimiter= this.pagedata["data"]["propMap"]["delimiter"][
            "data"
          ]["value"];
        this.fileEncoding=this.pagedata["data"]["propMap"]["fileEncoding"][
            "data"
          ]["value"];


      }
    },
    beforeMount() {
      this.getContentData()
    }


  }

</script>

<style scoped>
  .el-main {
    margin-top: 10px
  }

  div .baseproperty {
  }

  div .testelementproperty {
    text-align: center;
  }

  fieldset legend {
    text-align: left
  }

</style>
