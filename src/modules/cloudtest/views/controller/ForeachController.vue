<template>
       <el-container>
        <el-header height="10px">Foreach Controller</el-header>
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
                  <el-input v-model="input2">
                    <template slot="prepend">Input variable prefix</template>                
                  </el-input>
                  <el-input v-model="input2">
                    <template slot="prepend">Start index for loop(exclusive)</template>                
                  </el-input>
                  <el-input v-model="input2">
                    <template slot="prepend">End index for loop(inclusive)</template>                
                  </el-input>
                  <el-input v-model="input2">
                    <template slot="prepend">Output variable name</template>                
                  </el-input>
                   <el-checkbox label="Add   '_'   before   number?"></el-checkbox>
             </div>       
        </el-main>       
      </el-container>
    
</template>

<script>
export default {
    name: "ForeachController",
    data () {
        return {
            input:"ForEach Controller",
            input2:""
        };
    },
    
}
</script>

<style scoped>
  .el-main{
  }
  div .baseproperty{
  }
  div .testelementproperty{
  }
  .el-checkbox{
      margin-top:10px;
  }
  /* .el-input{
    margin-bottom: 1em;
  }
  .el-input:last-child{
    margin-bottom: 0;
  } */
</style>