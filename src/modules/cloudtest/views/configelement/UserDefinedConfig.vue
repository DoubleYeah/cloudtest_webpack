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
        <el-table
          border
          style="width: 100%"
          height="600"
          row-key="index"
          :data="userdefinedlist"
          @row-click="getcurrowdata"
          highlight-current-row
          @cell-dblclick="dblhandleCurrentChange"
          ref="valuetable"
        >
          <el-table-column prop="name" label="Name:" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.edit_name">
                <el-input
                  v-model="scope.row.name"
                  @change="handleedit(scope.$index,scope.row)"
                  v-focus
                  @blur="inputblur"
                ></el-input>
              </span>
              <span v-else>
                <label>{{scope.row.name}}</label>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="value" label="Value" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.edit_value">
                <el-input
                  v-model="scope.row.value"
                  v-focus
                  @blur="inputblur"
                  @change="handleedit(scope.$index,scope.row)"
                ></el-input>
              </span>
              <span v-else>
                <label>{{scope.row.value}}</label>
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="description" label="Description" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.edit_description">
                <el-input
                  v-model="scope.row.description"
                  v-focus
                  @blur="inputblur"
                  @change="handleedit(scope.$index,scope.row)"
                ></el-input>
              </span>
              <span v-else>
                <label>{{scope.row.description}}</label>
              </span>
            </template>
          </el-table-column>
        </el-table>
        <el-button-group>
          <el-button type="primary" @click="opendetail">Detail</el-button>
          <el-button type="primary" @click="addvaluerow">Add</el-button>
          <el-button type="primary">Add from Clipboard</el-button>
          <el-button type="primary" @click="delvaluerow">Delete</el-button>
          <el-button type="primary" @click="changeorder('up')">Up</el-button>
          <el-button type="primary" @click="changeorder('down')">Down</el-button>
        </el-button-group>
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
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  name: "UserDefinedVariables",
  data() {
    return {
      input: "User Defined Variables",
      input2: "",
      input3: "User Defined Variables",
      input4: "",
      input5: "",
      elementname: "",
      comments: "",
      userdefinedlist: [],
      dialogTableVisible: false,
      name: "",
      data: ""
    };
  },
  mounted() {
    this.getContentData();
  },
  components: {
    "mark-down": markdown
  },
  methods: {
    getContentData() {
      this.pagedata = this.content.content;
      if (this.pagedata["data"]["propMap"]["TestElement.name"] != undefined) {
        this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"][
          "data"
        ]["value"];
      }
      if (this.pagedata["data"]["propMap"]["TestPlan.comments"] != undefined) {
        this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"][
          "data"
        ]["value"];
      }
      var variabledata = this.pagedata["data"]["propMap"][
        "Arguments.arguments"
      ]["data"]["value"];
      this.inituserdefinedVariable(variabledata);
    },
    inituserdefinedVariable(variabledata) {
      for (var variable in variabledata) {
        this.userdefinedlist[variable] = {
          name:
            variabledata[variable]["data"]["value"]["data"]["propMap"][
              "Argument.name"
            ]["data"]["value"],
          value:
            variabledata[variable]["data"]["value"]["data"]["propMap"][
              "Argument.value"
            ]["data"]["value"],
          description:
            variabledata[variable]["data"]["value"]["data"]["propMap"][
              "Argument.desc"
            ] != undefined
              ? variabledata[variable]["data"]["value"]["data"]["propMap"][
                  "Argument.desc"
                ]["data"]["value"]
              : "",
          edit_name: false,
          edit_value: false,
          edit_description: false,
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
        row.edit_description = true;
      }
    },
    handleedit(index, row) {
      console.log(index);
      console.log(row);
    },
    inputblur(row, event, column) {
      let tableD = this.userdefinedlist;
      tableD.forEach(function(item) {
        item.edit_name = false;
        item.edit_value = false;
        item.edit_description = false;
      });
    },
    addvaluerow(event) {
      var data = {
        name: "",
        value: "",
        description: "",
        edit_name: false,
        edit_value: false,
        edit_description: false,
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
                    type:
                      "org.apache.jmeter.testelement.property.StringProperty",
                    data: {
                      value: this.userdefinedlist[index].name,
                      name: "Argument.name"
                    }
                  },
                  "Argument.value": {
                    type:
                      "org.apache.jmeter.testelement.property.StringProperty",
                    data: {
                      value: this.userdefinedlist[index].value,
                      name: "Argument.value"
                    }
                  },
                  "Argument.metadata": {
                    type:
                      "org.apache.jmeter.testelement.property.StringProperty",
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
  }
};
</script>

<style scoped>
.el-main {
  margin-top: 10px;
}
div .baseproperty {
}
div .testelementproperty {
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
  margin-right: 10px;
}
.el-checkbox-group {
  text-align: left;
}
</style>