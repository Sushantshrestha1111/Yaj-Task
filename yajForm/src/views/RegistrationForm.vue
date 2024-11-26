<template>
  <div class="flex flex-col items-center justify-start min-h-screen pt-10">
    <span class="text-2xl">
      <strong><h2>Complain Registration</h2></strong>
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
        <div class="flex flex-col ml-4">
          <h1 class="text-xl">
            <strong>Complain Details</strong>
          </h1>

          <YellowBanner />

          <!-- Nature of problem -->

          <div class="flex flex-col l-0 mb-4 r-0 w-full">
            <span class="block mb-2 text-gray-700 font-medium"
              >Nature of Problem *</span
            >

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
                    >Fruits</SelectLabel
                  >
                  <SelectItem
                    value="apple"
                    class="text-gray-800 hover:bg-indigo-100 hover:text-indigo-700 focus:ring focus:ring-indigo-200 rounded-md px-2 py-1"
                  >
                    Apple
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <!-- Name of Office -->
          <div class="mb-4">
            <span>Name of Office</span>
            <Input type="text" placeholder="Enter office name" />
          </div>

          <!--  office Addresss-->
          <div class="flex flex-row mb-4 w-full gap-x-4">
  <!-- State -->
  <div class="flex flex-col flex-1">
    <span>State</span>
    <Select>
      <SelectTrigger class="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple"> Apple </SelectItem>
          <SelectItem value="banana"> Banana </SelectItem>
          <SelectItem value="blueberry"> Blueberry </SelectItem>
          <SelectItem value="grapes"> Grapes </SelectItem>
          <SelectItem value="pineapple"> Pineapple </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <!-- District -->
  <div class="flex flex-col flex-1">
    <span>District</span>
    <Select>
      <SelectTrigger class="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple"> Apple </SelectItem>
          <SelectItem value="banana"> Banana </SelectItem>
          <SelectItem value="blueberry"> Blueberry </SelectItem>
          <SelectItem value="grapes"> Grapes </SelectItem>
          <SelectItem value="pineapple"> Pineapple </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
  <!-- Municipality -->
  <div class="flex flex-col flex-1">
    <span>Municipality</span>
    <Select>
      <SelectTrigger class="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple"> Apple </SelectItem>
          <SelectItem value="banana"> Banana </SelectItem>
          <SelectItem value="blueberry"> Blueberry </SelectItem>
          <SelectItem value="grapes"> Grapes </SelectItem>
          <SelectItem value="pineapple"> Pineapple </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>


          <!-- Ward No -->

          <div class="flex flex-row mb-4 w-full gap-x-4">
  <!-- Ward No. -->
  <div class="flex flex-col flex-1">
    <span>Ward No.</span>
    <Input type="text" placeholder="Enter Ward No." />
  </div>
  <!-- Street Address -->
  <div class="flex flex-col flex-1">
    <span>Street Address</span>
    <Input type="text" placeholder="Enter Street Address" />
  </div>
</div>


          <!-- Related Documents -->
          <div class="mb-4">
            <span></span>
          </div>

          <!-- Brief Description of complaint * -->
          <div class="flex flex-col mb-4">
            <Label for="Description">Brief Description of complaint *</Label>
            <Textarea placeholder="Type your message here." />
          </div>
          <!-- Complaint Servicity -->
          <div class="mb-4 justify-between">
  <Label for="ComplaintServivity">Complaint Servicity *</Label>

  <RadioGroup default-value="comfortable">
  <div class="flex flex-row gap-x-4 w-full">
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
            <div class="flex flex-row mb-4">
              <Checkbox class="items-center" id="terms" />
              <Label for="DoNotDisclose">Do Not Disclose</Label>
            </div>

            <div class="flex flex-row mb-4">
              <Checkbox id="terms" />
              <Label for="DoNotDisclose">Make complainer info hidden</Label>
            </div>

            <div class="flex flex-row mb-4">
              <Checkbox id="terms" />
              <Label for="DoNotDisclose"
                >Secure this Complaint with a Password (Required for
                Tracking)*</Label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import YellowBanner from "../components/YellowBanner.vue";
import { Input } from "@/components/ui/input";
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
/* Add any additional styles here if needed */
</style>
