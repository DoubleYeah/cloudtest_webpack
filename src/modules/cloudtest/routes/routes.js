//cloudtest子路由
import DashBoard from "../views/DashBoard.vue";
import ForeachController from "../views/controller/ForeachController.vue";
import CsvSetDataConfig from "../views/configelement/CsvDataSetConfig.vue";
import UserDefinedConfig from "../views/configelement/UserDefinedConfig.vue";
import TestPlan from "../views/plan/TestPlan.vue";
import ThreadGroup from "../views/threads/ThreadGroup.vue";
import ViewResultsTree from "../views/listener/ViewResultsTree.vue";
import ViewResultsTable from "../views/listener/ViewResultTable.vue";
import HttpHeaderManager from "../views/configelement/HttpHeaderManager.vue"
import BeanShellPostProcessors from "../views/postprocessor/BeanShellPostProcessors.vue";
import JsonExtractor from "../views/postprocessor/JsonExtractor.vue";
import ResponseAssertion from "../views/assertion/ResponseAssertion.vue"
import HttpRequest from "../views/sampler/HttpRequest.vue";

export default [{
    path: "/cloudtest", //dashboard页面
    component: DashBoard,
    name: "测试主页面",
  }, {
    path: "/controller/foreachcontroller", //模块说明
    component: ForeachController
  },
  {
    path: "/configelement/csvsetdataconfig", //模块说明
    component: CsvSetDataConfig
  },
  {
    path: "/plan/testplan", //模块说明
    component: TestPlan
  }, {
    path: "/configelement/userDefinedconfig", //模块说明
    component: UserDefinedConfig
  }, {
    path: "/threads/threadgroup", //模块说明
    component: ThreadGroup
  }, {
    path: "/listener/viewresulttree",
    component: ViewResultsTree
  }, {
    path: "/listener/viewresulttable",
    component: ViewResultsTable
  }, {
    path: "/configelement/httpheadermanager", //模块说明
    component: HttpHeaderManager
  }, {
    path: "/postprocessor/beanshellpostprocessor", //模块说明
    component: BeanShellPostProcessors
  }, {
    path: "/postprocessor/jsonextractor", //模块说明
    component: JsonExtractor
  }, {
    path: "/assertion/responseassertion", //模块说明
    component: ResponseAssertion
  }, {
    path: "/sampler/httprequest", //模块说明
    component: HttpRequest
  }
];
