//cloudtest子路由

import CsvSetDataConfig from "../configelement/CsvDataSetConfig.vue";
import UserDefinedConfig from "../configelement/UserDefinedConfig.vue";


export default [
  {
    path: "/configelement", //基础信息
    children:[
      {
        path: "csvsetdataconfig", //模块说明
        component: CsvSetDataConfig
      },{
        path: "configelement/userDefinedconfig", //模块说明
        component: UserDefinedConfig
      }

    ]
  }
];