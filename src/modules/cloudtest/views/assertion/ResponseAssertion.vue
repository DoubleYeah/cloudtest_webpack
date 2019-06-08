<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments">
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset style="text-align:left">
          <legend>Apply to:</legend>
          <el-radio-group v-model="samplescope">
            <el-radio label="all">Main sample and sub-samples</el-radio>
            <el-radio label="main">Main sample only</el-radio>
            <el-radio label="children">Sub-samples only</el-radio>
            <el-radio label="variable">
              JMeter Variable Name to use
              <el-input v-model="variablename" @focus="onfocus" @blur="unfocus"></el-input>
            </el-radio>
          </el-radio-group>
        </fieldset>
        <fieldset style="text-align:left">
          <legend>Field to Test</legend>
          <el-radio-group v-model="test_field">
            <el-radio label="Assertion.response_data">Text Response</el-radio>
            <el-radio label="Assertion.response_code">Response Code</el-radio>
            <el-radio label="Assertion.response_message">Response Message</el-radio>
            <el-radio label="Assertion.response_headers">Response Headers</el-radio></br>
            <el-radio label="Assertion.request_headers">Request Headers</el-radio>
            <el-radio label="Assertion.sample_label">URL Sampled</el-radio>
            <el-radio label="Assertion.response_data_as_document">Document(text)</el-radio>
            <el-checkbox v-model="assume_success">Ignore Status</el-checkbox><br />
            <el-radio label="Assertion.request_data">Request Data</el-radio>
          </el-radio-group>
        </fieldset>
        <fieldset>
          <legend>Pattern Matching Rules</legend>
          <el-radio-group v-model="test_type">
            <el-radio label="2">Contains</el-radio>
            <el-radio label="1">Matches</el-radio>
            <el-radio label="8">Equals</el-radio>
            <el-radio label="16">SubString</el-radio>
            <el-checkbox v-model="test_nor">Not</el-checkbox>
            <el-checkbox v-model="test_or">Or</el-checkbox>
          </el-radio-group>
        </fieldset>
        <fieldset>
          <legend>Pattern to Test</legend>
          <el-table border style="width: 100%" height="400" :data="test_string_list" @row-click="getcurrowdata"
            highlight-current-row @cell-dblclick="dblhandleCurrentChange" ref="valuetable">
            <el-table-column align="center" prop="data.value" label="Patterns to Test">
              <template slot-scope="scope">
                <span v-if="scope.row.edit">
                  <el-input v-model="scope.row.data.value" @change="handleedit(scope.$index,scope.row)" v-focus
                    @blur="inputblur"></el-input>
                </span>
                <span v-else><label>{{scope.row.data.value}}</label></span>
              </template>
            </el-table-column>
          </el-table>
          <el-button-group>
            <el-button type="primary" @click="addvaluerow">Add</el-button>
            <el-button type="primary">Add from Clipboard</el-button>
            <el-button type="primary" @click="delvaluerow">Delete</el-button>
          </el-button-group>
        </fieldset>
        <fieldset>
          <legend>Custom failure message</legend>
          <el-input v-model="custom_message" type="textarea"></el-input>
        </fieldset>

      </div>

    </el-main>
  </el-container>
</template>

