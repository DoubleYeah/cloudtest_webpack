<template>
  <div>
    <el-tree :data="treedata" :props="defaultProps" @node-click="handleNodeClick" :expand-on-click-node=false></el-tree>
  </div>
</template>

<script>
import { components_map } from "../constants/constants.js";
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "text"
      }
    };
  },
  methods: {
    handleNodeClick(node) {
      //变更iframeurl
      var content = JSON.stringify(node.content);
      var url = node.url;
      var node_component =
        components_map[
          node.content["data"]["propMap"]["TestElement.gui_class"]["data"][
            "value"
          ] +
            "_" +
            node.content.type
        ];
      //this.$emit('curl', url)
      this.$emit("refreshComponent", node_component, content);
      //传递iframedata
    }
  },

  props: {
    treedata: Array
  }
};
</script>

<style scoped>
.el-tree {
  background-color: #ecf0f5;
}
</style>
