<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments">
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <label class="title">{{input3}}</label>
        <el-table border style="width: 100%" height="400" row-key="index" :data="userdefinedlist" @row-click="getcurrowdata"
          highlight-current-row @cell-dblclick="dblhandleCurrentChange" ref="valuetable">
          <el-table-column prop="name" label="Name:" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.edit_name">
                <el-input v-model="scope.row.name" @change="handleedit(scope.$index,scope.row)" v-focus
                  @blur="inputblur"></el-input>
              </span>
              <span v-else><label>{{scope.row.name}}</label></span>

            </template>

          </el-table-column>
          <el-table-column prop="value" label="Value" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.edit_value">
                <el-input v-model="scope.row.value" v-focus @blur="inputblur"
                  @change="handleedit(scope.$index,scope.row)"></el-input>
              </span>
              <span v-else><label>{{scope.row.value}}</label></span>
            </template>
          </el-table-column>
        </el-table>
        <el-button-group>
          <el-button type="primary" @click="dialogTableVisible=true">Detail</el-button>
          <el-button type="primary" @click="addvaluerow">Add </el-button>
          <el-button type="primary">Add from Clipboard</el-button>
          <el-button type="primary"  @click="delvaluerow">Delete</el-button>
          <el-button type="primary" @click="changeorder('up')">Up</el-button>
          <el-button type="primary" @click="changeorder('down')">Down</el-button>
        </el-button-group>
        <div style="text-align:left">
          <el-checkbox label="Run Thread Groups consecutively (i.e. one at time)" v-model="serialize_threadgroups">
          </el-checkbox></br>
          <el-checkbox label="Run TearDown Thread Groups after shutdown of main threads"
            v-model="runteardownonshutdown"></el-checkbox></br>
          <el-checkbox label="Function Test Mode (i.e. save Response Data and Sampler Data) " v-model="functional_mode">
          </el-checkbox></br>
          <label>Selecting Functional TestMode may adversely affect perfomance</label>
        </div>
        <div style="text-align:left">
          Add directiory or jar to classpath &nbsp; &nbsp;<el-button-group>
            <el-button type="primary">Browse...</el-button>
            <el-button type="primary">Delete</el-button>
            <el-button type="primary">Clear</el-button>
          </el-button-group>
        </div>
        <el-table border style="width: 100%" height="200" :data="librarylist">
          <el-table-column prop="library" label="Library" align="center"></el-table-column>
        </el-table>
      </div>
      <el-dialog title="Detail" :visible.sync="dialogTableVisible" @close="dialogTableVisible=false">
        <el-input readonly v-model="name"></el-input>
        <el-input type="textarea" v-model="data" style="margin-top:10px;width:100%;"></el-input>
      </el-dialog>
    </el-main>
  </el-container>
</template>

