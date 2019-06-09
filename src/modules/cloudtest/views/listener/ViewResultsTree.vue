<template>
       <el-container>
        <el-header height="10px">View Result Tree</el-header>
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
                  <fieldset class="fileconfigproperty">
                     <legend>{{input3}}</legend>
                     <el-col :span="14">
                        <el-input>
                            <template slot="prepend">Filename</template>
                            <el-button type="primary" slot="append">Browse...</el-button>
                        </el-input>
                     </el-col>
                    Log/Display only: <el-checkbox label="Errors"></el-checkbox>
                    <el-checkbox label="Successes"></el-checkbox>
                    <el-popover
                        placement="bottom"
                        width="650"
                        trigger="click">
                        <el-checkbox-group v-model="checked">
                            <el-checkbox label="Save As XML"></el-checkbox>
                            <el-checkbox label="Save Field Names(CSV)"></el-checkbox>
                            <el-checkbox label="Save Time Stamp"></el-checkbox></br>
                            <el-checkbox label="Save Elapsed Time"></el-checkbox>
                            <el-checkbox label="Save Label"></el-checkbox>
                            <el-checkbox label="Save Response Code"></el-checkbox></br>
                            <el-checkbox label="Save Response Message"></el-checkbox>
                            <el-checkbox label="Save Thread Name"></el-checkbox>
                            <el-checkbox label="Save Data Type"></el-checkbox></br>
                            <el-checkbox label="Save Success"></el-checkbox>
                            <el-checkbox label="Save Assertion Failure Message"></el-checkbox>
                            <el-checkbox label="Save recived byte count"></el-checkbox></br>
                            <el-checkbox label="Save send byte count"></el-checkbox>
                            <el-checkbox label="Save Active Thread Counts"></el-checkbox>
                            <el-checkbox label="Save URL"></el-checkbox></br>
                            <el-checkbox label="Save Response Filename"></el-checkbox>
                            <el-checkbox label="Save Latency"></el-checkbox>
                            <el-checkbox label="Save Connect Time"></el-checkbox></br>
                            <el-checkbox label="Save Encoding"></el-checkbox>
                            <el-checkbox label="Save Sample and Error Counts"></el-checkbox>
                            <el-checkbox label="Save Hostname"></el-checkbox></br>
                            <el-checkbox label="Save Idel Time"></el-checkbox>
                            <el-checkbox label="Save Request Headers(XML)"></el-checkbox>
                            <el-checkbox label="Save Sampler Data(XML)"></el-checkbox></br>
                            <el-checkbox label="Save Response Headers(XML)"></el-checkbox>
                            <el-checkbox label="Save Response Data(XML)"></el-checkbox>
                            <el-checkbox label="Save Sub Results"></el-checkbox></br>
                            <el-checkbox label="Save Assertion Results(XML)"></el-checkbox>
                        </el-checkbox-group>
                        <el-button slot="reference">Configure</el-button>
                    </el-popover>
                  </fieldset>
                  <div class="resultcontent" style="margin-top:10px">
                        <el-col :span="12">
                           <el-input>
                            <template slot="prepend">Search</template>
                           </el-input>   
                        </el-col>&nbsp;
                        <el-checkbox label="Case sensitive"></el-checkbox>
                        <el-checkbox label="Regular exp."></el-checkbox>
                        <el-button type="primary">Search</el-button>
                        <el-button type="primary">Reset</el-button></br>                 
                  </div></br>
                  <el-container>
                   <el-aside>
                      <el-select  v-model="select" placeholder="请选择">
                            <el-option value="Text">Text</el-option>
					        <el-option value="Regexp Tester">Regexp Tester</el-option>
					        <el-option value="Boundary Extractor Tester">Boundary Extractor Tester</el-option>
					        <el-option value="CSS Selector Tester">CSS Selector Tester</el-option>
                            <el-option value="Xpath Tester">Xpath Tester</el-option>
                            <el-option value="Json path Tester">Json path Tester</el-option>
                            <el-option value="HTML">HTML</el-option>
                            <el-option value="HTML Source Formatted">HTML Source Formatted</el-option>
                            <el-option value="HTML(download resources)">HTML</el-option>
                            <el-option value="Document">Document</el-option>
                            <el-option value="XML">XML</el-option>
                            <el-option value="XPath2 Tester">XPath2 Tester</el-option>
                            <el-option value="Browser">Browser</el-option>
                      </el-select>  
                      <el-card class="resultlist">
                            <li v-for="o in 4" :key="o" class="text item">
                                {{'列表内容 ' + o }}
                            </li>
                     </el-card>
                      <el-checkbox label="Scroll automatically?"></el-checkbox>
                    </el-aside>  
                    <el-main class="samplerresultcontent">
                        <sampler-result></sampler-result>
                    </el-main>
                 </el-container>
             </div>
                   
        </el-main>       
      </el-container>
    
</template>

<script>
import samplerresult from './SamplerResult'
export default {
    name: "viewresulttree",
    data () {
        return {
            input:"View Result Tree",
            input2:"",
            input3:"Write result to file/Read from file",
            checked:[],
            select:""
        };
    },
    components: {
        'sampler-result': samplerresult
    }
    
}
</script>

<style scoped>
  div .baseproperty{
  }
  .el-checkbox{
      margin-top:10px;

  }
  .el-button{
      margin-right:20px;
  }
  .el-select .el-input__inner {
     width:300px
  }
  .resultlist{
     height:400px;
  }
  .samplerresultcontent{
     border: solid #dcdfe6;
  }
</style>