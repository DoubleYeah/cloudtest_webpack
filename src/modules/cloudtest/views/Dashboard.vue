<template>
    <el-container>
        <el-aside>
                <left-tree v-on:curl="curl" :treedata="data"></left-tree>
        </el-aside>
        <el-container>
            <el-header></el-header>
            <el-main>
              <iframe :src="curls" style="width:100%;height:100%">
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
           data: [{
                label: 'TestPlan',
                url:"/admin/plan/testplan",
                content:{"type":"org.apache.jmeter.testelement.TestPlan","data":{"propMap":{"TestElement.gui_class":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"org.apache.jmeter.control.gui.TestPlanGui","name":"TestElement.gui_class"}},"TestElement.test_class":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"org.apache.jmeter.testelement.TestPlan","name":"TestElement.test_class"}},"TestElement.name":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"测试计划333","name":"TestElement.name"}},"TestElement.enabled":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"true","name":"TestElement.enabled"}},"TestPlan.comments":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"","name":"TestPlan.comments"}},"TestPlan.functional_mode":{"type":"org.apache.jmeter.testelement.property.BooleanProperty","data":{"value":false,"name":"TestPlan.functional_mode"}},"TestPlan.tearDown_on_shutdown":{"type":"org.apache.jmeter.testelement.property.BooleanProperty","data":{"value":true,"name":"TestPlan.tearDown_on_shutdown"}},"TestPlan.serialize_threadgroups":{"type":"org.apache.jmeter.testelement.property.BooleanProperty","data":{"value":false,"name":"TestPlan.serialize_threadgroups"}},"TestPlan.user_defined_variables":{"type":"org.apache.jmeter.testelement.property.TestElementProperty","data":{"value":{"type":"org.apache.jmeter.config.Arguments","data":{"propMap":{"Arguments.arguments":{"type":"org.apache.jmeter.testelement.property.CollectionProperty","data":{"value":[],"name":"Arguments.arguments"}},"TestElement.gui_class":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"org.apache.jmeter.config.gui.ArgumentsPanel","name":"TestElement.gui_class"}},"TestElement.test_class":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"org.apache.jmeter.config.Arguments","name":"TestElement.test_class"}},"TestElement.name":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"用户定义的变量","name":"TestElement.name"}},"TestElement.enabled":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"true","name":"TestElement.enabled"}}}}},"name":"TestPlan.user_defined_variables"}},"TestPlan.user_define_classpath":{"type":"org.apache.jmeter.testelement.property.StringProperty","data":{"value":"","name":"TestPlan.user_define_classpath"}}}}},
                children: [{
                    label: '二级 1-1',
                    children: [{
                    label: '三级 1-1-1'
                    }]
                }]
                }, {
                label: '一级 2',
                children: [{
                    label: '二级 2-1',
                    children: [{
                    label: '三级 2-1-1'
                    }]
                }, {
                    label: '二级 2-2',
                    children: [{
                    label: '三级 2-2-1'
                    }]
                }]
                }, {
                label: '一级 3',
                children: [{
                    label: '二级 3-1',
                    children: [{
                    label: '三级 3-1-1'
                    }]
                }, {
                    label: '二级 3-2',
                    children: [{
                    label: '三级 3-2-1'
                    }]
                }]
            }],
            curls:"",
        };
    },
    components: {
        'left-tree': LeftTree
    },
    methods: {
      curl: function (url) {
        // childValue就是子组件传过来的值
        this.curls = url
      }
    }
}
</script>

<style scoped>
.el-container{
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
.el-aside{
    border: solid #dcdfe6;
    border-width: 0 0 1px 1px;
}

</style>
