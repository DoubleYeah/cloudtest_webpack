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
        <el-tabs tab-position="top" type="card">
          <el-tab-pane label="Basic">
            <fieldset>
              <legend style="text-align:left">Web Server</legend>
              <el-input v-model="protocol" style="width:20%">
                <template slot="prepend">Protocol[http]</template>
              </el-input>
              <el-input v-model="webservernameorip" style="width:50%">
                <template slot="prepend">Server Name or IP:</template>
              </el-input>
              <el-input v-model="portnum" style="width:20%">
                <template slot="prepend">Port Number:</template>
              </el-input>
            </fieldset>
            <fieldset>
              <div class="requestcontent">
                <legend style="text-align:left">HTTP Request</legend>
                <el-input v-model="protocol" style="width:20%">
                  <template slot="prepend">Method:</template>
                  <el-select v-model="methodtype" slot="append">
                    <el-option label="GET" value="get"></el-option>
                    <el-option label="POST" value="post"></el-option>
                    <el-option label="HEAD" value="head"></el-option>
                    <el-option label="PUT" value="put">PUT</el-option>
                    <el-option label="OPTIONS" value="options"></el-option>
                    <el-option label="TRACE" value="trace"></el-option>
                    <el-option label="DELETE" value="delete"></el-option>
                    <el-option label="PATCH" value="patch"></el-option>
                    <el-option label="PROPFIND" value="propfind"></el-option>
                    <el-option label="MKCOL" value="mkcol"></el-option>
                    <el-option label="COPY" value="copy"></el-option>
                    <el-option label="MOVE" value="move"></el-option>
                    <el-option label="LOCK" value="lock"></el-option>
                    <el-option label="UNLOCK" value="unlock"></el-option>
                    <el-option label="REPORT" value="report"></el-option>
                    <el-option label="MKCALENDAR" value="mkcalendar"></el-option>
                    <el-option label="SEARCH" value="search"></el-option>
                  </el-select>
                </el-input>
                <el-input v-model="serverpath" style="width:50%">
                  <template slot="prepend">Path:</template>
                </el-input>
                <el-input v-model="portnum" style="width:20%">
                  <template slot="prepend">Content encoding:</template>
                </el-input>
                <el-checkbox-group v-model="sendtype" style="margin-top:10px;margin-bottom:10px">
                  <el-checkbox label="RedirectAutomatically" value="1"></el-checkbox>
                  <el-checkbox label="Follow Redirects" value="2"></el-checkbox>
                  <el-checkbox label="Use KeepAlive" value="3"></el-checkbox>
                  <el-checkbox label="Use Mutilpart/form-data" value="4"></el-checkbox>
                  <el-checkbox label="Browser-compatible headers" value="5"></el-checkbox>
                </el-checkbox-group>
                <el-tabs tab-position="top" type="card">
                  
                  <el-tab-pane label="Parameters">
                    <div style="text-align:center">
                    <label style="text-align:center">Send Parameters With the Request:</label>
                    <el-table border style="width: 100%" height="400px">
                      <el-table-column prop="name" label="Name:"></el-table-column>
                      <el-table-column prop="value" label="Value"></el-table-column>
                      <el-table-column prop="isurlencode" label="URL Encode?"></el-table-column>
                      <el-table-column prop="contenttype" label="Content-type"></el-table-column>
                      <el-table-column prop="isincludeequal" label="Include Equals?"></el-table-column>
                    </el-table>
                    <el-button-group style="margin-top:10px">
                      <el-button type="primary">Detail</el-button>
                      <el-button type="primary">Add</el-button>
                      <el-button type="primary">Add from Clipboard</el-button>
                      <el-button type="primary">Delete</el-button>
                      <el-button type="primary">Up</el-button>
                      <el-button type="primary">Down</el-button>
                    </el-button-group>
                   </div>
                  </el-tab-pane>
                  <el-tab-pane label="Body Data">
                      <el-input type="textarea" height="400px"></el-input>     
                  </el-tab-pane>
                  <el-tab-pane label="Files Upload">
                     <div style="text-align:center">
                     <label style="text-align:center">Send Parameters With the Request:</label>
                    <el-table border style="width: 100%" height="400px">
                      <el-table-column prop="filepath" label="File Path"></el-table-column>
                      <el-table-column prop="paramname" label="Parameter Name"></el-table-column>
                      <el-table-column prop="mimetype" label="MIME Type"></el-table-column>
                    </el-table>
                    <el-button-group style="margin-top:10px">
                      <el-button type="primary">Add</el-button>
                      <el-button type="primary">Browse..</el-button>
                      <el-button type="primary">Delete</el-button>
                    </el-button-group>
                    </div>
                  
                  </el-tab-pane>
                </el-tabs>
              </div>
            </fieldset>



          </el-tab-pane>
          <el-tab-pane label="Adavanced">
            <el-row :gutter="20">
              <el-col :span="12">
                <fieldset>
                  <legend style="text-align:left">Client Implementation</legend>
                  implementation:<el-select v-model="clientimplementationvalue">
                    <el-option label="HttpClient4" value="HttpClient4"></el-option>
                    <el-option label="JAVA" value="JAVA"></el-option>
                    <el-option label="  " value="default"></el-option>
                  </el-select>
                </fieldset>
              </el-col>
              <el-col :span="12">
                <fieldset>
                  <legend style="text-align:left">Timeouts(milliseconds)</legend>
                  <el-col :span="12">
                    <el-input>
                      <template slot="prepend">Connect:</template>
                    </el-input>
                  </el-col>
                  <el-col :span="12">
                    <el-input>
                      <template slot="prepend">Response:</template>
                    </el-input>
                  </el-col>
                </fieldset>
              </el-col>

            </el-row>
            <fieldset>
              <legend style="text-align:left">Embedded Resources from HTML Files</legend>
              <div>
                <el-checkbox label="Retrieve All Embedded Resources"></el-checkbox>
                <el-checkbox label="Parallel downloads.Number"></el-checkbox>
                <el-input style="width:10px" value="6"></el-input>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URLs must match:<el-input style="width:50%">
                </el-input>
              </div>
            </fieldset>
            <fieldset>
              <legend style="text-align:left">Source address</legend>
              <el-select v-model="select" slot="prepend">
                <el-option label="IP/Hostname" value="IP/Hostname"></el-option>
                <el-option label="Device" value="Device"></el-option>
                <el-option label="Device IPV4" value="Device IPV4"></el-option>
                <el-option label="Device IPV6" value="Device IPV6"></el-option>
              </el-select>
              <el-input v-model="sourceaddrdata" style="width:80%"></el-input>
            </fieldset>
            <fieldset>
              <legend style="text-align:left">Proxy Server</legend>
              <el-input v-model="servernameorip" style="width:20%">
                <template slot="prepend">Server Name or IP:</template>
              </el-input>
              <el-input v-model="proxyportnum" style="width:20%">
                <template slot="prepend">Port Number:</template>
              </el-input>
              <el-input v-model="proxyuser" style="width:20%">
                <template slot="prepend">Username</template>
              </el-input>
              <el-input v-model="proxypwd" style="width:20%">
                <template slot="prepend">Password</template>
              </el-input>
            </fieldset>
            <fieldset>
              <legend style="text-align:left">Optional Tasks</legend>
              <el-checkbox label="Save Response as MD5 hash?"></el-checkbox>
            </fieldset>


          </el-tab-pane>
        </el-tabs>
      </div>
    </el-main>

  </el-container>

</template>

<script>
  export default {
    name: "HttpRequest",
    data() {
      return {
        input: "HTTP Request",
        input2: "",
        input3: "Headers Sorted in the Header Manager",
        headerdata: [],
        clientimplementationvalue: "default",
        Embeddedchecked: "0",
        select: 'IP/Hostname',
        sourceaddrdata: "",
        servernameorip: "",
        proxyportnum: "",
        proxyuser: "",
        proxypwd: "",
        protocol: "",
        webservernameorip: "",
        portnum: "",
        methodtype: "get",
        serverpath: "",
        sendtype: ["Follow Redirects", "Use KeepAlive"]
      };
    }
  }

</script>
<style scoped>
  div .baseproperty {
  }

  div .testelementproperty {
  }

</style>
