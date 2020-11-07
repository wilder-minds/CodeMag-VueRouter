<template>
  <div class="home">
    <h3>Cats</h3>
    <div><img :src="catUrl" class="img-fluid img-thumbnail" /></div>
    <button class="btn btn-success" @click="getCat">More?</button>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import state from "@/state";

export default {
  name: "Home",
  setup() {

    if (!state.catUrl.value) state.getCat();

    return { 
      catUrl: state.catUrl, 
      getCat: state.getCat 
    };
  },
};
</script>
