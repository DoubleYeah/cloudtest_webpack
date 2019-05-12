
<template>
  <div class="hello">
    <el-menu default-active="helloworld" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
      <el-menu-item index="helloworld">HelloWorld</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Dashboard</template>
        <el-menu-item index="dashboard#1">dashboard1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>无效按钮</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">Link</a></el-menu-item>
    </el-menu>
    <div class="line"></div>
    <router-view></router-view>
  </div>
</template>
 
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleSelect (link) {
      console.log(link)
    }
  }
}
</script>

<style scoped>

</style>
