//设置全局变量

export const components_map = {
  "org.apache.jmeter.control.gui.TestPlanGui_org.apache.jmeter.testelement.TestPlan": "test-plan",
  "org.apache.jmeter.threads.gui.ThreadGroupGui_org.apache.jmeter.threads.ThreadGroup": "thread-group",
  "org.apache.jmeter.config.gui.ArgumentsPanel_org.apache.jmeter.config.Arguments": "userdefine-variable",
  "org.apache.jmeter.testbeans.gui.TestBeanGUI_org.apache.jmeter.config.CSVDataSet": "csvdata-set",
  "org.apache.jmeter.protocol.http.control.gui.HttpTestSampleGui_org.apache.jmeter.protocol.http.sampler.HTTPSamplerProxy": "http-sampler",
  "org.apache.jmeter.extractor.json.jsonpath.gui.JSONPostProcessorGui_org.apache.jmeter.extractor.json.jsonpath.JSONPostProcessor": "json-extractor",
  "org.apache.jmeter.visualizers.ViewResultsFullVisualizer_org.apache.jmeter.reporters.ResultCollector": "result-tree",
  "org.apache.jmeter.visualizers.TableVisualizer_org.apache.jmeter.reporters.ResultCollector": "result-table",
  "org.apache.jmeter.protocol.http.gui.HeaderPanel_org.apache.jmeter.protocol.http.control.HeaderManager": "http-header",
  "org.apache.jmeter.assertions.gui.AssertionGui_org.apache.jmeter.assertions.ResponseAssertion": "response-assertion",
  "org.apache.jmeter.testbeans.gui.TestBeanGUI_org.apache.jmeter.extractor.BeanShellPostProcessor": "beanshell-post",
  "org.apache.jmeter.testbeans.gui.TestBeanGUI_org.apache.jmeter.modifiers.BeanShellPreProcessor": "beanshell-pre",
  "org.apache.jmeter.control.gui.ForeachControlPanel_org.apache.jmeter.control.ForeachController": "foreach-controller",
}
import ForeachController from "../views/controller/ForeachController.vue";
import CsvSetDataConfig from "../views/configelement/CsvDataSetConfig.vue";
import UserDefinedConfig from "../views/configelement/UserDefinedConfig.vue";
import TestPlan from "../views/plan/TestPlan.vue";
import ThreadGroup from "../views/threads/ThreadGroup.vue";
import ViewResultsTree from "../views/listener/ViewResultsTree.vue";
import ViewResultsTable from "../views/listener/ViewResultTable.vue";
import HttpHeaderManager from "../views/configelement/HttpHeaderManager.vue"
import BeanShellPostProcessors from "../views/postprocessor/BeanShellPostProcessors.vue";
import BeanShellPreProcessors from "../views/preprocessor/BeanShellPreProcessors.vue";
import JsonExtractor from "../views/postprocessor/JsonExtractor.vue";
import ResponseAssertion from "../views/assertion/ResponseAssertion.vue"
import HttpRequest from "../views/sampler/HttpRequest.vue";
import LeftTree from "../views/LeftTree.vue";

export const components_def_map = {
  "left-tree": LeftTree,
  "test-plan": TestPlan,
  "thread-group": ThreadGroup,
  "userdefine-variable": UserDefinedConfig,
  "csvdata-set": CsvSetDataConfig,
  "http-sampler": HttpRequest,
  "json-extractor": JsonExtractor,
  "result-tree": ViewResultsTree,
  "result-table": ViewResultsTable,
  "http-header": HttpHeaderManager,
  "response-assertion": ResponseAssertion,
  "beanshell-post": BeanShellPostProcessors,
  "beanshell-pre": BeanShellPreProcessors,
  "foreach-controller": ForeachController

}

export const assertion_rule_map = {
  contains: 2,
  matches: 1,
  equals: 8,
  sub_str: 16,
}
export const assertion_rule_check_map = {
  nor: 4,
  or: 32
}

