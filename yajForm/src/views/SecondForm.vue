<template>
  <div
    class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10 overflow-hidden"
  >
    <div
      class="bg-cover flex justify-center mt-64 items-center bg-center opacity-5 absolute"
      style="
        width: 500px;
        z-index: 0;
        height: 345px;
        background-image: url(&quot;/BackGround.svg&quot;);
      "
    ></div>
    <span class="text-2xl">
      <strong
        ><h2 class="text-[32px] font-Satoshi">Complain Registration</h2></strong
      >
    </span>

    <div class="flex flex-col pl-5 justify-center w-full mt-6">
      <!-- form Begins from here -->

      <div class="flex relative p-5 w-full min-w-[900px] justify-center">
        <!-- form Begins from here -->
        <div class="flex flex-col ml-4 min-w-[900px]">
          <div class="flex flex-row items-center">
            <!-- This is the uppercircles -->
            <div class="flex flex-col items-center">
              <div class="flex flex-row">
                <div class="flex flex-col">
                  <!-- circle 1 -->
                  <div
                    class="bg-blue-500 flex -ml-12 rounded-full w-9 h-9 items-center justify-center"
                  >
                    <img :src="check" alt="check" />
                  </div>

                  <!-- line -->
                  <div class="w-[2px] h-[20px] -ml-8 bg-blue-200"></div>

                  <!-- circle 2 -->
                  <div
                    class="bg-white text-blue-500 border border-blue-500 flex -ml-12 rounded-full w-9 h-9 items-center justify-center"
                  >
                    <strong>2</strong>
                  </div>
                </div>
                <!-- text -->
                <div class="flex flex-col">
                  <span class="text-blue-500 ml-4 text-[24px]"
                    >Complain Details</span
                  >
                  <span class="mt-5 ml-4 text-[24px]">Personal Details</span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col mb-4"></div>

          <!-- Name of User -->
          <div class="mb-4">
            <Label class="font-satoshi text-[#777777] text-[16px] mb-4"
              >Full Name <span class="text-red-500">*</span></Label
            >
            <input
              id="FullName"
              type="text"
              v-model="inputValue"
              placeholder="Enter Full Name"
              class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <!-- Addresss-->
          <div class="flex flex-col md:flex-row mb-4 w-full gap-3">
            <!-- State -->
            <div class="flex flex-col flex-1 gap-x-4">
              <span class="text-gray-400 mb-[8px]">State</span>
              <div class="relative w-full">
                <select
                  id="options"
                  v-model="selectState"
                  class="block w-full px-3 h-[46px] text-[#A0A0A0] pr-10 py-2 border border-[#E9E9E9] bg-white rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option class="text-black" disabled value="">
                    Select State
                  </option>
                  <option
                    v-for="option in states"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <!-- Custom arrow -->
                <span
                  class="absolute inset-y-0 right-3 flex text-[#444444] items-center pointer-events-none"
                >
                  <img :src="down" alt="" />
                </span>
              </div>
            </div>

            <!-- District -->
            <div class="flex flex-col flex-1 gap-x-4">
              <span class="text-gray-400">District</span>
              <div class="relative w-full">
                <select
                  id="district"
                  v-model="selectDistrict"
                  :disabled="!selectState"
                  :class="{
                    'bg-gray-200': !selectState,
                    'block w-full px-3 h-[46px] text-[#A0A0A0] pr-10 py-2 border border-[#E9E9E9] bg-white rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm': true,
                  }"
                >
                  <option class="text-black" disabled value="">
                    Select District
                  </option>
                  <option
                    v-for="option in district"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <!-- Custom arrow -->
                <span
                  class="absolute inset-y-0 right-3 flex text-[#444444] items-center pointer-events-none"
                >
                  <img :src="down" alt="" />
                </span>
              </div>
            </div>

            <!-- Municipality -->
            <div class="flex flex-col flex-1 gap-x-4">
              <span class="text-gray-400">Select Municipality</span>
              <div class="relative w-full">
                <select
                  id="municipality"
                  v-model="selectedOption"
                  :disabled="!selectDistrict"
                  :class="{
                    'bg-gray-200': !selectDistrict,
                    'block w-full px-3 h-[46px] text-[#A0A0A0] pr-10 py-2 border border-[#E9E9E9] bg-white rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm': true,
                  }"
                >
                  <option class="text-black" disabled value="">
                    Select Municipality
                  </option>
                  <option
                    v-for="option in options"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
                <!-- Custom arrow -->
                <span
                  class="absolute inset-y-0 right-3 flex text-[#444444] items-center pointer-events-none"
                >
                  <img :src="down" alt="" />
                </span>
              </div>
            </div>
          </div>

         
            <!-- Ward No. -->
            <div class="flex flex-col mb-[16px]">
              <span class="font-satoshi text-[#777777] text-[16px]"
                >Ward No.</span
              >

              <input
                id="WardNo"
                type="text"
                v-model="inputValue"
                placeholder="Enter Ward No."
                class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <!-- Street Address -->
            <div class="flex flex-col">
              <span class="font-satoshi text-[#777777] mb-[8px] text-[16px]"
                >Street Address</span
              >

              <input
                id="OfficeName"
                type="text"
                v-model="inputValue"
                placeholder="Enter State Address"
                class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>

          <div class="flex flex-col md:flex mb-4 w-full gap-y-6">
           

            <!-- mobile number -->
          </div>
          <div class="">
            <Label class="font-satoshi text-[#777777] mb-[8px] text-[16px]"
              >Mobile Number <span class="text-red-500">*</span></Label>

            <input
              id="Mobile Number"
              type="text"
              v-model="inputValue"
              placeholder="Enter Mobile Number"
              class="block w-full h-[46px] mb-[16px] px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <!-- Email -->
          <div class="mb-4">
            <Label class="font-satoshi mb-[8px] text-[#777777] text-[16px]"
              >Email Email Address</Label
            >

            <input
              id="Email"
              type="Email"
              v-model="inputValue"
              placeholder="Enter Your Email"
              class="block w-full h-[46px] px-3  py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div class="flex justify-end">
            <RouterLink to="/">
              <Button
                class="text-blue-500 m-5 h-10 p-2 rounded-md border border-blue-500 bg-white border-blue"
                >Go Back</Button
              >
            </RouterLink>
            <RouterLink to="/secondform">
              <Button class="bg-blue-500 m-5 h-10 p-2 rounded-md text-white"
                >Submit Form</Button
              >
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


import down from "../assets/images/down-arrow.svg";
import check from "../assets/images/check.svg";

import { ref } from "vue";

const selectedOption = ref("");
const selectState = ref("");
const selectDistrict = ref("");
const states = ref([
  { label: "state 1", value: "option1" },
  { label: "state2", value: "option2" },
  { label: "Option 3", value: "option3" },
]);
const options = ref([
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
]);

const district = ref([
  { label: "Option 1", value: "dis1" },
  { label: "Option 2", value: "dis2" },
  { label: "Option 3", value: "dis3" },
]);
// import { CheckIcon } from '@heroicons/vue/solid'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck);
</script>

<style scoped></style>
