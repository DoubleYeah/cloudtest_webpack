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
                    <legend>{{input3}}</legend>
                    <el-table border :data="headerdata" height="500px" max-height="500px">
                          <el-table-column prop="name" label="Name:">

                          </el-table-column>
                          <el-table-column prop="value" label="Value">

                              
                          </el-table-column>
                    </el-table>
                    <el-button-group>
                         <el-button type="primary">Add</el-button>
                         <el-button type="primary">Add from Clipboard</el-button>
                         <el-button type="primary">Delete</el-button>
                         <el-button type="primary">Load</el-button>
                         <el-button type="primary">Save</el-button>
                    </el-button-group>
                </fieldset>
             </div>
        </el-main>

    </el-container>

</template>

<script>
export default {
    name:"HttpHeaderManager",
    data(){
        return {
            input:"HTTP Header Manager",
            input2:"",
            input3:"Headers Sorted in the Header Manager",
            headerdata:[]
        };
    }
}
</script>
<style>

  div .baseproperty{
      border: solid #dcdfe6;
  }
  div .testelementproperty{
      margin-top:10px;
      text-align:center;
  }
  .el-button-group{
      text-align:center
  }
  
</style>