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
              <el-input v-model="variablename" :blur="unfocus()"></el-input>
            </el-radio>
          </el-radio-group>
        </fieldset>
        <fieldset>
          <legend>Field to Test</legend>
          <el-radio-group v-model="fieldradio">
            <el-radio :label="1">Text Response</el-radio>
            <el-radio :label="2">Response Code</el-radio>
            <el-radio :label="3">Response Message</el-radio>
            <el-radio :label="4">Response Headers</el-radio></br>
            <el-radio :label="5">Request Headers</el-radio>
            <el-radio :label="6">URL Sampled</el-radio>
            <el-radio :label="7">Document(text)</el-radio>
            <el-checkbox>Ignore Status</el-checkbox></br>
            <el-radio :label="8">Request Data</el-radio>
          </el-radio-group>
        </fieldset>
        <fieldset>
          <legend>Pattern Matching Rules</legend>
          <el-radio-group v-model="ruleradio">
            <el-radio :label="1">Contains</el-radio>
            <el-radio :label="2">Matches</el-radio>
            <el-radio :label="3">Equals</el-radio>
            <el-radio :label="4">SubString</el-radio>
            <el-checkbox>Not </el-checkbox>
            <el-checkbox>Or</el-checkbox>
          </el-radio-group>
        </fieldset>
        <fieldset>
          <legend>Pattern to Test</legend>
          <el-table border style="width: 100%" height="400">
            <el-table-column align="center" prop="pattern" label="Patterns to Test"></el-table-column>
          </el-table>
          <el-button-group>
            <el-button type="primary">Add</el-button>
            <el-button type="primary">Add from Clipboard</el-button>
            <el-button type="primary">Delete</el-button>
          </el-button-group>
        </fieldset>
        <fieldset>
          <legend>Custom failure message</legend>
          <el-input type="textarea"></el-input>
        </fieldset>

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
        fieldradio: 2,
        ruleradio: 4,
        variablename: ""
      };
    },
    methods: {
      textfocus() {
        this.radio = 4
      },
      unfocus() {

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



</style>