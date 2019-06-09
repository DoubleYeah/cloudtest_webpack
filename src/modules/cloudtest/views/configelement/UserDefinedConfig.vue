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
                  <label class="title">{{input3}}</label>
                    <el-table  border style="width: 100%" height="600">
                       <el-table-column prop="name" label="Name:"></el-table-column>
                       <el-table-column prop="value" label="Value"></el-table-column>
                       <el-table-column prop="description" label="Description"></el-table-column>
                    </el-table>
                    <el-button-group>
                         <el-button type="primary">Detail</el-button>
                         <el-button type="primary">Add</el-button>
                         <el-button type="primary">Add from Clipboard</el-button>
                         <el-button type="primary">Delete</el-button>
                         <el-button type="primary">Up</el-button>
                         <el-button type="primary">Down</el-button>
                    </el-button-group>

            </div>
        </el-main>
     
    </el-container>

</template>


<script>
export default {
    name: "UserDefinedVariables",
    data () {
        return {
            input:"User Defined Variables",
            input2:"",
            input3:"User Defined Variables",
            input4:"",
            input5:""
        };
    },
    
}
</script>

<style scoped>
  .el-main{
     margin-top:10px
  }
  div .baseproperty{
  }
  div .testelementproperty{
      text-align:center;
  }
  .el-checkbox{
      margin-top:10px;
  }
  .el-button-group{
      margin-top:10px;
      margin-bottom:10px;
  }
  .el-button{
       margin-right:10px
  }
  .el-checkbox-group{
      text-align:left
  }
</style>