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
        ><h2 class="text-[32px] text-[#444444] font-Satoshi">
          Complain Registration
        </h2></strong
      >
    </span>

    <div class="flex flex-row justify-center w-full mt-6">
      <!-- form Begins from here -->
      <div
        class="flex flex-row relative p-5 w-full min-w-[855px] justify-center"
      >
        <div class="flex flex-col">
          <div
            class="bg-white border-2 border-blue-500 text-blue-500 flex rounded-full w-9 h-9 items-center justify-center"
          >
            <strong>1</strong>
          </div>
          <div
            class="w-1 h-full items-center justify-center ml-4 bg-blue-100"
          ></div>
          <div
            class="bg-white border-2 border-blue-500 text-blue-500 flex rounded-full w-9 h-9 items-center justify-center"
          >
            <strong>2</strong>
          </div>
        </div>

        <!-- form Begins from here -->
        <div class="flex flex-col ml-4 min-w-[900px]">
          <h1 class="text-[#222222] font-satoshi mb-6 text-[24px] font-medium">
            Complain Details
          </h1>

          <YellowBanner />

          <!-- Nature of problem -->

          <div class="flex flex-col l-0 mb-4 mt-4 r-0 w-full">
            <div class="flex">
              <span class="block mb-1 text-[#777777] font-medium"
                >Nature of Problem </span
              ><span class="text-red-500 ml-1">*</span>
            </div>

            <div class="w-full">
              <div class="relative w-full">
                <select
                  id="options"
                  v-model="selectedOption"
                  class="block w-full px-3 h-[46px] text-[#A0A0A0] pr-10 py-2 border border-[#E9E9E9] bg-white rounded-md appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                  <option class="text-black" disabled value="">
                    Select a Nature of Problem
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
          <!-- Name of Office -->
          <div class="mb-4">
            <span class="text-[#777777] mb-1">Name of Office</span>

            <input
              id="OfficeName"
              type="text"
              v-model="inputValue"
              placeholder="Enter office name"
              class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <!--  office Addresss-->
          <span class="text-[#777777] mb-[8px] font-normal"
            >Office Address:</span
          >
          <div class="flex flex-col md:flex-row mb-4 w-full gap-3">
            <!-- State -->
            <div class="flex flex-col flex-1 gap-x-4">
              <span class="text-gray-400">State</span>
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

          <!-- Ward No -->

          <div class="flex flex-col md:flex-row gap-3 w-full mb-4">
            <!-- Ward No. -->
            <div class="flex flex-col flex-1">
              <span class="text-[#777777]">Ward No.</span>
              <input
                id="WardNo"
                type="text"
                v-model="inputValue"
                placeholder="Enter Ward No."
                class="block w-full px-3 py-2 border h-[46px] border-[#E9E9E9] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <!-- Street Address -->
            <div class="flex flex-col flex-1">
              <span class="text-[#777777]">Street Address</span>
              <input
                id="StreetAddress"
                type="text"
                v-model="inputValue"
                placeholder="Enter Street Address"
                class="block w-full px-3 py-2 border h-[46px] border-[#E9E9E9] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <!-- Related Documents -->
          <div class="mb-4">
            <Label class="text-[#777777] mb-2" for="Description"
              >Delated Document (if any)</Label
            >

            <input
              ref="fileInput"
              type="file"
              id="file-upload"
              class="hidden"
              @change="handleFileChange"
            />
            <div
              class="h-[80px] bg-white border-[#E9E9E9] border-2 border-dashed flex items-center justify-center"
            >
              <span class="text-[#444444] text-center"
                >Drop your file here or click to upload from your
                computer.</span
              >
            </div>
          </div>

          <!-- Brief Description of complaint * -->
          <div class="flex flex-col mb-4">
            <Label class="text-[#777777] mb-2" for="Description"
              >Brief Description of complaint
              <span class="text-red-500">*</span></Label
            >

            <div class="w-full">
              <textarea
                id="message"
                v-model="message"
                placeholder="Enter your complaint"
                class="block w-full px-3 py-2 border h-[120px] border-[#E9E9E9] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-none"
                rows="5"
              ></textarea>
            </div>
          </div>
          <!-- Complaint Servicity -->
          <div class=" justify-between">
            <Label class="mb-[12px]" for="ComplaintServivity"
              >Complaint Servicity <span class="text-red-500">*</span></Label
            >

            <div>
              <div class="flex flex-row mb-[24px] mt-2 gap-x-6 w-full">
                <!-- Common -->
                <div class="flex flex-row items-center flex-1">
                  <input
                    type="radio"
                    id="r1"
                    value="default"
                    v-model="selectedPriority"
                    class="h-4 w-4 text-blue-600 mr-2 border-gray-300 focus:ring-blue-500"
                  />
                  <label for="r1" class="font-[16px] text-[#444444]"
                    >Common</label
                  >
                </div>
                <!-- Important -->
                <div class="flex flex-row items-center flex-1">
                  <input
                    type="radio"
                    id="r2"
                    value="comfortable"
                    v-model="selectedPriority"
                    class="h-4 w-4 mr-2 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label for="r2" class="font-[16px] text-[#444444]"
                    >Important</label
                  >
                </div>
                <!-- Very Important -->
                <div class="flex flex-row items-center flex-1">
                  <input
                    type="radio"
                    id="r3"
                    value="compact"
                    v-model="selectedPriority"
                    class="h-4 w-4 text-blue-600 mr-2 border-gray-300 focus:ring-blue-500"
                  />
                  <label for="r3" class="font-[16px] text-[#444444]"
                    >Very Important</label
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Random checkBox -->

          <div>
            <div class="flex flex-row items-center mb-6">
              <input class="h-4 w-4" type="checkbox" />

              <label class="ml-4 font-[16px] text-[#444444]" for="DoNotDisclose"
                >Do Not Disclose</label
              >
            </div>

            <div class="flex flex-row mb-6 items-center">
              <input class="h-4 w-4" type="checkbox" />
              <label class="ml-4 font-[16px] text-[#444444]" for="DoNotDisclose"
                >Make complainer info hidden</label
              >
            </div>

            <div class="flex flex-row items-center mb-6">
              <input class="h-4 w-4" type="checkbox" />
              <label class="ml-4 font-[16px] text-[#444444]" for="DoNotDisclose"
                >Secure this Complaint with a Password (Required for Tracking)
                <span class="text-red-500">*</span></label
              >
            </div>
          </div>
          <div class="flex items-end justify-end">
            <RouterLink to="/secondform">
              <Button class="bg-blue-500 h-10 p-2 rounded-md text-white"
                >Procede to next page</Button
              >
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
import down from "../assets/images/down-arrow.svg";
</script>

<style scoped></style>
