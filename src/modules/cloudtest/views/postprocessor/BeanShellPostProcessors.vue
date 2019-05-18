<template>
       <el-container>
        <el-header height="10px">{{input}}</el-header>
        <el-main>
            <div class="baseproperty">
                 <el-input v-model="input">
                    <template slot="prepend">Name:</template>                
                 </el-input>
                 <el-input >
                     <template slot="prepend">comments:</template> 
                 </el-input>
             </div>
             <bean-shell></bean-shell>
            
        </el-main>       
      </el-container>
</template>

<script>
import BeanShell from '../common/BeanShell'
export default {
    name: "BeanShellPostProcessors",
    data () {
        return {
            input:"Bean Shell Post Processors",
        };
    },
    components:{
        'bean-shell': BeanShell
    }
    
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
  .el-checkbox-group{
      margin-top:10px;
      margin-bottom:10px;
      text-align:left
  }
</style>