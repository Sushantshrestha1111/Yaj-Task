<template>
  <div class="flex bg-yellow-50 h-16 font-bold overflow-hidden text-xl rounded-l-md">
  <div class="w-1 bg-yellow-500 rounded-l-md"></div>

  <!-- center -->
  <div class="flex items-center ml-2 justify-center ">
    <!-- circle -->
    <img :src="noticeIcon" alt="">
    <p class="text-sm ml-2 text-[#ECBC00] font-normal">Note: Kindly provide accurate and detailed information to help us resolve your issue quickly</p>

  </div>
 
</div>

  </template>
  
  <script setup>
  /* No JavaScript logic needed */
  import noticeIcon from "@/assets/images/i-icon.svg"

  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  