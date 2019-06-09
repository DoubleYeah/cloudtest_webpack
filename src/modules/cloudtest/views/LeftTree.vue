<template>
  <div>
    <el-tree
      :data="treedata"
      :props="defaultProps"
      @node-click="handleNodeClick"
      @node-contextmenu="rightclick"
      :expand-on-click-node="false"
    ></el-tree>
    <custom-menu id="rightClickMenu" :content="firstmenuitem" v-show="menuVisible" ref="firstmenu"></custom-menu>
  </div>
</template>

<script>
import { components_map } from "../constants/constants.js";
import contextmenu from "../views/common/menu.vue";
import {
  firstmenu_map,
  secondmenu_map,
  thirdmenu_map,
  fourthmenu_map,
  forthmenu_map
} from "../constants/menuitem.js";
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "text"
      },
      menuVisible: false,
      firstmenuitem: firstmenu_map,
      secondmenuitem: secondmenu_map,
      thirdmenuitem: thirdmenu_map,
      fourthmenuitem: forthmenu_map
    };
  },
  methods: {
    handleNodeClick(node) {
      //变更iframeurl
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
      this.$emit("refreshComponent", node_component, node);
      //传递iframedata
    },
    rightclick(event, object, value, element) {
      this.$refs.firstmenu.setCallElement(object);
      this.$refs.firstmenu.show({
        top: event.pageY,
        left: event.pageX
      });
      document.addEventListener("click", e => {
        this.$refs.firstmenu.hide();
      });
    }
  },

  props: {
    treedata: Array
  },
  components: {
    "custom-menu": contextmenu
  }
};
</script>

<style scoped>
.el-tree {
  background-color: #ecf0f5;
}
</style>
