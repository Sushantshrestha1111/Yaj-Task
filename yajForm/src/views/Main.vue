<template>
  <div
    class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10"
  >
    <!-- Background Image -->
    <div
      class="bg-cover fixed flex justify-center mt-64 items-center bg-center opacity-5"
      style="
        width: 500px;
        z-index: 0;
        height: 345px;
        background-image: url(&quot;/BackGround.svg&quot;);
      "
    ></div>

    <!-- Form Header -->

    <!-- First Form -->
    <div
      v-if="currentStep === 1"
      class="flex flex-col pl-5 justify-center w-full mt-6"
    >
      <div class="flex flex-col items-center">
        <!-- Your first form content -->
        <div
          class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10 overflow-hidden"
        >
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
              class="flex flex-row relative p-5 w-full md:min-w-[855px] justify-center"
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
                

               <div class="flex flex-row ">
                <img 
               class=" -mb-8"
               :src="two" alt="two"/>
               
               </div>
              </div>

              <!-- form Begins from here -->
              <div class="flex flex-col ml-4  md:min-w-[900px]">
                <h1
                  class="text-[#222222] font-satoshi mb-6 text-[24px] font-medium"
                >
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
                          'bg-[#F6F6F6]': !selectState,
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
                          'bg-[#F6F6F6]': !selectDistrict,
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
                      v-model="WardNo"
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
                      v-model="StreetAddress"
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

                 
                  <div
                    class="h-[80px] bg-white border-[#E9E9E9] border-2 border-dashed flex items-center justify-center"
                  >
                    <span class="text-[#444444] text-center"
                      >Drop your file here or click to upload from your
                      computer.</span
                      
                    >
                    <input
                    ref="fileInput"
                    type="file"
                    id="file-upload"
                    class="absolute inset-0 opacity-0 cursor-pointer"
                    
                    @change="handleFileChange"
                  />
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
                <div class="justify-between">
                  <Label class="mb-[12px]" for="ComplaintServivity"
                    >Complaint Servicity
                    <span class="text-red-500">*</span></Label
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

                    <label
                      class="ml-4 font-[16px] text-[#444444]"
                      for="DoNotDisclose"
                      >Do Not Disclose</label
                    >
                  </div>

                  <div class="flex flex-row mb-6 items-center">
                    <input class="h-4 w-4" type="checkbox" />
                    <label
                      class="ml-4 font-[16px] text-[#444444]"
                      for="DoNotDisclose"
                      >Make complainer info hidden</label
                    >
                  </div>

                  <div class="flex flex-row items-center mb-6">
                    <input class="h-4 w-4" type="checkbox" />
                    <label
                      class="ml-4 font-[16px] text-[#444444]"
                      for="DoNotDisclose"
                      >Secure this Complaint with a Password (Required for
                      Tracking) <span class="text-red-500">*</span></label
                    >
                  </div>
                </div>
                <div class="flex items-end justify-end">
                  <Button
                    @click="nextStep"
                    class="bg-[#0F75BC] h-10 p-5 items-center flex justify-center rounded-md text-white"
                    >Proceed to next page</Button
                  >
                </div>
                <h1
                  class="text-[#A0A0A0] font-satoshi -mb-8 text-[24px] font-medium"
                >
                  Personal Details
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Second Form -->
    <div
      v-if="currentStep === 2"
      class="flex flex-col pl-5 justify-center w-full mt-6"
    >
      <div class="flex flex-col pl-5 justify-center w-full">
        <!-- Complain Registration Form -->
        <div class="flex flex-col ml-4 md:min-w-[900px]">
          <div
            class="flex flex-col w-full items-center justify-start bg-blue-50 min-h-screen pt-10"
          >
            <span class="text-2xl">
              <strong
                ><h2 class="text-[32px] font-Satoshi">
                  Complain Registration
                </h2></strong
              >
            </span>

            <div class="flex flex-col pl-5 justify-center w-full mt-6">
              <!-- form Begins from here -->

              <div
                class="flex relative p-5 w-full md:min-w-[855px] justify-center"
              >
                <!-- form Begins from here -->
                <div class="flex flex-col ml-4 md:min-w-[900px]">
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
                          <span class="mt-5 ml-4 text-[24px]"
                            >Personal Details</span
                          >
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
                      v-model="UserName"
                      placeholder="Enter Full Name"
                      class="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <!-- Addresss-->
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

                  <!-- Ward No. -->
                  <div class="flex flex-col mb-[16px]">
                    <span
                      class="font-satoshi text-[#777777] mb-[4px] text-[16px]"
                      >Ward No.</span
                    >

                    <input
                      id="WardNo"
                      type="text"
                      v-model="UserWardNo"
                      placeholder="Enter Ward No."
                      class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <!-- Street Address -->
                  <div class="flex flex-col">
                    <span
                      class="font-satoshi text-[#777777] mb-[4px] text-[16px]"
                      >Street Address</span
                    >

                    <input
                      id="OfficeName"
                      type="text"
                      v-model="UserStreetAddress"
                      placeholder="Enter State Address"
                      class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div class="flex flex-col md:flex mb-4 w-full gap-y-6">
                    <!-- mobile number -->
                  </div>
                  <div class="">
                    <Label
                      class="font-satoshi text-[#777777] mb-[16px] text-[16px]"
                      >Mobile Number <span class="text-red-500">*</span></Label
                    >

                    <input
                      id="Mobile Number"
                      type="text"
                      v-model="MobileNumber"
                      placeholder="Enter Mobile Number"
                      class="block w-full h-[46px] mb-[16px] px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <!-- Email -->
                  <div class="mb-4">
                    <Label
                      class="font-satoshi mb-[4px] text-[#777777] text-[16px]"
                      >Email Email Address</Label
                    >

                    <input
                      id="Email"
                      type="Email"
                      v-model="Email"
                      placeholder="Enter Your Email"
                      class="block w-full h-[46px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>

                  <div class="flex justify-end">
                    <Button
                      @click="prevStep"
                      class="text-blue-500 m-5 h-10 p-2 rounded-md border border-blue-500 bg-white border-blue"
                      >Go Back</Button
                    >

                    <Button
                      class="bg-blue-500 m-5 h-10 p-2 rounded-md text-white"
                      >Submit Form</Button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YellowBanner from "../components/YellowBanner.vue";
import down from "../assets/images/down-arrow.svg";
import check from "../assets/images/check.svg";
import line from "../assets/images/line.svg"
;
import two from "../assets/images/two.svg"
import { ref } from "vue";

const currentStep = ref(1); // Tracks the current form step
const nextStep = () => currentStep.value++;
const prevStep = () => currentStep.value--;

// Dummy Data
const inputValue = ref("");
const selectState = ref("");
const selectedPriority = ref("comfortable");
const states = ref([
  { label: "State 1", value: "option1" },
  { label: "State 2", value: "option2" },
]);
const selectedOption = ref("");

const selectDistrict = ref("");

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
</script>

<style scoped></style>