<script>
  import {assertion_rule_map,assertion_rule_check_map} from "../../constants/constants.js"
  export default {
    props: {
      content: {
        type: String,
        required: true
      }
    },
    name: "ResponseAssertion",
    data() {
      return {
        input: "Response Assertion",
        variablename: "",
        elementname: "Response Assertion",
        comments: "",
        custom_message: "",
        test_field: "",
        samplescope: "main",
        variablename: "",
        assume_success: false,
        test_string_list: [],
        currowdata: {},
        test_nor:false,
        test_or:false,
        test_type:"16",
      };
    },
    mounted() {
      this.getContentData();
    },
    methods: {
      onfocus() {
        this.samplescope = "variable";
      },
      unfocus() {},
      getContentData() {
        //var urldata = this.$route.query
        //this.pagedata = JSON.parse(urldata.content)
        // props获取来自父控件的数据
        console.log(this.content);
        this.pagedata = JSON.parse(this.content);
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
        if (
          this.pagedata["data"]["propMap"]["Assertion.custom_message"] !=
          undefined
        ) {
          this.custom_message = this.pagedata["data"]["propMap"][
            "Assertion.custom_message"
          ]["data"]["value"];
        }
        if (
          this.pagedata["data"]["propMap"]["Assertion.test_field"] !=
          undefined
        ) {
          this.test_field = this.pagedata["data"]["propMap"][
            "Assertion.test_field"
          ]["data"]["value"];
        }
        if (this.pagedata["data"]["propMap"]["Assertion.scope"] != undefined) {
          this.samplescope = this.pagedata["data"]["propMap"]["Assertion.scope"][
            "data"
          ]["value"];
        }

        if (this.samplescope == "variable") {
          this.variablename = this.pagedata["data"]["propMap"]["Scope.variable"][
            "data"
          ]["value"];
        }
        this.assume_success = this.pagedata["data"]["propMap"]["Assertion.assume_success"][
          "data"
        ]["value"]

        if (this.pagedata["data"]["propMap"]["Asserion.test_strings"] != undefined) {
          var strslist = this.pagedata["data"]["propMap"]["Asserion.test_strings"][
            "data"
          ]["value"]
          for (var index in strslist) {
            this.test_string_list[index] = strslist[index]
            this.test_string_list[index]["edit"] = false
            this.test_string_list[index]["index"] = index
          }
          console.log(this.test_string_list)

        }
        if(this.pagedata["data"]["propMap"]["Assertion.test_type"]!= undefined){
           this.initmatchrule(this.pagedata["data"]["propMap"]["Assertion.test_type"]["data"]["value"])
        }
      },
      initmatchrule(data){
        for(var key in assertion_rule_map){
          if(assertion_rule_map[key]!=data){
            var nor_data=assertion_rule_check_map["nor"]
            var or_data=assertion_rule_check_map["or"]
            if(nor_data+assertion_rule_map[key]==data){
              this.test_type=assertion_rule_map[key]
              this.test_nor=true
              break
            }else if(or_data+assertion_rule_map[key]==data){
              this.test_type=assertion_rule_map[key]
              this.test_or=true
              break
            }else if(or_data+nor_data+assertion_rule_map[key]==data){
              this.test_type=assertion_rule_map[key]
              this.test_or=true
              this.test_nor=true
              break
            }
          }else{
            this.test_type=assertion_rule_map[key]
          }
        }
        this.test_type=this.test_type+""
        console.log(this.test_type)

      },
      getcurrowdata(row, column, event) {
        //高亮当前行
        this.currowdata = row
        this.$refs.valuetable.setCurrentRow(row)
        console.log(row)
        //console.log(column)
      },
      dblhandleCurrentChange(row, column, cell, event) {
        row.edit = true
      },
      handleedit(index, row) {
        console.log(index)
        console.log(row)
      },
      inputblur(row, event, column) {
        let tableD = this.test_string_list;
        tableD.forEach(function (item) {
          item.edit = false;
        });
      },
      addvaluerow(event) {
        //生成随机5位数的name
        var name=Math.floor(Math.random() * (100000 - 10000)) + 10000
        var data = {
          "type": "org.apache.jmeter.testelement.property.StringProperty",
          "data": {
            "value": "",
            "name": name
          },
          "edit": false,
          "index": this.test_string_list.length
        }
        //添加到最后一行
        this.test_string_list.push(data)
      },
      delvaluerow(event) {
        //删除当前选中行
        if (!this.isEmptyObject(this.currowdata)) {
          //将本行删除
          for (var rowindex in this.test_string_list) {
              if (rowindex == this.currowdata["index"]) {
                this.test_string_list.splice(rowindex, 1)
                //将当前行置为空
                this.currowdata = {}
                //调整index
                for (var i = rowindex; i < this.test_string_list.length; i++) {
                  this.test_string_list[i]["index"] = i
                }
                break
              }
          }

        }

        console.log(this.test_type)

      },
      isEmptyObject(obj) {
        for (var key in obj) {
          return false; //返回false，不为空对象
        }
        return true; //返回true，为空对象
      }
    }

  }

</script>

<style>
  .el-main {
    margin-top: 10px
  }

  div .baseproperty {
    border: solid #dcdfe6;
  }

  div .testelementproperty {
    margin-top: 10px;
  }

  fieldset legend {
    text-align: left
  }

</style>
