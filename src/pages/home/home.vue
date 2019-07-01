<template>
  <div id="home" class="main scrollbar">{{msg}}
    <div style="height:400px;">

    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "this is home"
    };
  }
};
</script>
<style>
.main {
  height: 200px;
  overflow-y: auto;
}
/*自定义滚动条*/
.scrollbar {
  overflow-y: auto;
}
.scrollbar::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(217, 217, 217, 0.3);
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: rgba(45, 45, 45, 0.3);
  border-radius: 6px;
}
.scrollbar::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(217, 217, 217, 0.3); */
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
