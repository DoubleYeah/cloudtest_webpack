<template>
  <el-container>
    <el-aside>
      <left-tree v-on:curl="curl" v-on:refreshComponent="refreshComponent" :treedata="data"></left-tree>
    </el-aside>
    <el-container>
        <el-header></el-header>
        <el-main>
            <!-- <iframe :src="curls" style="width:100%;height:100%">
            </iframe> -->
            <keep-alive>
            <component v-bind:is="currentContentComponent" :content="currentContent" class="base-info"></component>
            </keep-alive>
        </el-main>
    </el-container>
  </el-container>
</template>

<script>
import LeftTree from "./LeftTree";
import TestPlanVue from "./plan/TestPlan.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      data: [
        {
          label: "TestPlan",
          url: "/admin/plan/testplan",
          component: "test-plan",
          content: {
            type: "org.apache.jmeter.testelement.TestPlan",
            data: {
              propMap: {
                "TestElement.gui_class": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: {
                    value: "org.apache.jmeter.control.gui.TestPlanGui",
                    name: "TestElement.gui_class"
                  }
                },
                "TestElement.test_class": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: {
                    value: "org.apache.jmeter.testelement.TestPlan",
                    name: "TestElement.test_class"
                  }
                },
                "TestElement.name": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: { value: "测试计划333", name: "TestElement.name" }
                },
                "TestElement.enabled": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: { value: "true", name: "TestElement.enabled" }
                },
                "TestPlan.comments": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: { value: "", name: "TestPlan.comments" }
                },
                "TestPlan.functional_mode": {
                  type:
                    "org.apache.jmeter.testelement.property.BooleanProperty",
                  data: { value: true, name: "TestPlan.functional_mode" }
                },
                "TestPlan.tearDown_on_shutdown": {
                  type:
                    "org.apache.jmeter.testelement.property.BooleanProperty",
                  data: { value: true, name: "TestPlan.tearDown_on_shutdown" }
                },
                "TestPlan.serialize_threadgroups": {
                  type:
                    "org.apache.jmeter.testelement.property.BooleanProperty",
                  data: { value: true, name: "TestPlan.serialize_threadgroups" }
                },
                "TestPlan.user_defined_variables": {
                  type:
                    "org.apache.jmeter.testelement.property.TestElementProperty",
                  data: {
                    value: {
                      type: "org.apache.jmeter.config.Arguments",
                      data: {
                        propMap: {
                          "Arguments.arguments": {
                            type:
                              "org.apache.jmeter.testelement.property.CollectionProperty",
                            data: {
                              value: [
                                {
                                  type:
                                    "org.apache.jmeter.testelement.property.TestElementProperty",
                                  data: {
                                    value: {
                                      type: "org.apache.jmeter.config.Argument",
                                      data: {
                                        propMap: {
                                          "Argument.name": {
                                            type:
                                              "org.apache.jmeter.testelement.property.StringProperty",
                                            data: {
                                              value: "123",
                                              name: "Argument.name"
                                            }
                                          },
                                          "Argument.value": {
                                            type:
                                              "org.apache.jmeter.testelement.property.StringProperty",
                                            data: {
                                              value: "1234",
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
                                    name: "123"
                                  }
                                },
                                {
                                  type:
                                    "org.apache.jmeter.testelement.property.TestElementProperty",
                                  data: {
                                    value: {
                                      type: "org.apache.jmeter.config.Argument",
                                      data: {
                                        propMap: {
                                          "Argument.name": {
                                            type:
                                              "org.apache.jmeter.testelement.property.StringProperty",
                                            data: {
                                              value: "2345",
                                              name: "Argument.name"
                                            }
                                          },
                                          "Argument.value": {
                                            type:
                                              "org.apache.jmeter.testelement.property.StringProperty",
                                            data: {
                                              value: "323213",
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
                                    name: "2345"
                                  }
                                }
                              ],
                              name: "Arguments.arguments"
                            }
                          },
                          "TestElement.gui_class": {
                            type:
                              "org.apache.jmeter.testelement.property.StringProperty",
                            data: {
                              value:
                                "org.apache.jmeter.config.gui.ArgumentsPanel",
                              name: "TestElement.gui_class"
                            }
                          },
                          "TestElement.test_class": {
                            type:
                              "org.apache.jmeter.testelement.property.StringProperty",
                            data: {
                              value: "org.apache.jmeter.config.Arguments",
                              name: "TestElement.test_class"
                            }
                          },
                          "TestElement.name": {
                            type:
                              "org.apache.jmeter.testelement.property.StringProperty",
                            data: {
                              value: "用户定义的变量",
                              name: "TestElement.name"
                            }
                          },
                          "TestElement.enabled": {
                            type:
                              "org.apache.jmeter.testelement.property.StringProperty",
                            data: { value: "true", name: "TestElement.enabled" }
                          }
                        }
                      }
                    },
                    name: "TestPlan.user_defined_variables"
                  }
                },
                "TestPlan.user_define_classpath": {
                  type: "org.apache.jmeter.testelement.property.StringProperty",
                  data: {
                    value:
                      "F:\\code soft\\测试工具\\apache-jmeter-5.0\\bin\\ApacheJMeter.jar,F:\\code soft\\测试工具\\apache-jmeter-5.0\\lib\\asm-6.1.jar",
                    name: "TestPlan.user_define_classpath"
                  }
                }
              }
            }
          },
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      curls: "",
      currentContentComponent: "",
      currentContent: ""
    };
  },
  components: {
    "left-tree": LeftTree,
    "test-plan": TestPlanVue
  },
  methods: {
    curl: function(url) {
      // childValue就是子组件传过来的值
      this.curls = url;
    },
    refreshComponent: function(component, content) {
      // 动态控件以及节点数据
      this.currentContentComponent = component;
      this.currentContent = content;
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
    TreetoArray() {
      //将tree还愿成array
    },
    getCurrentTreeData() {
      var url =
        "http://localhost:8082/tree/getjmetertree?filepath=" +
        "F:/code soft/测试工具/responeassertion.jmx";
      this.$http({
        method: "GET",
        url: url,
        emulateJSON: true
      }).then(
        function(success) {
          console.log("成功", success);
          //data.success(success.body);
          var treedata = this.arrayToTree(success.body.itemlist, "id", "pid");
          //this.data = treedata;
          console.log(treedata);
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
.base-info{
    background-color: #EBEEF5;
    box-shadow: 0.1em 0.1em 0.3em #838a96;
    margin: 0.5em;
}
</style>
