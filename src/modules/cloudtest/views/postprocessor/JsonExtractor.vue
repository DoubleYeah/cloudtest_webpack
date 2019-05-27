<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="input">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input>
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset>
          <legend>Apply to:</legend>
          <el-radio-group v-model="radio">
            <el-radio :label="1">Main sample and sub-samples</el-radio>
            <el-radio :label="2">Main sample only</el-radio>
            <el-radio :label="3">Sub-samples only</el-radio>
            <el-radio :label="4">JMeter Variable Name to use
                <el-input v-model="variablename"   :blur="unfocus()"></el-input>
            </el-radio>
          </el-radio-group>
        </fieldset>
        <el-input>
           <template slot="prepend">Name of created variables:</template>
        </el-input>
        <el-input>
           <template slot="prepend">JSON Path expressions:</template>
        </el-input>
        <el-input>
           <template slot="prepend">Match No.(0 of Random):</template>
        </el-input>
        <template >Compute concatenation var(suffix _ALL):</template><el-checkbox></el-checkbox>
        <el-input>
           <template slot="prepend">Default Values:</template>
        </el-input>

      </div>

    </el-main>
  </el-container>
</template>

<script>
  import BeanShell from '../common/BeanShell'
  export default {
    name: "JsonExtractor",
    data() {
      return {
        input: "Json Extractor",
        radio: 2,
        variablename:""
      };
    },
    methods: {
        textfocus(){
            this.radio=4
        },
        unfocus(){
            
        }
    },
    components: {
      'bean-shell': BeanShell
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

  .el-checkbox-group {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: left
  }
</style>