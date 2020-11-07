<template>
  <div>
    <!-- <router-link to="/cats" class="btn btn-primary btn-sm">&lt; Back</router-link> -->
    <button @click="$router.back()" class="btn btn-primary btn-sm">
      &lt; Back
    </button>
    <img :src="$route.params.url" class="img-fluid img-thumbnail w-100" />
  </div>
</template>

<script>
export default {
  name: "Cat",
};
</script>