<script>
  import markdown from "../common/markdown"
  export default {
    name: "TestPlan",
    data() {
      return {
        currowdata: {}, //当前行的数据
        name: "",
        data: "",
        winflag: false,
        input: "TestPlan",
        input2: "",
        input3: "User Defined Variables",
        input4: "",
        input5: "",
        pagedata: {},
        elementname: "",
        comments: "",
        runteardownonshutdown: false,
        functional_mode: false,
        serialize_threadgroups: false,
        userdefinedlist: [],
        librarylist: [],
        dialogTableVisible: false
      }
    },
    mounted() {
      this.getContentData()
    },
    components: {
      "mark-down": markdown
    },
    methods: {
      getContentData() {
        var urldata = this.$route.query
        this.pagedata = JSON.parse(urldata.content)
        this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"]["data"]["value"]
        this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"]["data"]["value"]
        this.runteardownonshutdown = this.pagedata["data"]["propMap"]["TestPlan.tearDown_on_shutdown"]["data"]["value"]
        this.functional_mode = this.pagedata["data"]["propMap"]["TestPlan.functional_mode"]["data"]["value"]
        this.serialize_threadgroups = this.pagedata["data"]["propMap"]["TestPlan.serialize_threadgroups"]["data"][
          "value"
        ]
        var variabledata = this.pagedata["data"]["propMap"]["TestPlan.user_defined_variables"]["data"]["value"]["data"][
          "propMap"
        ]["Arguments.arguments"]["data"]["value"]
        this.inituserdefinedVariable(variabledata)
        var librarydata = this.pagedata["data"]["propMap"]["TestPlan.user_define_classpath"]["data"]["value"].split(",")
        for (var index in librarydata) {
          this.librarylist[index] = {
            "library": librarydata[index]
          }
        }


      },
      inituserdefinedVariable(variabledata) {
        for (var variable in variabledata) {
          this.userdefinedlist[variable] = {
            "name": variabledata[variable]["data"]["value"]["data"]["propMap"]["Argument.name"]["data"]["value"],
            "value": variabledata[variable]["data"]["value"]["data"]["propMap"]["Argument.value"]["data"]["value"],
            "edit_name": false,
            "edit_value": false,  
            "index":variable
          }
        }
      },
      opendetail() {

      },
      getcurrowdata(row, column, event) {
        //高亮当前行
        this.currowdata = row
        this.$refs.valuetable.setCurrentRow(row)
        this.name = row.name
        this.data = row.value
        console.log(row)
        //console.log(column)
      },
      dblhandleCurrentChange(row, column, cell, event) {
        if (column.label == "Name:") {
          row.edit_name = true
        } else {
          row.edit_value = true
        }
      },

      dblhandlecurrentsingleChange(row, column, cell, event) {
        //  let tabledata=this.userdefinedlist
        //  tabledata.forEach(function(item){
        //      item.edit_name = false;
        //      item.edit_value = false;
        //  })
      },
      handleedit(index, row) {
        console.log(index)
        console.log(row)
      },
      inputblur(row, event, column) {
        let tableD = this.userdefinedlist;
        tableD.forEach(function (item) {
          item.edit_name = false;
          item.edit_value = false;
        });
      },
      addvaluerow(event) {
        var data = {
          "name": "",
          "value": "",
          "edit_name": false,
          "edit_value": false,
          "index":this.userdefinedlist.length
        }
        //添加到最后一行
        this.userdefinedlist.push(data)
      },
      delvaluerow(event) {
        //删除当前选中行
        if (!this.isEmptyObject(this.currowdata)){
           //将本行删除
           for(var rowindex in this.userdefinedlist){
              if(this.userdefinedlist[rowindex].name==this.currowdata.name&&this.userdefinedlist[rowindex].value==this.currowdata.value){
                if(rowindex==this.currowdata["index"]){
                   this.userdefinedlist.splice(rowindex,1)
                   //将当前行置为空
                   this.currowdata={}
                   //调整index
                   for(var i=rowindex;i<this.userdefinedlist.length;i++){
                      this.userdefinedlist[i]["index"]=i
                   } 
                   break
                }
                
                 
              }
           }
           
        }
        console.log(this.userdefinedlist)
        
      },
      changeorder(ordertype,event){
         //变更顺序
         if (!this.isEmptyObject(this.currowdata)){
           //如果没有选中不变更
            if(ordertype=="up"){
               if(this.currowdata["index"]-1>=0){
                 //如果不是第一个，将前一个的值与当前行的值进行交换
                 var index=parseInt(this.currowdata["index"])-1
                 //交换值
                 var swapdata=this.userdefinedlist[index]
                 this.userdefinedlist[index]=this.userdefinedlist[this.currowdata["index"]]
                 this.userdefinedlist[index]["index"]=index
                 this.userdefinedlist[index+1]=swapdata      
                 this.userdefinedlist[index+1]["index"]=index+1
                 this.currowdata["index"]=index
                 


               }
            }else{
               //如果不是最后一个
               if(this.currowdata["index"]+1<this.userdefinedlist.length){
                 var index=parseInt(this.currowdata["index"])+1
                 //交换值
                 var swapdata=this.userdefinedlist[index]
                 this.userdefinedlist[index]=this.userdefinedlist[this.currowdata["index"]]
                 this.userdefinedlist[index]["index"]=index
                 this.userdefinedlist[index-1]=swapdata           
                 this.userdefinedlist[index-1]["index"]=index-1
                 this.currowdata["index"]=index
                

               }
            }
         }
         
         //this.$refs.valuetable.setCurrentRow(this.userdefinedlist[this.currowdata["index"]])
         console.log(this.currowdata)
         console.log(this.userdefinedlist)
      },
      isEmptyObject(obj) {
        for (var key in obj) {
          return false; //返回false，不为空对象
        }
        return true; //返回true，为空对象
      },

    }

  }

</script>

<style>
  .el-main {
    margin-top: 10px
  }

  div .baseproperty {
    border: solid #dcdfe6;
  }

  div .testelementproperty {
    margin-top: 10px;
    text-align: center;
  }

  .el-checkbox {
    margin-top: 10px;
  }

  .el-button-group {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .el-button {
    margin-right: 10px
  }

  .el-checkbox-group {
    text-align: left
  }

</style>
