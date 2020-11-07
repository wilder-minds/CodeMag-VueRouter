<template>
  <div class="row">
    <div class="col-12">
      <button class="btn btn-secondary" @click="onBack">&lt; Back</button>
      <div>Count: {{ count }}</div>
      <div class="row">
        <div class="col-3" v-for="c in cats" :key="c">
          <router-link :to="{ name: 'Cat', params: { url: c.url } }"
            ><img :src="c.url" class="img-fluid img-thumbnail"
          /></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import state from "@/state";
import { onMounted } from "vue";
import router from "@/router";

export default {
  props: {
    count: { required: true },
  },
  setup(props) {
    
    onMounted(async () => await state.getCats(props.count));

    function onBack() {
      console.log("Going Back...");
      router.back();
    }
    return {
      cats: state.cats,
      onBack
    };
  },
};
</script>