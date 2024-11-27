<template>
  <div class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10 overflow-hidden">
    <div
      class="bg-cover flex r mt-64 bg-center opacity-15 absolute"
      style="width: 500px; z-index:0  ;height: 345px; background-image: url('/BackGround.svg');"
    >
   
    
    </div>
    <span class="text-2xl">
    <strong><h2 class="text-[32px] font-Satoshi">Complain Registration </h2></strong>
  </span>

  <div class="flex flex-row justify-center w-full mt-6">
    <!-- form Begins from here -->
    <div
      class="flex flex-row relative p-5 w-full min-w-[855px] justify-center"
    >
      <div class="flex flex-col">
        <div class="bg-white border-2 border-blue-500 text-blue-500 flex -ml-12 rounded-full w-10 h-10 items-center justify-center">
  <strong>1</strong>
</div>

      </div>

      <!-- form Begins from here -->
      <div class="flex flex-col ml-4 w-1/2">
        <h1 class="text-xl mb-6 text-[24px]">
          Complain Details
        </h1>

        <YellowBanner />

        <!-- Nature of problem -->

        <div class="flex flex-col l-0 mb-4 mt-4 r-0 w-full">
         <div class="flex">
          <span class="block mb-2 text-gray-400 font-medium"
            >Nature of Problem  </span
          ><span class="text-red-500">*</span>
         </div>

         <div class="w-full">
          
          <select
            id="options"
            v-model="selectedOption"
            class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option class="text-gray-400" disabled value=""><span>Select a Nature of Problem</span></option>
            <option v-for="option in options" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>
          
        </div>
        </div>
        <!-- Name of Office -->
        <div class="mb-4">
          <span class="text-gray-400 mb-2">Name of Office</span>
         
          <input
          id="OfficeName"
          type="text"
          v-model="inputValue"
          placeholder="Enter Name of Office"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        </div>

        <!--  office Addresss-->
        <span class="text-gray-400 font-normal">Office Address</span>
        <div class="flex flex-col md:flex-row mb-4 w-full">
<!-- State -->
<div class="flex flex-col flex-1 gap-x-4">
  <span class="text-gray-400">State</span>
  <div class="w-full">
          
    <select
      id="options"
      v-model="selectedOption"
      class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option class="text-gray-400" disabled value=""><span>Select State</span></option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    
  </div>
</div>
<!-- District -->
<div class="flex flex-col flex-1 gap-x-4">
  <span class="text-gray-400">District</span>
  <div class="w-full">
          
    <select
      id="options"
      v-model="selectedOption"
      class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option class="text-gray-400" disabled value=""><span>Select District</span></option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    
  </div>
</div>
<!-- Municipality -->
<div class="flex flex-col flex-1 gap-x-4">
  <span class="text-gray-400">Municipality</span>
  <div class="w-full">
          
    <select
      id="options"
      v-model="selectedOption"
      class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    >
      <option class="text-gray-400" disabled value=""><span>Select Muncipility</span></option>
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
    
  </div>
</div>
</div>


        <!-- Ward No -->

        <div class="flex flex-col md:flex-row mb-4 w-full mb-4">
<!-- Ward No. -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">Ward No.</span>
  <input
  id="WardNo"
  type="text"
  v-model="inputValue"
  placeholder="Enter Ward No."
  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
/>
</div>
<!-- Street Address -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">Street Address</span>
  <input
  id="StreetAddress"
  type="text"
  v-model="inputValue"
  placeholder="Enter Street Address"
  class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
/>
</div>
</div>


        <!-- Related Documents -->
        <div class="mb-4">
          <span></span>
        </div>

        <!-- Brief Description of complaint * -->
        <div class="flex flex-col mb-4">
          <Label class="text-gray-400 mb-2" for="Description">Brief Description of complaint <span class="text-red-500">*</span></Label>
          
          <div class="w-full">
            
            <textarea
              id="message"
              v-model="message"
              placeholder="Type your message here"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
              rows="5"
            ></textarea>
            
          </div>
        </div>
        <!-- Complaint Servicity -->
        <div class="mb-4 justify-between">
<Label class="mb-4" for="ComplaintServivity">Complaint Servicity <span class="text-red-500">*</span></Label>


<div>
  
  <div class="flex flex-row mt-4 gap-x-4 w-full">
    <!-- Common -->
    <div class="flex flex-row items-center space-x-2 flex-1">
      <input
        type="radio"
        id="r1"
        value="default"
        v-model="selectedPriority"
        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label for="r1" class="text-sm font-medium text-gray-700">Common</label>
    </div>
    <!-- Important -->
    <div class="flex flex-row items-center space-x-2 flex-1">
      <input
        type="radio"
        id="r2"
        value="comfortable"
        v-model="selectedPriority"
        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label for="r2" class="text-sm font-medium text-gray-700">Important</label>
    </div>
    <!-- Very Important -->
    <div class="flex flex-row items-center space-x-2 flex-1">
      <input
        type="radio"
        id="r3"
        value="compact"
        v-model="selectedPriority"
        class="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
      />
      <label for="r3" class="text-sm font-medium text-gray-700">Very Important</label>
    </div>
  </div>
  
</div>

</div>


        <!-- Random checkBox -->

        <div>
          <div class="flex flex-row items-center mb-4">
           
            <input type="checkbox">
            <label class="ml-4" for="DoNotDisclose">Do Not Disclose</label>
            
          </div>

          <div class="flex flex-row mb-4 items-center ">
            <input type="checkbox">
            <label class="ml-4" for="DoNotDisclose">Make complainer info hidden</label>
          </div>

          <div class="flex flex-row items-center  mb-4">
            <input type="checkbox">
            <label class="ml-4" for="DoNotDisclose"
              >Secure this Complaint with a Password (Required for
              Tracking) <span class="text-red-500">*</span></label
            >
          </div>
        </div>
        <div class="flex items-end justify-end">
          <RouterLink to="/secondform">
            <Button class="bg-blue-500 h-10 p-2 rounded-md text-white">Procede to next page</Button>

          </RouterLink>
          
        </div>
        
        
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import YellowBanner from "../components/YellowBanner.vue";


import { ref } from "vue";
const selectedPriority = ref("comfortable"); // Default value for checkbox

// options ofr select
const selectedOption = ref("");
const options = ref([
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
]);
</script>


<style scoped>

</style>
