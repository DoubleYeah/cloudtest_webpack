<template>
  <el-container>
    <el-header height="10px">{{input}}</el-header>
    <el-main>
      <div class="baseproperty">
        <el-input v-model="elementname">
          <template slot="prepend">Name:</template>
        </el-input>
        <el-input v-model="comments" placeholder>
          <template slot="prepend">comments:</template>
        </el-input>
      </div>
      <div class="testelementproperty">
        <fieldset>
          <legend>{{input4}}</legend>
          <div class="csvdatasetproperty">
            <el-input v-model="filename">
              <template slot="prepend">Filename:</template>
              <el-button type="primary" slot="append">Browse...</el-button>
            </el-input>
            <el-input v-model="fileEncodinginput" :readonly="editfileencode">
              <template slot="prepend">File encoding:</template>
              <el-select slot="append" v-model="fileEncoding">
                <el-option label="UTF-8" value="UTF-8"></el-option>
                <el-option label="UTF-16" value="UTF-16"></el-option>
                <el-option label="ISO-8859-15" value="ISO-8859-15"></el-option>
                <el-option label="US-ASCII" value="US-ASCII"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="variableNames">
              <template slot="prepend">Variable Names(comma-delimited):</template>
            </el-input>
            <el-input v-model="ignoreFirstLineinput" :readonly="editignorefirstline">
              <template slot="prepend">Ignore first line(only used if Variable Names is not Empty):</template>
              <el-select slot="append" placeholder v-model="ignoreFirstLine">
                <el-option label="True" value="True"></el-option>
                <el-option label="False" value="False"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="delimiter">
              <template slot="prepend">Delimiter(use '\t' for tab):</template>
            </el-input>
            <el-input v-model="quotedDatainput" :readonly="editquotedData">
              <template slot="prepend">Allow quoted data?:</template>
              <el-select slot="append" placeholder v-model="quotedData">
                <el-option label="True" value="True"></el-option>
                <el-option label="False" value="False"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="recycleinput" :readonly="editrecycle">
              <template slot="prepend">Recycle on EOF?:</template>
              <el-select slot="append" placeholder v-model="recycle">
                <el-option label="True" value="True"></el-option>
                <el-option label="False" value="False"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="stopThreadinput" :readonly="editstopThread">
              <template slot="prepend">Stop Thread on EOF?:</template>
              <el-select slot="append" placeholder v-model="stopThread">
                <el-option label="True" value="True"></el-option>
                <el-option label="False" value="False"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
            <el-input v-model="shareModeinput" :readonly="editshareMode">
              <template slot="prepend">Sharing mode:</template>
              <el-select slot="append" placeholder v-model="shareMode">
                <el-option label="All threads" value="shareMode.all"></el-option>
                <el-option label="Current thread group" value="shareMode.group"></el-option>
                <el-option label="Current thread" value="shareMode.thread"></el-option>
                <el-option label="Edit" value="Edit"></el-option>
              </el-select>
            </el-input>
          </div>
        </fieldset>
      </div>
    </el-main>
  </el-container>
</template>


