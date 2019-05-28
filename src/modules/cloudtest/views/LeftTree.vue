<template>
  <div>
    <el-tree :data="treedata" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<script>
  export default {
    data() {
      return {

        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick(node) {
        //变更iframeurl
        var content=JSON.stringify(node.content)
        var url=node.url+"?content="+encodeURIComponent(content)
        //this.$emit('curl', url)
        this.$emit('refreshComponent', node.component, content);
        //传递iframedata
      }
    },

    props: {
      treedata: Array
    }
  }

</script>

<style scoped>
.el-tree{
  background-color: #ecf0f5;
}
</style>
