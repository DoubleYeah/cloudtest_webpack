<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments" placeholder>
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <el-tabs tab-position="top" type="card">
          <el-tab-pane label="Basic">
            <fieldset>
              <legend style="text-align:left">Web Server</legend>
              <el-row>
              <el-input v-model="protocol" style="width:20%">
                <template slot="prepend">Protocol[http]</template>
              </el-input>
              <el-input v-model="webservernameorip" style="width:50%">
                <template slot="prepend">Server Name or IP:</template>
              </el-input>
              <el-input v-model="portnum" style="width:20%">
                <template slot="prepend">Port Number:</template>
              </el-input>
               </el-row>
            </fieldset>
            <fieldset>
              <div class="requestcontent">
                <legend style="text-align:left">HTTP Request</legend>
                <el-input v-model="methodtype" style="width:20%">
                  <template slot="prepend">Method:</template>
                  <el-select v-model="methodtype" slot="append">
                    <el-option label="GET" value="GET"></el-option>
                    <el-option label="POST" value="POST"></el-option>
                    <el-option label="HEAD" value="HEAD"></el-option>
                    <el-option label="PUT" value="PUT">PUT</el-option>
                    <el-option label="OPTIONS" value="OPTIONS"></el-option>
                    <el-option label="TRACE" value="TRACE"></el-option>
                    <el-option label="DELETE" value="DELETE"></el-option>
                    <el-option label="PATCH" value="PATCH"></el-option>
                    <el-option label="PROPFIND" value="PROPFIND"></el-option>
                    <el-option label="MKCOL" value="MKCOL"></el-option>
                    <el-option label="COPY" value="COPY"></el-option>
                    <el-option label="MOVE" value="MOVE"></el-option>
                    <el-option label="LOCK" value="LOCK"></el-option>
                    <el-option label="UNLOCK" value="UNLOCK"></el-option>
                    <el-option label="REPORT" value="REPORT"></el-option>
                    <el-option label="MKCALENDAR" value="MKCALENDAR"></el-option>
                    <el-option label="SEARCH" value="SEARCH"></el-option>
                  </el-select>
                </el-input>
                <el-input v-model="serverpath" style="width:50%">
                  <template slot="prepend">Path:</template>
                </el-input>
                <el-input v-model="encoding" style="width:20%">
                  <template slot="prepend">Content encoding:</template>
                </el-input>
                <el-checkbox-group v-model="sendtype" style="margin-top:10px;margin-bottom:10px">
                  <el-checkbox label="RedirectAutomatically" value="1"></el-checkbox>
                  <el-checkbox label="Follow Redirects" value="2"></el-checkbox>
                  <el-checkbox label="Use KeepAlive" value="3"></el-checkbox>
                  <el-checkbox label="Use Mutilpart/form-data" value="4"></el-checkbox>
                  <el-checkbox label="Browser-compatible headers" value="5"></el-checkbox>
                </el-checkbox-group>
                <el-tabs tab-position="top" type="card" v-model="tabpos">
                  <el-tab-pane label="Parameters" :disabled="paramdatacanedit" name="1">
                    <div style="text-align:center">
                      <label style="text-align:center">Send Parameters With the Request:</label>
                      <el-table border style="width: 100%" height="500" row-key="index" :data="userdefinedlist"
                        @row-click="getcurrowdata" highlight-current-row @cell-dblclick="dblhandleCurrentChange"
                        ref="valuetable">
                        <el-table-column prop="name" label="Name:" align="center">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_name">
                              <el-input v-model="scope.row.name" @change="handleedit(scope.$index,scope.row)" v-focus
                                @blur="inputblur"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.name}}</label>
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column prop="value" label="Value">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_value">
                              <el-input v-model="scope.row.value" v-focus @blur="inputblur"
                                @change="handleedit(scope.$index,scope.row)"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.value}}</label>
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column label="URL Encode?">
                          <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.always_encode"></el-checkbox>
                          </template>
                        </el-table-column>
                        <el-table-column prop="contenttype" label="Content-type">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_contenttype">
                              <el-input v-model="scope.row.contenttype" @change="handleedit(scope.$index,scope.row)"
                                v-focus @blur="inputblur"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.contenttype}}</label>
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column label="Include Equals?">
                          <template slot-scope="scope">
                            <el-checkbox v-model="scope.row.use_equals"></el-checkbox>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-button-group style="margin-top:10px">
                        <el-button type="primary" @click="opendetail">Detail</el-button>
                        <el-button type="primary" @click="addvaluerow">Add</el-button>
                        <el-button type="primary">Add from Clipboard</el-button>
                        <el-button type="primary" @click="delvaluerow">Delete</el-button>
                        <el-button type="primary" @click="changeorder('up')">Up</el-button>
                        <el-button type="primary" @click="changeorder('down')">Down</el-button>
                      </el-button-group>
                    </div>
                  </el-tab-pane>
                  <el-tab-pane label="Body Data" :disabled="bodycanedit" name="2">
                    <mark-down style="width:100%;height:200px" :initvalue="bodydata" ref="markdowneditor"></mark-down>
                  </el-tab-pane>
                  <el-tab-pane label="Files Upload" name="3">
                    <div style="text-align:center">
                      <label style="text-align:center">Send Parameters With the Request:</label>
                      <el-table border style="width: 100%" height="400px" :data="filelist" row-key="index"
                        @row-click="getcurrowfiledata" highlight-current-row @cell-dblclick="dblhandlefileCurrentChange"
                        ref="filetable">
                        <el-table-column prop="filepath" label="File Path">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_filepath">
                              <el-input v-model="scope.row.filepath" @change="handleedit(scope.$index,scope.row)"
                                v-focus @blur="inputfileblur"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.filepath}}</label>
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column prop="paramname" label="Parameter Name">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_paramname">
                              <el-input v-model="scope.row.paramname" @change="handleedit(scope.$index,scope.row)"
                                v-focus @blur="inputfileblur"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.paramname}}</label>
                            </span>
                          </template>
                        </el-table-column>
                        <el-table-column prop="mimetype" label="MIME Type">
                          <template slot-scope="scope">
                            <span v-if="scope.row.edit_mimetype">
                              <el-input v-model="scope.row.mimetype" @change="handleedit(scope.$index,scope.row)"
                                v-focus @blur="inputfileblur"></el-input>
                            </span>
                            <span v-else>
                              <label>{{scope.row.mimetype}}</label>
                            </span>
                          </template>
                        </el-table-column>
                      </el-table>
                      <el-button-group style="margin-top:10px">
                        <el-button type="primary" @click="addfilevaluerow">Add</el-button>
                        <el-button type="primary" >Browse..</el-button>
                        <el-button type="primary" @click="delfilevaluerow">Delete</el-button>
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
                  <legend style="text-align:left">Client Implementation</legend>implementation:
                  <el-select v-model="clientimplementationvalue">
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
                    <el-input v-model="conncttime">
                      <template slot="prepend">Connect:</template>
                    </el-input>
                  </el-col>
                  <el-col :span="12">
                    <el-input v-model="Responsetime">
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
                <el-input style="width:10px" value="6"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;URLs
                must match:
                <el-input  v-model="urlrematch" style="width:50%"></el-input>
              </div>
            </fieldset>
            <fieldset>
              <legend style="text-align:left">Source address</legend>
              <el-select v-model="select" slot="prepend">
                <el-option label="IP/Hostname" value="0"></el-option>
                <el-option label="Device" value="1"></el-option>
                <el-option label="Device IPV4" value="2"></el-option>
                <el-option label="Device IPV6" value="3"></el-option>
              </el-select>
              <el-input v-model="sourceaddrdata" style="width:80%"></el-input>
            </fieldset>
            <fieldset>
              <legend style="text-align:left">Proxy Server</legend>
              <el-input v-model="proxyHost" style="width:20%">
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
              <el-checkbox v-model="md5value" label="Save Response as MD5 hash?"></el-checkbox>
            </fieldset>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-dialog title="Detail" :visible.sync="dialogTableVisible" @close="closeDetail">
        <el-input readonly v-model="name"></el-input>
        <mark-down style="width:100%;height:200px" :initvalue="data" ref="markdowneditor"></mark-down>
        <el-button-group>
          <el-button type="primary" @click="updaterowdata">Update</el-button>
          <el-button type="primary" @click="getPrevRowdata">Previous</el-button>
          <el-button type="primary" @click="getNextRowdata">Next</el-button>
          <el-button type="primary" @click="closeDetail">Close</el-button>
        </el-button-group>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import markdown from "../common/markdown";
  const sendtype_map = {
    "HTTPSampler.follow_redirects": "Follow Redirects",
    "HTTPSampler.auto_redirects": "RedirectAutomatically",
    "HTTPSampler.use_keepalive": "Use KeepAlive",
    "HTTPSampler.DO_MULTIPART_POST": "Use Mutilpart/form-data",
    "HTTPSampler.BROWSER_COMPATIBLE_MULTIPART": "Browser-compatible headers"
  };
  export default {
    name: "HttpRequest",
    props: {
      content: {
        type: Object,
        required: true
      }
    },
    watch: {
      userdefinedlist(val) {
        if (val == []) {
          this.bodycanedit = false;
        } else {
          this.bodycanedit = true;
        }
      },
      bodydata(val) {
        if (val == "") {
          this.paramdatacanedit = false;
        } else {
          this.paramdatacanedit = true;
        }
      }
    },
    mounted() {
      this.getContentData();
    },
    methods: {
      getContentData() {
        this.pagedata = this.content.content;
        this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"][
          "data"
        ]["value"];
        if (this.pagedata["data"]["propMap"]["TestPlan.comments"] == undefined) {
          this.comments = "";
        } else {
          this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"][
            "data"
          ]["value"];
        }
        //取出协议名称
        this.protocol = this.pagedata["data"]["propMap"]["HTTPSampler.protocol"][
          "data"
        ]["value"];
        //取出domain
        this.webservernameorip = this.pagedata["data"]["propMap"][
          "HTTPSampler.domain"
        ]["data"]["value"];
        this.portnum = this.pagedata["data"]["propMap"]["HTTPSampler.port"][
          "data"
        ]["value"];
        this.methodtype = this.pagedata["data"]["propMap"]["HTTPSampler.method"][
          "data"
        ]["value"];
        this.serverpath = this.pagedata["data"]["propMap"]["HTTPSampler.path"][
          "data"
        ]["value"];
        this.encoding = this.pagedata["data"]["propMap"][
          "HTTPSampler.contentEncoding"
        ]["data"]["value"];
        this.sendtype = [];
        for (var key in sendtype_map) {
          if (
            this.pagedata["data"]["propMap"][key] != undefined &&
            this.pagedata["data"]["propMap"][key]["data"]["value"] == true
          ) {
            this.sendtype.push(sendtype_map[key]);
          }
        }
        //判断是body还是querystring
        if (
          this.pagedata["data"]["propMap"]["HTTPSampler.postBodyRaw"] !=
          undefined &&
          this.pagedata["data"]["propMap"]["HTTPSampler.postBodyRaw"]["data"][
            "value"
          ] == true
        ) {
          this.bodydata = this.pagedata["data"]["propMap"][
            "HTTPsampler.Arguments"
          ]["data"]["value"]["data"]["propMap"]["Arguments.arguments"]["data"][
            "value"
          ][0]["data"]["value"]["data"]["propMap"]["Argument.value"]["data"][
            "value"
          ];
          this.tabpos = "2";
        } else {
          let paramdata = this.pagedata["data"]["propMap"][
            "HTTPsampler.Arguments"
          ]["data"]["value"]["data"]["propMap"]["Arguments.arguments"]["data"][
            "value"
          ];
          this.inituserdefinedVariable(paramdata);
        }
        if (this.pagedata["data"]["propMap"][
            "HTTPsampler.Files"
          ] != undefined) {
          let filedata = this.pagedata["data"]["propMap"][
            "HTTPsampler.Files"
          ]["data"]["value"]["data"]["propMap"]["HTTPFileArgs.files"]["data"]["value"]
          this.initfilelist(filedata)
        }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.md5"
          ] != undefined){
            this.md5value=this.pagedata["data"]["propMap"][
            "HTTPSampler.md5"
          ]["data"]["value"]
          }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.implementation"
          ] != undefined){
            this.clientimplementationvalue=this.pagedata["data"]["propMap"][
            "HTTPSampler.implementation"
          ]["data"]["value"]
        }
        this.conncttime=this.pagedata["data"]["propMap"][
            "HTTPSampler.connect_timeout"
          ]["data"]["value"]
        this.Responsetime=this.pagedata["data"]["propMap"][
            "HTTPSampler.response_timeout"
          ]["data"]["value"]
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.ipSource"
          ] != undefined){
            this.proxyHost=this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyHost"
          ]["data"]["value"]
        }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyPort"
          ] != undefined){
            this.proxyportnum=this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyPort"
          ]["data"]["value"]
        }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyUser"
          ] != undefined){
            this.proxyuser=this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyUser"
          ]["data"]["value"]
        }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyPass"
          ] != undefined){
            this.proxypwd=this.pagedata["data"]["propMap"][
            "HTTPSampler.proxyPass"
          ]["data"]["value"]
        }
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.ipSource"
          ] != undefined){
            this.sourceaddrdata=this.pagedata["data"]["propMap"][
            "HTTPSampler.ipSource"
          ]["data"]["value"]
        }
        this.urlrematch=this.sourceaddrdata=this.pagedata["data"]["propMap"][
            "HTTPSampler.embedded_url_re"
          ]["data"]["value"]
        if(this.pagedata["data"]["propMap"][
            "HTTPSampler.ipSourceType"
          ] != undefined){
            this.select=this.pagedata["data"]["propMap"][
            "HTTPSampler.ipSourceType"
          ]["data"]["value"]
        }

      },
      initfilelist(filedata) {
        for (var fileindex in filedata) {
          this.filelist[fileindex] = {
            filepath: filedata[fileindex]["data"]["value"]["data"]["propMap"]["File.path"]["data"]["value"],
            paramname: filedata[fileindex]["data"]["value"]["data"]["propMap"]["File.paramname"]["data"]["value"],
            mimetype: filedata[fileindex]["data"]["value"]["data"]["propMap"]["File.mimetype"]["data"]["value"],
            edit_filepath: false,
            edit_paramname: false,
            edit_mimetype: false,
            index: fileindex
          }
        }
      },
      inituserdefinedVariable(variabledata) {
        for (var variable in variabledata) {
          this.userdefinedlist[variable] = {
            name: variabledata[variable]["data"]["value"]["data"]["propMap"][
              "Argument.name"
            ]["data"]["value"],
            value: variabledata[variable]["data"]["value"]["data"]["propMap"][
              "Argument.value"
            ]["data"]["value"],
            contenttype: variabledata[variable]["data"]["value"]["data"]["propMap"][
                "HTTPArgument.content_type"
              ] != undefined ?
              variabledata[variable]["data"]["value"]["data"]["propMap"][
                "HTTPArgument.content_type"
              ]["data"]["value"] : "text/plain",
            always_encode: variabledata[variable]["data"]["value"]["data"]["propMap"][
              "HTTPArgument.always_encode"
            ]["data"]["value"],
            use_equals: variabledata[variable]["data"]["value"]["data"]["propMap"][
              "HTTPArgument.use_equals"
            ]["data"]["value"],
            edit_name: false,
            edit_value: false,
            edit_contenttype: false,
            index: variable
          };
        }
      },
      opendetail() {
        if (!this.isEmptyObject(this.currowdata)) {
          this.dialogTableVisible = true;
          //将当前行取消高亮
          this.$refs.valuetable.setCurrentRow(null);
        }
      },
      getcurrowdata(row, column, event) {
        //高亮当前行
        this.currowdata = row;
        this.$refs.valuetable.setCurrentRow(row);
        this.name = row.name;
        this.data = row.value;
        console.log(row);
        //console.log(column)
      },
      dblhandleCurrentChange(row, column, cell, event) {
        if (column.label == "Name:") {
          row.edit_name = true;
        } else if (column.label == "Value") {
          row.edit_value = true;
        } else {
          row.edit_contenttype = true;
        }
      },
      getcurrowfiledata(row, column, event) {
        //高亮当前行
        this.currowfiledata = row;
        this.$refs.filetable.setCurrentRow(row);
        //console.log(column)
      },
      dblhandlefileCurrentChange(row, column, cell, event) {
        if (column.label == "File Path") {
          row.edit_filepath = true;
        } else if (column.label == "Parameter Name") {
          row.edit_paramname = true;
        } else {
          row.edit_mimetype = true;
        }
      },
      handleedit(index, row) {
        console.log(index);
        console.log(row);
      },
      inputblur(row, event, column) {
        let tableD = this.userdefinedlist;
        tableD.forEach(function (item) {
          item.edit_name = false;
          item.edit_value = false;
          item.edit_description = false;
        });
      },
      inputfileblur(row, event, column) {
        let tableD = this.filelist;
        tableD.forEach(function (item) {
          item.edit_filepath = false;
          item.edit_paramname = false;
          item.edit_mimetype = false;
        });
      },
      addvaluerow(event) {
        var data = {
          name: "",
          value: "",
          contenttype: "text/plain",
          edit_name: false,
          edit_value: false,
          edit_contenttype: false,
          always_encode: false,
          use_equals: false,
          index: this.userdefinedlist.length
        };
        //添加到最后一行
        this.userdefinedlist.push(data);
      },
      delvaluerow(event) {
        //删除当前选中行
        if (!this.isEmptyObject(this.currowdata)) {
          //将本行删除
          for (var rowindex in this.userdefinedlist) {
            if (rowindex == this.currowdata["index"]) {
              this.userdefinedlist.splice(rowindex, 1);
              //将当前行置为空
              this.currowdata = {};
              //调整index
              for (var i = rowindex; i < this.userdefinedlist.length; i++) {
                this.userdefinedlist[i]["index"] = i;
              }
              break;
            }
          }
        }
        console.log(this.userdefinedlist);
      },
      addfilevaluerow(event) {
        var data = {
          filepath: "",
          paramname: "",
          mimetype: "",
          edit_filepath: false,
          edit_paramname: false,
          edit_mimetype: false,
          index: this.filelist.length
        };
        //添加到最后一行
        this.filelist.push(data);
      },
      delfilevaluerow(event) {
        //删除当前选中行
        if (!this.isEmptyObject(this.currowfiledata)) {
          //将本行删除
          for (var rowindex in this.filelist) {
            if (rowindex == this.currowfiledata["index"]) {
              this.filelist.splice(rowindex, 1);
              //将当前行置为空
              this.currowdata = {};
              //调整index
              for (var i = rowindex; i < this.filelist.length; i++) {
                this.filelist[i]["index"] = i;
              }
              break;
            }
          }
        }
        console.log(this.filelist);
      },
      changeorder(ordertype, event) {
        //变更顺序
        if (!this.isEmptyObject(this.currowdata)) {
          //如果没有选中不变更
          if (ordertype == "up") {
            if (this.currowdata["index"] - 1 >= 0) {
              //如果不是第一个，将前一个的值与当前行的值进行交换
              var index = parseInt(this.currowdata["index"]) - 1;
              //交换值
              var swapdata = this.userdefinedlist[index];
              this.userdefinedlist[index] = this.userdefinedlist[
                this.currowdata["index"]
              ];
              this.userdefinedlist[index]["index"] = index;
              this.userdefinedlist[index + 1] = swapdata;
              this.userdefinedlist[index + 1]["index"] = index + 1;
              this.currowdata["index"] = index;
            }
          } else {
            //如果不是最后一个
            if (this.currowdata["index"] + 1 < this.userdefinedlist.length) {
              var index = parseInt(this.currowdata["index"]) + 1;
              //交换值
              var swapdata = this.userdefinedlist[index];
              this.userdefinedlist[index] = this.userdefinedlist[
                this.currowdata["index"]
              ];
              this.userdefinedlist[index]["index"] = index;
              this.userdefinedlist[index - 1] = swapdata;
              this.userdefinedlist[index - 1]["index"] = index - 1;
              this.currowdata["index"] = index;
            }
          }
        }
      },
      commitdata() {
        this.pagedata["data"]["propMap"]["TestElement.name"] = this.elementname;
        if (this.pagedata["data"]["propMap"]["TestPlan.comments"] != undefined) {
          this.pagedata["data"]["propMap"]["TestPlan.comments"]["data"][
            "value"
          ] = this.comments;
        } else {
          this.pagedata["data"]["propMap"]["TestPlan.comments"] = {
            type: "org.apache.jmeter.testelement.property.StringProperty",
            data: {
              value: this.comments,
              name: "TestPlan.comments"
            }
          };
        }
        for (var index in this.userdefinedlist) {
          var usedata = {
            type: "org.apache.jmeter.testelement.property.TestElementProperty",
            data: {
              value: {
                type: "org.apache.jmeter.config.Argument",
                data: {
                  propMap: {
                    "Argument.name": {
                      type: "org.apache.jmeter.testelement.property.StringProperty",
                      data: {
                        value: this.userdefinedlist[index].name,
                        name: "Argument.name"
                      }
                    },
                    "Argument.value": {
                      type: "org.apache.jmeter.testelement.property.StringProperty",
                      data: {
                        value: this.userdefinedlist[index].value,
                        name: "Argument.value"
                      }
                    },
                    "Argument.metadata": {
                      type: "org.apache.jmeter.testelement.property.StringProperty",
                      data: {
                        value: "=",
                        name: "Argument.metadata"
                      }
                    }
                  }
                }
              },
              name: this.userdefinedlist[index].name
            }
          };
          if (this.userdefinedlist[index].description != "") {
            usedata["data"]["value"]["data"]["propMap"]["Argument.desc"] = {
              type: "org.apache.jmeter.testelement.property.StringProperty",
              data: {
                value: this.userdefinedlist[index].description,
                name: "Argument.desc"
              }
            };
          }
          listdata.push(usedata);
        }
        this.pagedata["data"]["propMap"]["Arguments.arguments"]["data"][
          "value"
        ] = listdata;
        this.$emit("refreshNodeData", this.pagedata);
      },
      isEmptyObject(obj) {
        for (var key in obj) {
          return false; //返回false，不为空对象
        }
        return true; //返回true，为空对象
      },
      updaterowdata() {
        let index = this.currowdata.index;
        this.userdefinedlist[index].name = this.name;
        this.data = this.$refs.markdowneditor.getMarkDownValue();
        this.userdefinedlist[index].value = this.data;
        console.log(this.userdefinedlist);
      },
      getPrevRowdata() {
        //获取上一行的
        if (parseInt(this.currowdata.index) != 0) {
          let newindex = parseInt(this.currowdata.index) - 1;
          this.name = this.userdefinedlist[newindex + ""].name;
          this.data = this.userdefinedlist[newindex + ""].value;
          this.currowdata = this.userdefinedlist[newindex + ""];
        }
      },
      getNextRowdata() {
        if (parseInt(this.currowdata.index) != this.userdefinedlist.length - 1) {
          let newindex = parseInt(this.currowdata.index) + 1;
          this.name = this.userdefinedlist[newindex + ""].name;
          this.data = this.userdefinedlist[newindex + ""].value;
          this.currowdata = this.userdefinedlist[newindex + ""];
        }
      },
      closeDetail() {
        this.dialogTableVisible = false;
        this.currowdata = undefined;
        this.name = undefined;
        this.data = undefined;
      }
    },
    data() {
      return {
        input: "HTTP Request",
        input2: "",
        input3: "Headers Sorted in the Header Manager",
        pagedata: {},
        elementname: "",
        comments: "",
        headerdata: [],
        clientimplementationvalue: "default",
        Embeddedchecked: "0",
        select: "IP/Hostname",
        sourceaddrdata: "",
        servernameorip: "",
        proxyHost:"",
        proxyportnum: "",
        proxyuser: "",
        encoding: "",
        proxypwd: "",
        protocol: "",
        urlrematch:"",
        domain: "",
        webservernameorip: "",
        portnum: "",
        methodtype: "get",
        serverpath: "",
        sendtype: [],
        userdefinedlist: [],
        bodydata: "",
        dialogTableVisible: false,
        name: "",
        data: "",
        currowdata: {},
        bodycanedit: false,
        paramdatacanedit: false,
        tabpos: "1",
        filelist: [],
        md5value:false,
        conncttime:"",
        Responsetime:""
      };
    },
    components: {
      "mark-down": markdown
    }
  };

</script>
<style scoped>
  .el-header {
    font-size: 1.5em;
    text-align: left;
    font-weight: bold;
    margin-top: 0.5em;
  }

  div .baseproperty {}

  div .testelementproperty {
    text-align: left;
  }

</style>
