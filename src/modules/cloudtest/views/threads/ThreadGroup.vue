<template>
       <el-container>
        <el-header height="10px">{{input}}</el-header>
        <el-main>
             <div class="baseproperty">
                 <el-input v-model="input">
                    <template slot="prepend">Name:</template>                
                 </el-input>
                 <el-input v-model="input2" placeholder="">
                     <template slot="prepend">Comments:</template> 
                 </el-input>
             </div>
             <div class="testelementproperty">
                <fieldset class="threadActionproperty">
				<legend>{{input3}}</legend>
				 <el-radio-group v-model="radio">
                     <el-radio :label="1">Continue</el-radio>
                     <el-radio :label="2">Start Next Thread Loop</el-radio>
                     <el-radio :label="3">Stop Thread</el-radio>
                     <el-radio :label="4">Stop Test</el-radio>
                     <el-radio :label="5">Stop Test Now</el-radio>
                 </el-radio-group>
			     </fieldset>
                 <fieldset class="threadproperty">
				    <legend>{{input4}}</legend>
				    <el-input v-model="input6">
                       <template slot="prepend">{{input7}}</template>                
                    </el-input>
                    <el-input v-model="input6">
                       <template slot="prepend">{{input8}}</template>                
                    </el-input>
                    <el-input v-model="input6">
                       <template slot="prepend">{{input9}}</template>
                       <template><el-checkbox label="Forever" slot="prepend"></el-checkbox></template>       
                    </el-input>
                    <el-checkbox-group>
                          <el-checkbox label="Delay Thread Until needed"></el-checkbox></br>
                          <el-checkbox label="Sheduler"></el-checkbox></br>
                    </el-checkbox-group>
			     </fieldset>
                 <fieldset class="shedulerproperty">
				    <legend>{{input10}}</legend>
				    <el-input v-model="input6">
                       <template slot="prepend">Duration(seconds)</template>                
                    </el-input>
                    <el-input v-model="input6">
                       <template slot="prepend">Startup Delay(seconds)</template>                
                    </el-input>
			     </fieldset>
             </div>       
        </el-main>       
      </el-container>
</template>

<script>
export default {
    name: "ThreadGroup",
    data () {
        return {
            input:"Thread Group",
            input2:"",
            input3:"Action to be taken after a Sampler error",
            input4:"Thread Properties",
            input5:"",
            input6:"1",
            input7:"Number of Threads(users):",
            input8:"Ramp-up period(in seconds):",
            input9:"Loop Count:",
            input10:"Sheduler Configuration"
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
  .el-checkbox-group{
      margin-top:10px;
      margin-bottom:10px;
      text-align:left
  }
</style>