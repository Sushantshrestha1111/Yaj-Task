<template>
    <div class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10">
      <div
        class="bg-cover flex justify-center mt-64 items-center bg-center opacity-15 absolute"
        style="width: 500px; z-index:0  ;height: 345px; background-image: url('/BackGround.svg');"
      >
     
      
      </div>
      <span class="text-2xl">
      <strong><h2 class="text-[32px] font-Satoshi">Complain Registration </h2></strong>
    </span>

    <div class="flex flex-col pl-5 justify-center w-full mt-6">
      <!-- form Begins from here -->
      <div class="flex flex-row item">
        <!-- This is the uppercircles -->
         <div class="flex flex-col items-center ">

        <div class="flex flex-row">

          <div class="flex flex-col">
            <!-- circle 1 -->
            <div
            class="bg-blue-100 flex -ml-12 rounded-full w-10 h-10 items-center justify-center"
          >
            <strong>1</strong>
           
          </div>
  
          <!-- line -->
           <div class="w-[2px] h-[20px] mr-12 bg-blue-400"></div>
  
           <!-- circle 2 -->
           <div
            class="bg-blue-100 flex -ml-12 rounded-full w-10 h-10 items-center justify-center"
          >
            <strong>1</strong>
           
          </div>
 
 
          </div>
          <!-- text -->
          <div class="flex flex-col">
           <span class="text-blue-500 ml-4 text-[24px]">Complain Details</span>
         <span class=" mt-5 ml-4 text-[24px]">Personal Details</span>
         </div>
        </div>
        

         </div>

         

         

      </div>
        
      <div
        class="flex relative p-5 w-full min-w-[855px] justify-center"
      >

     

        <!-- form Begins from here -->
        <div class="flex flex-col ml-4 w-1/2">
            
 <div class="flex flex-row mb-4">
            
          
        </div>
       

       
         
          <!-- Name of User -->
          <div class="mb-4">
            <Label class="text-gray-400 mb-4">Full Name <span class="text-red-500">*</span></Label>
            <input
            id="FullName"
            type="text"
            v-model="inputValue"
            placeholder="Enter Full Name"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
            
          </div>

          <!-- Addresss-->
          <div class="flex flex-col md:flex-row mb-4 w-full gap-x-4">
  <!-- State -->
  <div class="flex flex-col flex-1">
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
  <div class="flex flex-col flex-1 ml">
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
  <div class="flex flex-col flex-1">
    <span class="text-gray-400">Municipality</span>
    <div class="w-full">
          
      <select
        id="options"
        v-model="selectedOption"
        class="block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      >
        <option class="text-gray-400" disabled value="">Select Muncipility</option>
        <option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </select>
      
    </div>
  </div>
</div>


          <!-- Ward No -->

          <div class="flex flex-col md:flex mb-4 w-full gap-x-4 gap-y-6">
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
  <div class="flex flex-col flex-1 ">
    <span class="text-gray-400">Street Address</span>
    <input
          id="StateAddress"
          type="text"
          v-model="inputValue"
          placeholder="Enter Streat Address"
          class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
  </div>

</div>
<div class="mb-4">
            <Label class="text-gray-400 mb-4">Mobile Number <span class="text-red-500">*</span></Label>
            <input
            id="MobileNUmber"
            type="text"
            v-model="inputValue"
            placeholder="Enter MobileNumber"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          </div>
          <div class="mb-4">
            <Label class="text-gray-400 mb-4">Email Email Address</Label>
            <input
            id="email"
            type="email"
            v-model="inputValue"
            placeholder="Enter your Email"
            class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          </div>


         

         
        


          <div class="flex justify-end ">

            <RouterLink to="/">
            
              <Button class="text-blue-500 m-5 h-10 p-2 rounded-md bg-white border-blue">Go Back</Button>

            </RouterLink>
            <RouterLink to="/secondform">
              <Button class="bg-blue-500 m-5 h-10 p-2 rounded-md text-white">Procede to next page</Button>
             

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


const selectedOption = ref("");
const options = ref([
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
]);
  import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
  </script>
  
  
  <style scoped>

  </style>
  