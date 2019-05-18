<template>
   <el-container>
        <el-header height="10px">View Result Table</el-header>
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
                  <el-table border :data="resultdata" height="500px" max-height="500px">
                      <el-table-column prop="sample" label="Sample#"></el-table-column>
                      <el-table-column prop="starttime" label="Start Time"></el-table-column>
                      <el-table-column prop="threadname" label="Thread Name"></el-table-column>
                      <el-table-column prop="label" label="Label"></el-table-column>
                      <el-table-column prop="sampletime" label="Sample Time(ms)"></el-table-column>
                      <el-table-column prop="status" label="Status"></el-table-column>
                      <el-table-column prop="bytes" label="Bytes"></el-table-column>
                      <el-table-column prop="sendbytes" label="Send Bytes"></el-table-column>
                      <el-table-column prop="latency" label="Latency"></el-table-column>
                      <el-table-column prop="connecttime" label="Connect Time(ms)"></el-table-column>
                  </el-table>
                  <div class="statistics">
                      <el-checkbox label="Scroll automatically?"></el-checkbox>
                      <el-checkbox label="Child Samples?"></el-checkbox>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      No of Samples {{nosamplesnum}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#000000">Latest Sample {{latestsamplenum}}</font>&nbsp;&nbsp;<font color="#0000FF">Average {{average}}</font>&nbsp;&nbsp;<font color="#FF0000">Devation {{devation}}</font>

                  </div>

                </div>
            </el-main>
        </el-container>

</template>


<<script>
export default {
    name:"ViewResultTable",
    data () {
        return {
            input:"View Result Table",
            input2:"",
            input3:"Write result to file/Read from file",
            checked:[],
            select:"",
            resultdata:[],
            nosamplesnum:0,
            latestsamplenum:0,
            average:0,
            devation:0
        };
    }
}
</script>