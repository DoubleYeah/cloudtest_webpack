<template>
  <div>
    <el-tree :data="treedata" :props="defaultProps" @node-click="handleNodeClick" @node-contextmenu='rightclick'></el-tree>
    <custom-menu id="rightClickMenu" :content="firstmenuitem" v-show="menuVisible"> </custom-menu>
  </div>
</template>

<script>
import { components_map } from "../constants/constants.js";
import contextmenu from "../views/common/menu.vue"
import {firstmenu_map,secondmenu_map,thirdmenu_map,fourthmenu_map, forthmenu_map} from "../constants/menuitem.js"
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "text"
      },
      menuVisible:false,
      firstmenuitem:firstmenu_map,
      secondmenuitem:secondmenu_map,
      thirdmenuitem:thirdmenu_map,
      fourthmenuitem:forthmenu_map
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
    },
    rightclick(event, object, value, element){
       this.menuVisible=true
       document.addEventListener('click',(e)=>{
        this.menuVisible = false;
      })
      let menu = document.querySelector("#rightClickMenu");
      /* 菜单定位基于鼠标点击位置 */
      menu.style.left = event.clientX + 20 + "px";
      menu.style.top = event.clientY - 30 + "px";
      menu.style.position = "absolute"; // 为新创建的DIV指定绝对定位
      menu.style.width = 160 + "px";
    }
  },

  props: {
    treedata: Array
  },
  components:{
    "custom-menu":contextmenu
  }
};
</script>

<style scoped>
.el-tree {
  background-color: #ecf0f5;
}
</style>
