<template>
  <div class="testelementproperty">
    <fieldset>
      <legend>{{input2}}</legend>
      <el-input v-model="resetinterpreter" readonly>
        <el-select v-model="resetinterpreterflag" slot="append">
          <el-option label="False" value="False"></el-option>
          <el-option label="True" value="True"></el-option>
        </el-select>
        <template slot="prepend">Reset interpreter:</template>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input3}}</legend>
      <el-input v-model="params">
        <template slot="prepend">Parameters:</template>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input4}}</legend>
      <el-input v-model="scriptfilename">
        <template slot="prepend">File Name:</template>
        <el-button slot="append">Browse...</el-button>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input5}}</legend>
      <label text-align="center" width="100%">Script:</label>
      <div>
        <markdown-editor style="width:100%;margin-top:10px" :initvalue="script"></markdown-editor>
      </div>
    </fieldset>
  </div>
</template>

<script>
import markdown from "./markdown";
export default {
  props: {
    resetinterpreter: {
      type: String,
      default: "False"
    },
    scriptdata: {
      type: String,
      default: ""
    },
    filename: {
      type: String,
      default: ""
    },
    parameters: {
      type: String,
      default: ""
    }
  },
  name: "BeanShell",
  data() {
    return {
      input: "Bean Shell",
      input2: "Reset bsh.interpreter before each call",
      input3:
        "Parameter to be passed to Bean Shell(=> String Parameters and String[] bsh.args )",
      input4: "Script File(overrides script)",
      input5: "Script(variables:ctx vars props prev sampler log)",
      resetinterpreterflag: "False",
      scriptfilename: "",
      params: "",
      script: ""
    };
  },
  created() {
    this.resetinterpreterflag = this.resetinterpreter;
    this.scriptfilename = this.filename;
    this.params = this.parameters;
    this.script = this.scriptdata;
  },
  components: {
    "markdown-editor": markdown
  }
};
</script>
<style scoped>
div .baseproperty {
}

div .testelementproperty {
  text-align: center;
}

.el-button-group {
  text-align: center;
}
</style>