<script>
const sharemode_map = {
  "shareMode.all": "All threads",
  "shareMode.group": "Current thread group",
  "shareMode.thread": "Current thread"
};
export default {
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  name: "CsvDataSetConfig",
  data() {
    return {
      input: "Csv Data Set Config",
      input2: "",
      input3: "User Defined Variables",
      input4: "Configure the Csv Data Source",
      input5: ",",
      pagedata: {},
      elementname: "",
      comments: "",
      filename: "",
      fileEncoding: "",
      fileEncodinginput: "",
      ignoreFirstLine: "False",
      ignoreFirstLineinput: "False",
      quotedData: "False",
      quotedDatainput: "False",
      recycle: "True",
      recycleinput: "True",
      shareMode: "shareMode.all",
      shareModeinput: sharemode_map["shareMode.all"],
      stopThread: "False",
      stopThreadinput: "False",
      variableNames: "",
      delimiter: ",",
      editfileencode: true,
      editignorefirstline: true,
      editquotedData: true,
      editrecycle: true,
      editstopThread: true,
      editshareMode: true
    };
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
      this.delimiter = this.pagedata["data"]["propMap"]["delimiter"]["data"][
        "value"
      ];
      this.fileEncoding = this.pagedata["data"]["propMap"]["fileEncoding"][
        "data"
      ]["value"];
      this.filename = this.pagedata["data"]["propMap"]["filename"]["data"][
        "value"
      ];
      if (
        this.pagedata["data"]["propMap"]["ignoreFirstLine"]["data"]["value"] ==
        true
      ) {
        this.ignoreFirstLine = "True";
      } else if (
        this.pagedata["data"]["propMap"]["ignoreFirstLine"]["data"]["value"] ==
        false
      ) {
        this.ignoreFirstLine = "False";
      } else {
        this.ignoreFirstLine = "Edit";
        this.ignoreFirstLineinput = this.pagedata["data"]["propMap"][
          "ignoreFirstLine"
        ]["data"]["value"];
        this.editignorefirstline = false;
      }
      if (
        this.pagedata["data"]["propMap"]["quotedData"]["data"]["value"] == true
      ) {
        this.quotedData = "True";
      } else if (
        this.pagedata["data"]["propMap"]["quotedData"]["data"]["value"] == false
      ) {
        this.quotedData = "False";
      } else {
        this.quotedData = "Edit";
        this.quotedDatainput = this.pagedata["data"]["propMap"]["quotedData"][
          "data"
        ]["value"];
        this.editquotedData = false;
      }
      if (
        this.pagedata["data"]["propMap"]["recycle"]["data"]["value"] == true
      ) {
        this.recycle = "True";
      } else if (
        this.pagedata["data"]["propMap"]["recycle"]["data"]["value"] == false
      ) {
        this.recycle = "False";
      } else {
        this.recycle = "Edit";
        this.recycleinput = this.pagedata["data"]["propMap"]["recycle"]["data"][
          "value"
        ];
        this.editrecycle = false;
      }
      if (
        this.pagedata["data"]["propMap"]["shareMode"]["data"]["value"] in
        sharemode_map
      ) {
        this.shareMode = this.pagedata["data"]["propMap"]["shareMode"]["data"][
          "value"
        ];
      } else {
        this.shareMode = "Edit";
        this.shareModeinput = this.pagedata["data"]["propMap"]["recycle"][
          "data"
        ]["value"];
        this.editshareMode = false;
      }
      if (
        this.pagedata["data"]["propMap"]["stopThread"]["data"]["value"] == true
      ) {
        this.stopThread = "True";
      } else if (
        this.pagedata["data"]["propMap"]["stopThread"]["data"]["value"] == false
      ) {
        this.stopThread = "False";
      } else {
        this.stopThread = "Edit";
        this.stopThreadinput = this.pagedata["data"]["propMap"]["stopThread"][
          "data"
        ]["value"];
        this.editstopThread = false;
      }
      this.variableNames = this.pagedata["data"]["propMap"]["variableNames"][
        "data"
      ]["value"];
    },
    commitdata() {
      this.pagedata["data"]["propMap"]["TestElement.name"]["data"][
        "value"
      ] = this.elementname;
      if (this.pagedata["data"]["propMap"]["TestPlan.comments"] != undefined) {
        this.pagedata["data"]["propMap"]["TestPlan.comments"]["data"][
          "value"
        ] = this.comments;
      } else {
        this.pagedata["data"]["propMap"]["TestPlan.comments"] = {
          type: "org.apache.jmeter.testelement.property.StringProperty",
          data: {
            value: this.comments,
            name: "TestPlan.comments"
          }
        };
      }
      this.pagedata["data"]["propMap"]["delimiter"]["data"][
        "value"
      ] = this.delimiter;
      this.pagedata["data"]["propMap"]["fileEncoding"]["data"][
        "value"
      ] = this.fileEncoding;
      this.pagedata["data"]["propMap"]["filename"]["data"][
        "value"
      ] = this.filename;
      if (this.ignoreFirstLine == "True") {
        this.pagedata["data"]["propMap"]["ignoreFirstLine"]["data"][
          "value"
        ] = true;
      } else if (this.ignoreFirstLine == "False") {
        this.pagedata["data"]["propMap"]["ignoreFirstLine"]["data"][
          "value"
        ] = false;
      } else {
        this.pagedata["data"]["propMap"]["ignoreFirstLine"]["data"][
          "value"
        ] = this.ignoreFirstLineinput;
      }
      if (this.quotedData == "True") {
        this.pagedata["data"]["propMap"]["quotedData"]["data"]["value"] = true;
      } else if (this.quotedData == "False") {
        this.pagedata["data"]["propMap"]["quotedData"]["data"]["value"] = false;
      } else {
        this.pagedata["data"]["propMap"]["quotedData"]["data"][
          "value"
        ] = this.quotedDatainput;
      }
      if (this.recycle == "True") {
        this.pagedata["data"]["propMap"]["recycle"]["data"]["value"] = true;
      } else if (this.recycle == "False") {
        this.pagedata["data"]["propMap"]["recycle"]["data"]["value"] = false;
      } else {
        this.pagedata["data"]["propMap"]["recycle"]["data"][
          "value"
        ] = this.recycleinput;
      }
      if (this.shareMode == "Edit") {
        this.pagedata["data"]["propMap"]["shareMode"]["data"][
          "value"
        ] = this.shareModeinput;
      } else {
        this.pagedata["data"]["propMap"]["recycle"]["data"][
          "value"
        ] = this.sharemode;
      }
      if (this.stopThread == "True") {
        this.pagedata["data"]["propMap"]["stopThread"]["data"]["value"] = true;
      } else if (this.stopThread == "False") {
        this.pagedata["data"]["propMap"]["stopThread"]["data"]["value"] = false;
      } else {
        this.pagedata["data"]["propMap"]["stopThread"]["data"][
          "value"
        ] = this.stopThreadinput;
      }
      this.pagedata["data"]["propMap"]["variableNames"]["data"][
        "value"
      ] = this.variableNames;
    }
  },
  beforeMount() {
    this.getContentData();
  },
  watch: {
    fileEncoding(val) {
      if (val == "Edit") {
        this.editfileencode = false;
        this.fileEncodinginput = "${}";
      } else {
        this.editfileencode = true;
        this.fileEncodinginput = this.fileEncoding;
      }
    },
    ignoreFirstLine(val) {
      if (val == "Edit") {
        this.editignorefirstline = false;
        this.ignoreFirstLineinput = "${}";
      } else {
        this.editignorefirstline = true;
        this.ignoreFirstLineinput = this.ignoreFirstLine;
      }
    },
    quotedData(val) {
      if (val == "Edit") {
        this.editquotedData = false;
        this.quotedDatainput = "${}";
      } else {
        this.editquotedData = true;
        this.quotedDatainput = this.quotedData;
      }
    },
    recycle(val) {
      if (val == "Edit") {
        this.editrecycle = false;
        this.recycleinput = "${}";
      } else {
        this.editrecycle = true;
        this.recycleinput = this.recycle;
      }
    },
    stopThread(val) {
      if (val == "Edit") {
        this.editstopThread = false;
        this.stopThreadinput = "${}";
      } else {
        this.editstopThread = true;
        this.stopThreadinput = this.stopThread;
      }
    },
    shareMode(val) {
      if (val == "Edit") {
        this.editshareMode = false;
        this.shareModeinput = "";
      } else {
        this.editshareMode = true;
        this.shareModeinput = sharemode_map[this.shareMode];
      }
    }
  }
};
</script>

<style scoped>
.el-header {
  font-size: 1.5em;
  text-align: left;
  font-weight: bold;
  margin-top: 0.5em;
}
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
</style>
