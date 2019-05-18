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
                <el-tabs>

                </el-tabs>
             </div>
        </el-main>

    </el-container>

</template>

<script>
export default {
    name:"HttpRequest",
    data(){
        return {
            input:"HTTP Request",
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