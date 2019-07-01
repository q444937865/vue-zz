<template>
  <div id="page">
    {{msg}}
    <Timeline :listdata="details" :time="'tm'" :text="'content'"/>
  </div>
</template>

<script>
import Timeline from "../../component/z/Timeline.vue";

export default {
  name: "page",
  components: {
    Timeline
  },
  data() {
    return {
      msg: "this is page",
      details: [
        { tm: "2019-01-01", content: "内容内容1" },
        { tm: "2019-02-02", content: "内容内容2" }
      ]
    };
  }
};
</script>
