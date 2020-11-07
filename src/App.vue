<!-- App.vue -->
<template>
  <div class="row">
    <div class="col-12">
      <div id="nav">
        <router-link :to="{ name: 'Home' }" class="btn btn-info">
          Home
        </router-link>
        |
        <router-link :to="{ name: 'Cats' }" class="btn btn-info">
          Cats</router-link
        >
      </div>
    </div>
    <div class="col-12 bg-light border p-3">
      <div class="row">
        <div class="text-dark text-right col-12">Top-level Router View</div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

