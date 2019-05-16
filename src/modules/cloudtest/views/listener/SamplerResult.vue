<template>
   <el-tabs tab-position="top" type="card" >
    <el-tab-pane label="Sampler result">
        <el-tabs  type="card" tab-position="bottom">
            <el-tab-pane label="Raw">
                <el-form>
                   <div>
                     <div v-for="item in threaddata" class="text item">
                                {{item["name"] + ":"+item["value"] }}</br>
                    </div>
                    </div>
                 
                    </el-form>
            
            </el-tab-pane>
            <el-tab-pane label="Parsed">
                <el-table border :data="threaddata" max-height="100px">
                    <el-table-column prop="name" ></el-table-column>
                    <el-table-column prop="value" ></el-table-column>

                </el-table>
                <el-table border  max-height="100px">
                    <el-table-column prop="header" label="Response header" ></el-table-column>
                    <el-table-column prop="value" label="value"></el-table-column>

                </el-table>
                <el-table border :data="addtionaldata" max-height="100px">
                    <el-table-column prop="field" label="Additional field" ></el-table-column>
                    <el-table-column prop="value" label="value"></el-table-column>

                </el-table>
            
            
            </el-tab-pane>
        </el-tabs>
    
    </el-tab-pane>
    <el-tab-pane label="Request">
         <el-tabs  type="card" tab-position="bottom" >
            <el-tab-pane label="Raw">
                 <el-tabs  tab-position="top"  type="card" style="height:300px">
                    <el-tab-pane label="Request Body">
                       <el-form>
                   <div>
                     <div v-for="item in requestbodydata" class="text item">
                                {{item["name"] + ":"+item["value"] }}</br>
                    </div>
                    </div>
                 
                    </el-form>
            
                    </el-tab-pane>
                    <el-tab-pane label="Request headers"></el-tab-pane>
                 </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="Http"></el-tab-pane>
        </el-tabs>  
    </el-tab-pane>
    <el-tab-pane label="Response data">
        <el-tabs  tab-position="top"  type="card" >
            <el-tab-pane label="Response Body"></el-tab-pane>
            <el-tab-pane label="Response headers"></el-tab-pane>
        </el-tabs>   
    </el-tab-pane>
  </el-tabs>



</template>

<<script>
export default {
    name:"SamplerResult",
    data () {
        return {
            threaddata: [
                {name:"Thread Name",value:"测试线程"},
                {name:"Sample Start",value:"2019-05-16 22:43:47 CST"},
                {name:"Load time",value:"2065"},
                {name:"Connect Time",value:"2065"},
                {name:"Latency",value:"0"},
                {name:"Size in bytes",value:"2446"},
                {name:"Headers size in bytes",value:"0"},
                {name:"Body size in bytes",value:"2446"},
                {name:"Sample Count",value:"1"},
                {name:"Error Count",value:"1"},
                {name:'Data type ("text"|"bin"|"")',value:"text"},
                {name:"Response code",value:"Non HTTP response code: java.net.SocketException"},
                {name:"Response message",value:"Non HTTP response code: java.net.SocketException"},
                {name:"HTTPSampleResult fields",value:""},
                {name:"ContentType",value:""},
                {name:"DataEncoding",value:""}
                
            ],
            addtionaldata:[
                 {field:"Type Result",value:"HTTPSampleResult"},
                 {field:"ContentType",value:""},
                 {field:"DataEncoding",value:""},
            ],
            requestbodydata:[
                {name:"POST",value:"http://192.168.10.39:2001/skynet/api/wx/login/verifyCode?mobile=18607102824&smsCode=123456"},
                {name:"POST data",value:""},
                {name:"no cookies",value:""}
            ]

               
        }
    }
 
}
</script>