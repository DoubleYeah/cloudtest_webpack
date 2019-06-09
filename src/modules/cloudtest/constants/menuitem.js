/**
 * 菜单物件定义
 */
function click_Fake() {
	console.log("hello world")
}

var add_item = {
	text : '添加',
	click : click_Fake
}
var open_item = {
	text : '打开...',
	click : click_Fake
}
var combine_item = {
	text : '合并',
	click : click_Fake
}
var selectassave_item = {
	text : '选中部分保存为...',
	click : click_Fake
}
var help_item = {
	text : '帮助',
	click : click_Fake
}
var enable_item = {
	text : '启用',
	click : click_Fake
}
var disable_item = {
	text : '禁用',
	click : click_Fake
}
var switch_item = {
	text : '切换',
	click : click_Fake
}
var savenodeasimage_item = {
	text : '保存节点为图片',
	click : click_Fake
}
var savescreenasimage_item = {
	text : '保存屏幕为图片',
	click : click_Fake
}
var addresponsetime_item = {
	text : '为子线程添加响应时间',
	click : click_Fake
}
var start_item = {
	text : '启动',
	click : click_Fake
}
var nowaitstart_item = {
	text : '不停顿启动',
	click : click_Fake
}
var validate_item = {
	text : '验证',
	click : click_Fake
}

var cut_item = {
	text : '剪切',
	click : click_Fake
}

var copy_item = {
	text : '复制',
	click : click_Fake
}
var paste_item = {
	text : '粘贴',
	click : click_Fake
}
var duplicate_item = {
	text : '复写',
	click : click_Fake
}
var delete_item = {
	text : '删除',
	click : click_Fake
}

var saveastestfragment_item = {
	text : '保存为测试片段',
	click : click_Fake
}
var clear_item = {
	text : '清除',
	click : click_Fake
}
var thread_item = {
	text : "线程(用户)",
	children : [ {
		text : "setUp线程组"
	}, {
		text : "tearDown线程组"
	}, {
		text : "线程组"
	}

	]
}
var config_item = {
	text : "配置元件",
	children : [ {
		text : "csv数据文件设置"
	}, {
		text : "http信息头管理器"
	}, {
		text : "httpcookie管理器"
	}, {
		text : "http缓存管理器"
	}, {
		text : "http请求默认值"
	}, {
		line : true
	}, {
		text : "dns缓存管理器"
	}, {
		text : "ftp默认请求"
	}, {
		text : "http授权管理器"
	}, {
		text : "JDBC连接配置"
	}, {
		text : "Java默认请求"
	}, {
		text : "LDAP扩展请求默认值"
	}, {
		text : "LDAP默认请求"
	}, {
		text : "TCP取样器配置"
	}, {
		text : "密钥库配置"
	}, {
		text : "用户定义的变量"
	}, {
		text : "登录配置元件/素"
	}, {
		text : "简单配置元件"
	}, {
		text : "计数器"
	}, {
		text : "随机变量"
	}

	]
}

var listen_item = {
	text : "监听器",
	children : [ {
		text : "察看结果树"
	}, {
		text : "汇总报告"
	}, {
		text : "聚合报告"
	}, {
		text : "后端监听器"
	}, {
		line : true
	}, {
		text : "JSR223 listener"
	}, {
		text : "保存响应到文件"
	}, {
		text : "响应时间图"
	}, {
		text : "图形结果"
	}, {
		text : "断言结果"
	}, {
		text : "比较断言可视化器"
	}, {
		text : "汇总图"
	}, {
		text : "生成概要结果"
	}, {
		text : "用表格察看结果"
	}, {
		text : "简单结果写入器"
	}, {
		text : "邮件观察仪"
	}, {
		text : "BeanShell listenr"
	} ]
}

var timer_item = {
	text : "定时器",
	children : [ {
		text : "固定定时器"
	}, {
		text : "统一随机定时器"
	}, {
		text : "precise throughput timer"
	}, {
		text : "Constant throughput timer"
	}, {
		line : true
	}, {
		text : "JSR223 Timer"
	}, {
		text : "Synchronizing Timer"
	}, {
		text : "珀斯随机定时器"
	}, {
		text : "高斯随机定时器"
	}, {
		text : "BeanShell Timer"
	} ]
}
var pre_item = {
	text : "前置处理器",
	children : [ {
		text : "JSR223 preprocessor"
	}, {
		text : "用户参数"
	}, {
		line : true
	}, {
		text : "HTML链接解析器"
	}, {
		text : "HTTP URL重写修饰符"
	}, {
		text : "JDBC preprocessor"
	}, {
		text : "取样器超时"
	}, {
		text : "正则表达式用户参数"
	}, {
		text : "高斯随机定时器"
	}, {
		text : "BeanShell preprocessor"
	} ]
}

var post_item = {
	text : "后置处理器",
	children : [ {
		text : "CSS/JQUERY提取器"
	}, {
		text : "JSON提取器"
	}, {
		text : "正则表达式提取器"
	}, {
		text : "边界提取器"
	}, {
		text : "JSR223 postprocessor"
	}, {
		line : true
	}, {
		text : "Debug postprocessor"
	}, {
		text : "JDBC postprocessor"
	}, {
		text : "XPath2 Extractor"
	}, {
		text : "XPath提取器"
	}, {
		text : "结果状态处理器"
	}, {
		text : "BeanShell postprocessor"
	} ]
}

