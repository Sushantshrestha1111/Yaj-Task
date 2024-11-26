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
        <div
          class="bg-blue-100 flex rounded-full w-10 h-10 items-center justify-center"
        >
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

          <Select class="w-full">
            <SelectTrigger
              class="w-full border border-gray-300 bg-white text-gray-800 rounded-lg shadow-sm hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              <SelectValue
                placeholder="Select a nature of problem"
                class="text-sm"
              />
            </SelectTrigger>
            <SelectContent
              class="w-full border border-gray-300 bg-white rounded-lg shadow-lg"
            >
              <SelectGroup>
                <SelectLabel class="text-sm font-semibold text-gray-500"
                  >State Of Problem</SelectLabel
                >
                <SelectItem
                  value="op1"
                  class="text-gray-800 hover:bg-indigo-100 hover:text-indigo-700 focus:ring focus:ring-indigo-200 rounded-md px-2 py-1"
                >
                  op1
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <!-- Name of Office -->
        <div class="mb-4">
          <span class="text-gray-400 mb-4">Name of Office</span>
          <Input type="text" placeholder="Enter office name" />
        </div>

        <!--  office Addresss-->
        <span class="text-gray-400 font-normal">Office Address</span>
        <div class="flex flex-col md:flex-row mb-4 w-full gap-x-4">
<!-- State -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">State</span>
  <Select>
    <SelectTrigger class="w-full">
      <SelectValue placeholder="Select State" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Options</SelectLabel>
        <SelectItem value="1"> op1 </SelectItem>
        <SelectItem value="2"> opt 2 </SelectItem>
        <SelectItem value="3"> opt 3 </SelectItem>
        <SelectItem value="4"> opt 4</SelectItem>
        <SelectItem value="5">opt 5 </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
<!-- District -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">District</span>
  <Select>
    <SelectTrigger class="w-full">
      <SelectValue placeholder="Select a district" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Options</SelectLabel>
        <SelectItem value="1"> op1 </SelectItem>
        <SelectItem value="2"> opt 2 </SelectItem>
        <SelectItem value="3"> opt 3 </SelectItem>
        <SelectItem value="4"> opt 4</SelectItem>
        <SelectItem value="5">opt 5 </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
<!-- Municipality -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">Municipality</span>
  <Select>
    <SelectTrigger class="w-full">
      <SelectValue placeholder="Select a Muncipility" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Options</SelectLabel>
        <SelectItem value="1"> op1 </SelectItem>
        <SelectItem value="2"> opt 2 </SelectItem>
        <SelectItem value="3"> opt 3 </SelectItem>
        <SelectItem value="4"> opt 4</SelectItem>
        <SelectItem value="5">opt 5 </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</div>
</div>


        <!-- Ward No -->

        <div class="flex flex-col md:flex-row mb-4 w-full gap-x-4">
<!-- Ward No. -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">Ward No.</span>
  <Input type="text" placeholder="Enter Ward No." />
</div>
<!-- Street Address -->
<div class="flex flex-col flex-1">
  <span class="text-gray-400">Street Address</span>
  <Input type="text" placeholder="Enter Street Address" />
</div>
</div>


        <!-- Related Documents -->
        <div class="mb-4">
          <span></span>
        </div>

        <!-- Brief Description of complaint * -->
        <div class="flex flex-col mb-4">
          <Label class="text-gray-400 mb-4" for="Description">Brief Description of complaint <span class="text-red-500">*</span></Label>
          <Textarea placeholder="Type your message here." />
        </div>
        <!-- Complaint Servicity -->
        <div class="mb-4 justify-between">
<Label class="mb-4" for="ComplaintServivity">Complaint Servicity <span class="text-red-500">*</span></Label>

<RadioGroup default-value="comfortable">
<div class="flex flex-row mt-4 gap-x-4 w-full">
  <!-- Common -->
  <div class="flex flex-row items-center space-x-2 flex-1">
    <RadioGroupItem id="r1" value="default" />
    <Label for="r1">Common</Label>
  </div>
  <!-- Important -->
  <div class="flex flex-row items-center space-x-2 flex-1">
    <RadioGroupItem id="r2" value="comfortable" />
    <Label for="r2">Important</Label>
  </div>
  <!-- Very Important -->
  <div class="flex flex-row items-center space-x-2 flex-1">
    <RadioGroupItem id="r3" value="compact" />
    <Label for="r3">Very Important</Label>
  </div>
</div>
</RadioGroup>

</div>


        <!-- Random checkBox -->

        <div>
          <div class="flex flex-row items-center mb-4">
            <Checkbox  id="terms" />
            <Label class="ml-4" for="DoNotDisclose">Do Not Disclose</Label>
          </div>

          <div class="flex flex-row mb-4 items-center ">
            <Checkbox id="terms"/>
            <Label class="ml-4" for="DoNotDisclose">Make complainer info hidden</Label>
          </div>

          <div class="flex flex-row items-center  mb-4">
            <Checkbox id="terms" />
            <Label class="ml-4" for="DoNotDisclose"
              >Secure this Complaint with a Password (Required for
              Tracking) <span class="text-red-500">*</span></Label
            >
          </div>
        </div>
        <div class="flex l-0">
          <RouterLink to="/secondform">
            <Button>Procede to next page</Button>

          </RouterLink>
          
        </div>
        
        
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import YellowBanner from "../components/YellowBanner.vue";
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button'
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
</script>


<style scoped>
/* Additional styles specific to this component */
</style>
