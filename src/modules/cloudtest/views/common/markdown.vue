<template>
  <mavon-editor
    :initialValue="initvalue"
    theme="GitHub"
    :toolbars="toolbars"
    mode="3"
    ref="mavon"
    v-model="currentvalue"
  />
</template>

<script>
import markDown from "../../../../components/vue-markdown";
export default {
  data() {
    return {
      mode: 3,
      currentvalue: this.value,
      toolbars: {
        strong: false, // 粗体
        italic: false, // 斜体
        overline: false, // 标题
        h1: false, // 下划线
        h2: false, // 中划线
        h3: false, // 标记
        h4: false, // 上角标
        h5: false, // 下角标
        h6: false, // 引用
        hr: false, // 有序列表
        quote: false, // 无序列表
        ul: false, // 链接
        ol: false, // 图片链接
        code: false, // code
        link: false, // 表格
        image: false, // 全屏编辑
        table: false, // 沉浸式阅读
        checked: false, // 展示html源码
        notChecked: false, // 帮助
        /* 1.3.5 */
        shift: false, // 上一步
        print: false, // 下一步
        theme: false, // 清空
        fullscreen: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        exportmd: false, // 导航目录
        /* 2.1.8 */
        importmd: false, // 左对齐
        aligncenter: false, // 居中
        shift: false,
        preview: false // 预览
      }
    };
  },
  components: {
    "mavon-editor": markDown
  },
  props: {
    initvalue: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    getMarkDownValue() {
      return this.$refs.mavon.value;
    }
  },
  watch: {
    currentvalue(val) {
      this.$emit("input", this.currentvalue);
    }
  }
};
</script>
