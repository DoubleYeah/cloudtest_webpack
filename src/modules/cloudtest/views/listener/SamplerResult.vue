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
    <el-tab-pane v-if="showdata" label="Request">
         <el-tabs  type="card" tab-position="bottom" >
            <el-tab-pane label="Raw">
                 <el-tabs  tab-position="top"  type="card" style="height:300px">
                    <el-tab-pane label="Request Body">
                       <el-form>
                   <div>
                      {{requestbodydata[0].value+requestbodydata[1].value+":"+"//"+requestbodydata[2].value+":"+requestbodydata[3].value+requestbodydata[4].value+"?"+getRequestParamdata()}}</br>
                      {{requestbodydata[0].value+" data:"}}</br>
                      [no cookie]:
                    </div>
                 
                    </el-form>
            
                    </el-tab-pane>
                    <el-tab-pane label="Request headers">
                       <el-form>
                            <div>
                              <div v-for="item in requestheaderdata">
                                   {{item.name+":"+item.value}}
                              </div>
                            </div>

                       </el-form>
                    
                    </el-tab-pane>
                 </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="Http">
                <el-col :span="10">
                   <el-input></el-input>
                </el-col>&nbsp;
                <el-button type="primary">Find</el-button>
                <el-checkbox label="Case sensitive"></el-checkbox>
                <el-checkbox label="Regular exp."></el-checkbox></br>
                <el-table border :data="requestbodydata" max-height="100px">
                    <el-table-column prop="name" ></el-table-column>
                    <el-table-column prop="value" ></el-table-column>

                </el-table>
                </br>
                <el-table border :data="requestParamdata" max-height="100px">
                    <el-table-column prop="name" label="Parameter name" ></el-table-column>
                    <el-table-column prop="value" label="Value"></el-table-column>

                </el-table>
                </br>
                <el-table border :data="requestheaderdata" max-height="100px">
                    <el-table-column prop="name" label="Request header" ></el-table-column>
                    <el-table-column prop="value" label="Value"></el-table-column>

                </el-table>        
            </el-tab-pane>
        </el-tabs>  
    </el-tab-pane>
    <el-tab-pane v-if="showdata" label="Response data">
        <el-tabs  tab-position="top"  type="card" >
            <el-tab-pane label="Response Body">
                 <el-form>
                            <el-col :span="10">
                   <el-input></el-input>
                </el-col>&nbsp;
                <el-button type="primary">Find</el-button>
                <el-checkbox label="Case sensitive"></el-checkbox>
                <el-checkbox label="Regular exp."></el-checkbox></br>
                            <div>
                              <div v-for="item in responsebodydata">
                                   {{item.name+":"+item.value}}
                              </div>
                            </div>

                       </el-form>
            
            </el-tab-pane>
            <el-tab-pane label="Response headers">
                  <el-form>
                     <el-col :span="10">
                   <el-input></el-input>
                </el-col>&nbsp;
                <el-button type="primary">Find</el-button>
                <el-checkbox label="Case sensitive"></el-checkbox>
                <el-checkbox label="Regular exp."></el-checkbox></br>
                            <div>
                              <div v-for="item in responseheaderdata">
                                   {{item.name+":"+item.value}}
                              </div>
                            </div>

                       </el-form>
            
            </el-tab-pane>
        </el-tabs>   
    </el-tab-pane>
  </el-tabs>



</template>

<script>
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
                {name:"Method",value:"POST"},
                {name:"Protocol",value:"http"},
                {name:"Host",value:"192.168.10.39"},
                {name:"Port",value:"2001"},
                {name:"Path",value:"/skynet/api/wx/login/verifyCode"}
            ],
            //{Method:"POST",Protocol:"http",Host:"192.168.10.39",Port:"2001",Path:"/skynet/api/wx/login/verifyCode"},
            requestParamdata:[
                {name:"smsCode",value:"5220"},
                {name:"mobile",value:"18607102824"}
            ],
            requestheaderdata:[
                {name:"Connection",value:"keep-alive"},
                {name:"content-type",value:"application/json;charset=utf-8"},
                {name:"Content-length",value:"0"},
                {name:"Host",value:"192.168.10.39:2001"},
                {name:"User-Agent",value:"Apache-HttpClient/4.5.6 (Java/1.8.0_45)"}
            ],
            responsebodydata:[

            ],
            responseheaderdata:[],
            showdata:false


               
        }
    },
    methods: {
        getRequestParamdata(){
            var path=""
            for(var paramdata in this.requestParamdata){
                path=path+this.requestParamdata[paramdata].name+"="+this.requestParamdata[paramdata].value+"&"
            }
            path=path.substring(0,path.length-1)
            return path
        }
    },
 
}
</script>