<template>
  <div class='timeline'>
    <div
      v-for='(item,index) in listdata'
      class='timelinediv'
      :key="index"
    >
      <p>{{item[time]}}</p>
      <p></p>
      <p>{{item[text]}}</p>
    </div>
    <div class='line'></div>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "Timeline",
  props: {
    listdata: {
      type: Array,
      default() {
        return [];
      }
    },
    time: {
      type: String,
      default() {
        return "time";
      }
    },
    text: {
      type: String,
      default() {
        return "text";
      }
    }
  },
  data() {
    return {
      list: this.$props.listdata
    };
  },
  mounted() {}
};
</script>
<style>
.timeline {
  position: relative;
  margin: 0 auto;
}
.timelinediv {
  position: relative;
  min-height: 60px;
}
.timelinediv > p:nth-child(1) {
  position: absolute;
  left: 0;
  width: 90px;
}
.timelinediv > p:nth-child(2) {
  position: absolute;
  left: 95.5px;
  width: 10px;
  height: 10px;
  top: 4px;
  background: #317ef3;
  border-radius: 50%;
  z-index: 10;
}
.timelinediv > p:nth-child(3) {
  position: absolute;
  left: 110px;
  padding: 2px;
}
.line {
  position: absolute;
  width: 2px;
  height: 100%;
  top: 0;
  left: 100px;
  z-index: 1;
  background-color: #317ef3;
}
</style>
