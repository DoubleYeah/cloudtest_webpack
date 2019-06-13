<template>
  <el-container>
    <el-aside>
      <left-tree v-on:curl="curl" v-on:refreshComponent="refreshComponent" :treedata="data"></left-tree>
    </el-aside>
    <el-container>
      <el-header></el-header>
      <el-main>
        <!-- <iframe :src="curls" style="width:100%;height:100%">
        </iframe>-->
        <keep-alive>
          <component
            v-bind:is="currentContentComponent"
            :content="currentNode"
            class="base-info"
            :key="currentNode.id"
          ></component>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { components_def_map } from "../constants/constants.js";
export default {
  name: "Dashboard",
  data() {
    return {
      data: [],
      curls: "",
      currentNode: {},
      currentContentComponent: ""
    };
  },
  components: components_def_map,
  created: function() {
    this.getCurrentTreeData();
  },
  methods: {
    curl: function(url) {
      // childValue就是子组件传过来的值
      this.curls = url;
    },
    refreshComponent: function(component, node) {
      // 动态控件以及节点数据
      this.currentContentComponent = component;
      this.currentNode = node;
      // this.currentContentComponent = null;
    },
    refreshNodeData: function(modifycontent) {
      this.currentNode.content = modifycontent;
    },
    arrayToTree: function(data, id, pid) {
      //将ID、ParentID这种数据格式转换为树格式
      var childrenName = "children";
      if (!data || !data.length) return [];
      var targetData = []; //存储数据的容器(返回)
      var records = {};
      var itemLength = data.length; //数据集合的个数
      for (var i = 0; i < itemLength; i++) {
        var o = data[i];
        var key = getKey(o[id]);
        records[key] = o;
      }
      for (var i = 0; i < itemLength; i++) {
        var currentData = data[i];
        var key = getKey(currentData[pid]);
        var parentData = records[key];
        if (!parentData) {
          targetData.push(currentData);
          continue;
        }
        parentData[childrenName] = parentData[childrenName] || [];
        parentData[childrenName].push(currentData);
      }
      return targetData;
      function getKey(key) {
        if (typeof key == "string") key = key.replace(/[.]/g, "").toLowerCase();
        return key;
      }
    },
    TreetoArray(arraytree, data) {
      //将tree还原成array
      for (var index in data) {
        let item = {
          id: data[index]["id"],
          pid: data[index]["pid"],
          content: data[index]["content"],
          icon: data[index]["icon"],
          url: data[index]["url"],
          menuName: data[index]["menuName"],
          className: data[index]["className"],
          text: data[index]["text"]
        };
        arraytree.push(item);
        let children = data[index]["children"]; //获取所有子节点
        this.TreetoArray(arraytree, children);
      }
    },
    getCurrentTreeData() {
      var url =
        "http://localhost:8082/tree/getjmetertree?filepath=" +
        "F:/code soft/测试工具/skynet.jmx";
      this.$http({
        method: "GET",
        url: url,
        emulateJSON: true
      }).then(
        function(success) {
          console.log("成功", success);
          //data.success(success.body);
          var treedata = this.arrayToTree(success.body.itemlist, "id", "pid");
          var arraytree = [];
          this.data = treedata;
          //this.TreetoArray(arraytree, treedata);
          //this.data = treedata;
          console.log(treedata);
          console.log(arraytree);
        },
        function(error) {
          console.log("错误", error);
          //data.error(error.body);
        }
      );
    }
  }
};
</script>

<style scoped>
.el-container {
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}
.el-header {
  /*background-color: #B3C0D1;*/
  text-align: center;
  color: #333;
  line-height: 1.5em;
  border: solid #dcdfe6;
  border-width: 0 1px 0 1px;
}
.el-main {
  /*background-color: #E9EEF3;
    color: #333;*/
  text-align: center;
  line-height: 1.5em;
  height: 800px;
  border: solid #dcdfe6;
  border-width: 0 1px 1px 1px;
}
.el-aside {
  border: solid #dcdfe6;
  border-width: 0 0 1px 1px;
}
.base-info {
  background-color: #ebeef5;
  box-shadow: 0.1em 0.1em 0.3em #838a96;
  margin: 0.5em;
}
</style>

<style>
div .baseproperty,
.testelementproperty {
  box-shadow: 0.1em 0 0.3em #838a96;
  padding: 0.5em;
}
div .testelementproperty {
  margin-top: 1em;
}
</style>
