<template>
  <div class="testelementproperty">
    <fieldset>
      <legend>{{input2}}</legend>
      <el-input v-model="resetinterpreter" readonly>
        <el-select v-model="resetinterpreter" slot="append">
          <el-option label="False" value="False"></el-option>
          <el-option label="True" value="True"></el-option>
        </el-select>
        <template slot="prepend">Reset interpreter:</template>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input3}}</legend>
      <el-input v-model="paramsdata" >
        <template slot="prepend">Parameters:</template>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input4}}</legend>
      <el-input v-model="scriptfiledata" >
        <template slot="prepend">File Name:</template>
        <el-button slot="append">Browse...</el-button>
      </el-input>
    </fieldset>
    <fieldset>
      <legend>{{input5}}</legend>
       <label text-align="center" width="100%"> Script:</label>
       <div>
          <markdown-editor style="width:100%;margin-top:10px"></markdown-editor>
       </div>
    </fieldset>
  </div>






</template>

<script>
  import markdown from "./markdown"
  export default {
    name: "BeanShell",
    data() {
      return {
        input: "Bean Shell",
        input2: "Reset bsh.interpreter before each call",
        input3: "Parameter to be passed to Bean Shell(=> String Parameters and String[] bsh.args )",
        input4: "Script File(overrides script)",
        input5: "Script(variables:ctx vars props prev sampler log)",
        scriptdata: 'import org.json.*;\n JSONObject obj=new JSONObject(vars.get("cur_examinfo"));\nvars.put("primaryId",obj.get("primaryId").toString());',
        scriptfiledata: "",
        paramsdata: "",
        resetinterpreter: "false"
      };
    },
    components:{
       "markdown-editor":markdown
    }
  }

</script>
<style>
  div .baseproperty {
    border: solid #dcdfe6;
  }

  div .testelementproperty {
    margin-top: 10px;
    text-align: center;
  }

  .el-button-group {
    text-align: center
  }

</style>
