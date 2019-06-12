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
        ref="beanshell"
      ></bean-shell>
    </el-main>
  </el-container>
</template>

<script>
import BeanShell from "../common/BeanShell";
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  name: "BeanShellPostProcessors",
  data() {
    return {
      input: "Bean Shell Post Processors",
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
      this.pagedata["data"]["propMap"]["parameters"]["data"][
        "value"
      ] = this.$refs.beanshell.getparameters();
      this.pagedata["data"]["propMap"]["filename"]["data"][
        "value"
      ] = this.$refs.beanshell.getscriptname();
      this.pagedata["data"]["propMap"]["script"]["data"][
        "value"
      ] = this.$refs.beanshell.getscriptdata();
      this.pagedata["data"]["propMap"]["resetInterpreter"]["data"][
        "value"
      ] = this.$refs.beanshell.getresetinterpreterflag();
      this.$emit("refreshNodeData", this.pagedata);
    }
  },
  components: {
    "bean-shell": BeanShell
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