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
        <fieldset>
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
        <el-input v-model="referenceNames">
          <template slot="prepend">Name of created variables:</template>
        </el-input>
        <el-input v-model="jsonPathExprs">
          <template slot="prepend">JSON Path expressions:</template>
        </el-input>
        <el-input v-model="match_numbers">
          <template slot="prepend">Match No.(0 of Random):</template>
        </el-input>
        <template>Compute concatenation var(suffix _ALL):</template>
        <el-checkbox v-model="compute_concat"></el-checkbox>
        <el-input v-model="defaultValues">
          <template slot="prepend">Default Values:</template>
        </el-input>
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
  name: "JsonExtractor",
  data() {
    return {
      input: "Json Extractor",
      radio: 2,
      variablename: "",
      elementname: "Json Extractor",
      comments: "",
      referenceNames: "",
      jsonPathExprs: "",
      match_numbers: "",
      pagedata: "",
      compute_concat: false,
      defaultValues: "",
      samplescope: "main"
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
      this.referenceNames = this.pagedata["data"]["propMap"][
        "JSONPostProcessor.referenceNames"
      ]["data"]["value"];
      this.jsonPathExprs = this.pagedata["data"]["propMap"][
        "JSONPostProcessor.jsonPathExprs"
      ]["data"]["value"];
      this.match_numbers = this.pagedata["data"]["propMap"][
        "JSONPostProcessor.match_numbers"
      ]["data"]["value"];
      if (
        this.pagedata["data"]["propMap"]["JSONPostProcessor.defaultValues"] !=
        undefined
      ) {
        this.defaultValues = this.pagedata["data"]["propMap"][
          "JSONPostProcessor.defaultValues"
        ]["data"]["value"];
      }
      if (
        this.pagedata["data"]["propMap"]["JSONPostProcessor.compute_concat"] !=
        undefined
      ) {
        this.compute_concat = this.pagedata["data"]["propMap"][
          "JSONPostProcessor.compute_concat"
        ]["data"]["value"];
      }
      if (this.pagedata["data"]["propMap"]["Sample.scope"] != undefined) {
        this.samplescope = this.pagedata["data"]["propMap"]["Sample.scope"][
          "data"
        ]["value"];
      }

      if (this.samplescope == "variable") {
        this.variablename = this.pagedata["data"]["propMap"]["Scope.variable"][
          "data"
        ]["value"];
      }
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
      this.pagedata["data"]["propMap"]["JSONPostProcessor.referenceNames"][
        "data"
      ]["value"] = this.referenceNames;
      this.pagedata["data"]["propMap"]["JSONPostProcessor.jsonPathExprs"][
        "data"
      ]["value"] = this.jsonPathExprs;
      this.pagedata["data"]["propMap"]["JSONPostProcessor.match_numbers"][
        "data"
      ]["value"] = this.match_numbers;
      if (
        this.pagedata["data"]["propMap"]["JSONPostProcessor.defaultValues"] !=
        undefined
      ) {
        if (this.defaultValues == "") {
          delete this.pagedata["data"]["propMap"][
            "JSONPostProcessor.defaultValues"
          ];
        } else {
          this.pagedata["data"]["propMap"]["JSONPostProcessor.defaultValues"][
            "data"
          ]["value"] = this.defaultValues;
        }
      } else {
        if (this.defaultValues != "") {
          this.pagedata["data"]["propMap"][
            "JSONPostProcessor.defaultValues"
          ] = {
            type: "org.apache.jmeter.testelement.property.StringProperty",
            data: {
              value: this.defaultValues,
              name: "JSONPostProcessor.defaultValues"
            }
          };
        }
      }
      if (
        this.pagedata["data"]["propMap"]["JSONPostProcessor.compute_concat"] !=
        undefined
      ) {
        if (this.defaultValues == "") {
          delete this.pagedata["data"]["propMap"][
            "JSONPostProcessor.compute_concat"
          ];
        } else {
          this.pagedata["data"]["propMap"][
            "JSONPostProcessor.compute_concat"
          ] = this.compute_concat;
        }
      } else {
        if (this.compute_concat == true) {
          this.pagedata["data"]["propMap"][
            "JSONPostProcessor.compute_concat"
          ] = {
            type: "org.apache.jmeter.testelement.property.BooleanProperty",
            data: {
              value: true,
              name: "JSONPostProcessor.compute_concat"
            }
          };
        }
      }
      if (this.pagedata["data"]["propMap"]["Sample.scope"] != undefined) {
        if (this.samplescope == "main") {
          delete this.pagedata["data"]["propMap"]["Sample.scope"];
        } else {
          this.pagedata["data"]["propMap"]["Sample.scope"]["data"][
            "value"
          ] = this.samplescope;
        }
      } else {
        if (this.samplescope != "main") {
          this.pagedata["data"]["propMap"]["Sample.scope"] = {
            type: "org.apache.jmeter.testelement.property.StringProperty",
            data: {
              value: this.samplescope,
              name: "Sample.scope"
            }
          };
        }
      }

      if (this.samplescope == "variable") {
        if (this.pagedata["data"]["propMap"]["Scope.variable"] == undefined) {
          this.pagedata["data"]["propMap"]["Scope.variable"] = {
            type: "org.apache.jmeter.testelement.property.StringProperty",
            data: {
              value: this.variablename,
              name: "Scope.variable"
            }
          };
        } else {
          this.pagedata["data"]["propMap"]["Scope.variable"]["data"][
            "value"
          ] = this.variablename;
        }
      }
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
  margin-top: 10px;
}

div .baseproperty {
}

div .testelementproperty {
  text-align: left;
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