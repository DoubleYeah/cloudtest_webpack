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
        this.$emit('curl', url)
        //传递iframedata
      }
    },

    props: {
      treedata: Array
    }
  }

</script>

<style scoped>

</style>