var assertion_item = {
	text : "断言",
	children : [ {
		text : "响应断言"
	}, {
		text : "JSON断言"
	}, {
		text : "大小断言"
	}, {
		text : "JSR223 Assertion"
	}, {
		text : "Xpath断言"
	}, {
		line : true
	}, {
		text : "Compare Assertion"
	}, {
		text : "HTML断言"
	}, {
		text : "MD5Hex断言"
	}, {
		text : "SMIME断言"
	}, {
		text : "XML Schema断言"
	}, {
		text : "XML断言"
	}, {
		text : "断言持续时间"
	}, {
		text : "BeanShell断言"
	} ]
}

var testfrag_item = {
	text : "测试片段",
	children : [ {
		text : "测试片段"
	} ]
}

var nottestfrag_item = {
	text : "非测试元件",
	children : [ {
		text : "HTTP代理服务器"
	}, {
		text : "HTTP镜像服务器"
	}, {
		text : "属性显示"
	} ]
}

var sampler_item = {
	text : "取样器",
	children : [ {
		text : "HTTP请求"
	}, {
		text : "测试活动"
	}, {
		text : "Debug Sampler"
	}, {
		text : "JSR223 Sampler"
	}, {
		line : true
	}, {
		text : "AJP/1.3取样器"
	}, {
		text : "Access Log Sampler"
	}, {
		text : "BeanShell取样器"
	}, {
		text : "FTP请求"
	}, {
		text : "JDBC request"
	}, {
		text : "JMS发布"
	}, {
		text : "JMS点到点"
	}, {
		text : "JMS订阅"
	}, {
		text : "JUnit请求"
	}, {
		text : "JAVA请求"
	}, {
		text : "LDAP扩展请求默认值"
	}, {
		text : "LDAP请求"
	}, {
		text : "OS进程取样器"
	}, {
		text : "SMTP取样器"
	}, {
		text : "TCP取样器"
	}, {
		text : "邮件阅读者取样器"
	} ]
}

var logic_item = {
	text : "逻辑控制器",
	children : [ {
		text : "如果(if)控制器"
	}, {
		text : "事务控制器"
	}, {
		text : "循环控制器"
	}, {
		text : "while控制器"
	}, {
		line : true
	}, {
		text : "Foreach控制器"
	}, {
		text : "runtime控制器"
	}, {
		text : "include控制器"
	}, {
		text : "临界部分控制器"
	}, {
		text : "交替控制器"
	}, {
		text : "仅一次控制器"
	}, {
		text : "录制控制器"
	}, {
		text : "简单控制器"
	}, {
		text : "随机控制器"
	}, {
		text : "随机顺序控制器"
	}, {
		text : "吞吐量控制器"
	}, {
		text : "switch控制器"
	}, {
		text : "模块控制器"
	} ]
}

var insertitem = {
	text : '插入上级',
	click : click_Fake,
	children : [ logic_item ]
}

function initfirstmenu(){
    var TestPlan_AddItem = add_item
	TestPlan_AddItem["children"] = [ thread_item, {
		line : true
	}, config_item, listen_item, {
		line : true
	}, timer_item, {
		line : true
	}, pre_item, post_item, assertion_item, {
		line : true
    }, testfrag_item, nottestfrag_item ]
    return [ TestPlan_AddItem, {
        line : true
    }, paste_item, {
        line : true
    }, open_item, combine_item, selectassave_item, {
        line : true
    }, savenodeasimage_item, savescreenasimage_item, {
        line : true
    }, enable_item, disable_item, switch_item, {
        line : true
    }, help_item ]
}
function initsecondmenu(){
    var sampler_AddItem = add_item
	sampler_AddItem["children"] = [ sampler_item, {
		line : true
	}, logic_item,{
		line : true
	}, pre_item, post_item, assertion_item, {
		line : true
	}, timer_item,{
		line : true
	}, testfrag_item,{
		line : true
    },config_item,listen_item]
    return  [ sampler_AddItem, {
        line : true
    },addresponsetime_item,start_item,nowaitstart_item,validate_item, {
        line : true
    },cut_item,copy_item,paste_item,duplicate_item,delete_item,{
        line : true
    }, open_item, combine_item, selectassave_item, {
        line : true
    }, savenodeasimage_item, savescreenasimage_item, {
        line : true
    }, enable_item, disable_item, switch_item, {
        line : true
    }, help_item ]
}
function initthirdmenu(){
    var sampler_AddItem = add_item
	sampler_AddItem["children"] = [ assertion_item, {
		line : true
	}, timer_item,{
		line : true
	}, pre_item, post_item,{
		line : true
    }, config_item,listen_item]
    return [ sampler_AddItem,insertitem,{
        line : true
    },cut_item,copy_item,paste_item,duplicate_item,delete_item,{
        line : true
    }, open_item, combine_item, selectassave_item,saveastestfragment_item,{
        line : true
    }, savenodeasimage_item, savescreenasimage_item, {
        line : true
    }, enable_item, disable_item, switch_item, {
        line : true
    }, help_item ]
}
function initfourthmenu(){
    return  [ clear_item,{
        line : true
    },cut_item,copy_item,paste_item,duplicate_item,delete_item,{
        line : true
    }, open_item, combine_item, selectassave_item,saveastestfragment_item,{
        line : true
    }, savenodeasimage_item, savescreenasimage_item, {
        line : true
    }, enable_item, disable_item, switch_item, {
        line : true
    }, help_item ]
}
export const firstmenu_map=initfirstmenu()
export const secondmenu_map=initsecondmenu()
export const thirdmenu_map=initthirdmenu()
export const forthmenu_map=initfourthmenu()
