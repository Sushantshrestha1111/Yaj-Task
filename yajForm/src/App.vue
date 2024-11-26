<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <div class="flex flex-col ">
  <div class="bg-red-500">hello all</div>
  <div class="mt-12">
    <RouterView/>

  </div>
 

 </div>
 






</template>

<style scoped>
.app-container {
  background-color: #f5f5f5; /* Set the background color to white */
  min-height: 100vh;      /* Ensure it covers the full viewport height */
}
</style>