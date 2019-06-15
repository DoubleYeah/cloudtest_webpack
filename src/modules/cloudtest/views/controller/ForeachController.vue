<template>
  <el-container>
    <el-header height="10px">Foreach Controller</el-header>
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
        <el-input v-model="inputVal">
          <template slot="prepend">Input variable prefix</template>
        </el-input>
        <el-input v-model="startIndex">
          <template slot="prepend">Start index for loop(exclusive)</template>
        </el-input>
        <el-input v-model="endIndex">
          <template slot="prepend">End index for loop(inclusive)</template>
        </el-input>
        <el-input v-model="returnVal">
          <template slot="prepend">Output variable name</template>
        </el-input>
        <el-checkbox v-model="useSeparator" label="Add   '_'   before   number?"></el-checkbox>
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
  name: "ForeachController",
  data() {
    return {
      input: "ForeachController",
      elementname: "",
      comments: "",
      inputVal: "",
      returnVal: "",
      useSeparator: false,
      startIndex: "",
      endIndex: ""
    };
  },
  created() {
    this.getContentData();
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
      this.inputVal = this.pagedata["data"]["propMap"][
        "ForeachController.inputVal"
      ]["data"]["value"];
      this.returnVal = this.pagedata["data"]["propMap"][
        "ForeachController.returnVal"
      ]["data"]["value"];
      this.useSeparator = this.pagedata["data"]["propMap"][
        "ForeachController.useSeparator"
      ]["data"]["value"];
      this.startIndex = this.pagedata["data"]["propMap"][
        "ForeachController.startIndex"
      ]["data"]["value"];
      this.endIndex = this.pagedata["data"]["propMap"][
        "ForeachController.endIndex"
      ]["data"]["value"];
    },
    commitdata() {
      this.pagedata["data"]["propMap"]["TestElement.name"]["data"][
        "value"
      ] = this.elementname;
      if (this.pagedata["data"]["propMap"]["TestPlan.comments"] == undefined) {
        if (this.comments != "") {
          this.pagedata["data"]["propMap"]["TestPlan.comments"] = {
            type: "org.apache.jmeter.testelement.property.StringProperty",
            data: {
              value: this.comments,
              name: "TestPlan.comments"
            }
          };
        }
      } else {
        if (this.comments != "") {
          this.pagedata["data"]["propMap"]["TestPlan.comments"]["data"][
            "value"
          ] = this.comments;
        } else {
          delete this.pagedata["data"]["propMap"]["TestPlan.comments"];
        }
      }
      this.pagedata["data"]["propMap"]["ForeachController.inputVal"]["data"][
        "value"
      ] = this.inputVal;
      this.pagedata["data"]["propMap"]["ForeachController.returnVal"]["data"][
        "value"
      ] = this.returnVal;
      this.pagedata["data"]["propMap"]["ForeachController.useSeparator"][
        "data"
      ]["value"] = this.useSeparator;
      this.pagedata["data"]["propMap"]["ForeachController.startIndex"]["data"][
        "value"
      ] = this.startIndex;
      this.pagedata["data"]["propMap"]["ForeachController.endIndex"]["data"][
        "value"
      ] = this.endIndex;

      this.$emit("refreshNodeData", this.pagedata);
    }
  }
};
</script>

<style scoped>
.el-header {
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  margin-top: 0.5em;
}
.el-main {
}
div .baseproperty {
}
div .testelementproperty {
}
.el-checkbox {
  margin-top: 10px;
}
/* .el-input{
    margin-bottom: 1em;
  }
  .el-input:last-child{
    margin-bottom: 0;
  } */
</style>