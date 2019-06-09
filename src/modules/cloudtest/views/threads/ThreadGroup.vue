<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments" placeholder>
          <template slot="prepend">Comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset class="threadActionproperty">
          <legend>{{input3}}</legend>
          <el-radio-group v-model="radio">
            <el-radio label="continue">Continue</el-radio>
            <el-radio label="startnextloop">Start Next Thread Loop</el-radio>
            <el-radio label="stopthread">Stop Thread</el-radio>
            <el-radio label="stoptest">Stop Test</el-radio>
            <el-radio label="stoptestnow">Stop Test Now</el-radio>
          </el-radio-group>
        </fieldset>
        <fieldset class="threadproperty">
          <legend>{{input4}}</legend>
          <el-input v-model="numthreads">
            <template slot="prepend">{{input7}}</template>
          </el-input>
          <el-input v-model="ramp_time">
            <template slot="prepend">{{input8}}</template>
          </el-input>
          <el-input v-model="loopcount" v-bind:disabled="loopdisable">
            <template slot="prepend">{{input9}}</template>
            <template>
              <el-checkbox
                label="Forever"
                slot="prepend"
                v-model="forever"
                @change="foreverselected"
              ></el-checkbox>
            </template>
          </el-input>
          <div style="text-align:left">
            <el-checkbox label="Delay Thread Until needed" v-model="delayedStartup"></el-checkbox>
            <br>
            <el-checkbox label="Sheduler" v-model="is_scheduler" @change="schedulerselected"></el-checkbox>
            <br>
          </div>
        </fieldset>
        <fieldset class="shedulerproperty">
          <legend>{{input10}}</legend>
          <el-input v-model="duration" v-bind:disabled="scheduler_selected">
            <template slot="prepend">Duration(seconds)</template>
          </el-input>
          <el-input v-model="delay" v-bind:disabled="scheduler_selected">
            <template slot="prepend">Startup Delay(seconds)</template>
          </el-input>
        </fieldset>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "ThreadGroup",
  data() {
    return {
      input: "Thread Group",
      input2: "",
      input3: "Action to be taken after a Sampler error",
      input4: "Thread Properties",
      input5: "",
      input6: "1",
      input7: "Number of Threads(users):",
      input8: "Ramp-up period(in seconds):",
      input9: "Loop Count:",
      input10: "Sheduler Configuration",
      pagedata: {},
      elementname: "",
      comments: "",
      numthreads: 1,
      ramp_time: 1,
      is_scheduler: false,
      duration: "",
      delay: "",
      forever: false,
      loopcount: "",
      radio: "",
      loopdisable: false,
      scheduler_selected: false,
      delayedStartup: false
    };
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.getContentData();
  },
  methods: {
    getContentData() {
      //var urldata = this.$route.query
      //this.pagedata = JSON.parse(urldata.content)
      // props获取来自父控件的数据
      this.pagedata = this.content.content;
      this.elementname = this.pagedata["data"]["propMap"]["TestElement.name"][
        "data"
      ]["value"];
      if (this.pagedata["data"]["propMap"]["TestPlan.comments"] == undefined) {
        this.comments = "";
      } else {
        this.comments = this.pagedata["data"]["propMap"]["TestPlan.comments"][
          "data"
        ]["value"];
      }
      this.delayedStartup = this.pagedata["data"]["delayedStartup"];
      this.numthreads = this.pagedata["data"]["propMap"][
        "ThreadGroup.num_threads"
      ]["data"]["value"];
      this.ramp_time = this.pagedata["data"]["propMap"][
        "ThreadGroup.ramp_time"
      ]["data"]["value"];
      this.duration = this.pagedata["data"]["propMap"]["ThreadGroup.duration"][
        "data"
      ]["value"];
      this.delay = this.pagedata["data"]["propMap"]["ThreadGroup.delay"][
        "data"
      ]["value"];
      this.is_scheduler = this.pagedata["data"]["propMap"][
        "ThreadGroup.scheduler"
      ]["data"]["value"];
      this.forever = this.pagedata["data"]["propMap"][
        "ThreadGroup.main_controller"
      ]["data"]["value"]["data"]["propMap"]["LoopController.continue_forever"][
        "data"
      ]["value"];
      if (this.forever == true) {
        this.loopdisable = true;
      }
      this.loopcount = this.pagedata["data"]["propMap"][
        "ThreadGroup.main_controller"
      ]["data"]["value"]["data"]["propMap"]["LoopController.loops"]["data"][
        "value"
      ];
      this.radio = this.pagedata["data"]["propMap"][
        "ThreadGroup.on_sample_error"
      ]["data"]["value"];
      if (this.is_scheduler == false) {
        this.scheduler_selected = true;
      }
    },
    foreverselected(data) {
      if (data == true) {
        this.loopcount = "";
        this.loopdisable = true;
      } else {
        this.loopdisable = false;
      }
    },
    schedulerselected(data) {
      if (data == true) {
        this.scheduler_selected = false;
      } else {
        this.duration = "";
        this.delay = "";
        this.scheduler_selected = true;
      }
    }
  }
};
</script>

<style scoped>
.el-main {
  margin-top: 10px;
}
div .baseproperty {
}
div .testelementproperty {
  text-align: center;
}
fieldset legend {
  text-align: left;
}
.el-checkbox-group {
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
</style>