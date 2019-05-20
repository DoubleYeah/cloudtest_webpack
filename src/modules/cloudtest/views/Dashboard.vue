<template>
    <el-container>
        <el-aside>
                <left-tree></left-tree>
        </el-aside>
        <el-container>
            <el-header></el-header>
            <el-main>
              <iframe src="/cloudtest/controller/foreachcontroller" style="width:100%;height:100%">
              </iframe>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import LeftTree from './LeftTree'

export default {
    name: "Dashboard",
    data () {
        return {

        };
    },
    components: {
        'left-tree': LeftTree
    }
}
</script>

<style scoped>
.el-container{
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04) */
}
.el-header {
  background-color: #B3C0D1;
  text-align: center;
  color: #333;
  line-height: 1.5em;
  border: solid #dcdfe6;
  border-width: 0 1px 0 1px;
}
.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 1.5em;
    height: 450px;
    border: solid #dcdfe6;
    border-width: 0 1px 1px 1px;
}
.el-aside{
    color:#333;
    border: solid #dcdfe6;
    border-width: 0 0 1px 1px;
}
.el-tree, .el-aside{
    background-color: #E4E7ED;
}
</style>
