<template>
   <el-container>
        <el-header height="10px">{{input}}</el-header>
        <el-main>
             <div class="baseproperty">
                 <el-input v-model="input">
                    <template slot="prepend">Name:</template>                
                 </el-input>
                 <el-input v-model="input2" placeholder="">
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
                            <el-select slot="append" placeholder="">
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
                            <el-select slot="append" placeholder="">
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
                            <el-select slot="append" placeholder="">
                                <el-option label="True" value="1"></el-option>
                                <el-option label="False" value="2"></el-option>
                                <el-option label="Edit" value="3"></el-option>
                           </el-select>
                        </el-input>
                         <el-input v-model="input2" placeholder="">
                            <template slot="prepend">Recycle on EOF?:</template>
                            <el-select slot="append" placeholder="">
                                <el-option label="True" value="1"></el-option>
                                <el-option label="False" value="2"></el-option>
                                <el-option label="Edit" value="3"></el-option>
                           </el-select>
                        </el-input>
                         <el-input v-model="input2" placeholder="">
                            <template slot="prepend">Stop Thread on EOF?:</template>
                            <el-select slot="append" placeholder="">
                                <el-option label="True" value="1"></el-option>
                                <el-option label="False" value="2"></el-option>
                                <el-option label="Edit" value="3"></el-option>
                           </el-select>
                        </el-input>
                         <el-input v-model="input2" placeholder="">
                            <template slot="prepend">Sharing mode:</template>
                            <el-select slot="append" placeholder="">
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
    name: "Csv Data Set Config",
    data () {
        return {
            input:"Csv Data Set Config",
            input2:"",
            input3:"User Defined Variables",
            input4:"Configure the Csv Data Source",
            input5:","
        };
    },
    
}
</script>

<style>
  .el-main{
     margin-top:10px
  }
  div .baseproperty{
      border: solid #dcdfe6;
  }
  div .testelementproperty{
      margin-top:10px;
      text-align:center;
  }
  fieldset legend{
      text-align:left
  }
</style>