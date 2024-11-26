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

    <div class="flex flex-row pl-5 justify-center w-full mt-6">
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
         
         
          <!-- Name of Office -->
          <div class="mb-4">
            <Label class="text-gray-400 mb-4">Full Name <span class="text-red-500">*</span></Label>
            <Input type="text" placeholder="Enter Full Name" />
          </div>

          <!-- Addresss-->
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
<div class="mb-4">
            <Label class="text-gray-400 mb-4">Mobile Number <span class="text-red-500">*</span></Label>
            <Input type="text" placeholder="Enter Mobile Number" />
          </div>
          <div class="mb-4">
            <Label class="text-gray-400 mb-4">Email Email Address</Label>
            <Input type="text" placeholder="Enter Email Address" />
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
  