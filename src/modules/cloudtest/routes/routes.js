//cloudtest子路由
import DashBoard from "../views/DashBoard.vue";
import ForeachController from "../views/controller/ForeachController.vue";
import CsvSetDataConfig from "../views/configelement/CsvDataSetConfig.vue";
import UserDefinedConfig from "../views/configelement/UserDefinedConfig.vue";
import TestPlan from "../views/plan/TestPlan.vue";
import ThreadGroup from "../views/threads/ThreadGroup.vue";
import ViewResultsTree from "../views/listener/ViewResultsTree.vue";

export default [
  {
    path: "/", //dashboard页面
    component: DashBoard,
  },{
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
  },{
    path: "/configelement/userDefinedconfig", //模块说明
    component: UserDefinedConfig
  },{
    path: "/threads/threadgroup", //模块说明
    component: ThreadGroup
  },{
      path:"/listener/viewresulttree",
      component: ViewResultsTree
  }
];