<template>
  <div class="row">
    <div class="about col-12">
      <h1>Cats</h1>
      <div class="form-group">
        <label for="count">Number of Cats?</label>
        <input id="count" v-model="numberOfCats" type="number" />
        <router-link
          class="btn btn-success"
          :to="{ name: 'CatList', params: { count: numberOfCats } }"
          >Get Cats</router-link
        >
      </div>
      <div class="border bg-secondary p-3 col-12 text-light ">
        <div class="text-right">Child Router View</div>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import state from "@/state";

export default {
  name: "Cats",
  setup() {
    return {
      numberOfCats: state.numberOfCats,
      cats: state.cats,
      getCats: state.getCats,
    };
  },
};
</script>