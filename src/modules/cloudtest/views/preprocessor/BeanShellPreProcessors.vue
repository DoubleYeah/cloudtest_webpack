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
      <bean-shell
        :resetInterpreter="resetInterpreter"
        :filename="filename"
        :parameters="parameters"
        :scriptdata="scriptdata"
      ></bean-shell>
    </el-main>
  </el-container>
</template>

<script>
import BeanShell from "../common/BeanShell";
export default {
  props: {
    content: {
      type: String,
      required: true
    }
  },
  name: "BeanShellPreProcessors",
  data() {
    return {
      input: "Bean Shell Pre Processors",
      elementname: "",
      comments: "",
      parameters: "",
      filename: "",
      scriptdata: "",
      resetInterpreter: false
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
      this.parameters = this.pagedata["data"]["propMap"]["parameters"]["data"][
        "value"
      ];
      this.filename = this.pagedata["data"]["propMap"]["filename"]["data"][
        "value"
      ];
      this.scriptdata = this.pagedata["data"]["propMap"]["script"]["data"][
        "value"
      ];
      if (
        this.pagedata["data"]["propMap"]["resetInterpreter"]["data"]["value"] ==
        false
      ) {
        this.resetInterpreter = "False";
      } else {
        this.resetInterpreter = "True";
      }
      console.log(this.resetInterpreter);
    }
  },
  components: {
    "bean-shell": BeanShell
  }
};
</script>

<style scoped>
.el-main {
  margin-top: 10px;
}
div .baseproperty {
}
div .testelementproperty {
  text-align: center;
}
fieldset legend {
  text-align: left;
}
.el-checkbox-group {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
</style>