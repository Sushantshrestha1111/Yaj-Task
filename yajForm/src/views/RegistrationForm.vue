<template>
    <div class="flex flex-col items-center justify-start min-h-screen pt-10">
      <span class="text-2xl">
        <strong><h2>Complain Registration</h2></strong>
      </span>
  
      <div class="flex flex-row pl-5 items-start w-full mt-6">
        <div>
            <div class="rounded-full h-10 w-10 border-blue-500 flex bg-slate-50 items-center justify-center">1</div>
        </div>

        <!-- form Begins from here -->
        <div class="flex flex-col  ml-16 p-5 w-full items-start">
            <h1 class="text-xl">
                <strong>Complain Details</strong>
              </h1>
            <div> 
                
                  <YellowBanner />

                  <!-- Nature of problem -->

                  <div class=" flex flex-col l-0  r-0 w-full">
                    <span class="block mb-2 text-gray-700 font-medium">Nature of Problem *</span>
                  
                    <Select class="w-full">
                      <SelectTrigger class="w-full border border-gray-300 bg-white text-gray-800 rounded-lg shadow-sm hover:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                        <SelectValue placeholder="Select a nature of problem" class="text-sm" />
                      </SelectTrigger>
                      <SelectContent class="w-full border border-gray-300 bg-white rounded-lg shadow-lg">
                        <SelectGroup>
                          <SelectLabel class="text-sm font-semibold text-gray-500">Fruits</SelectLabel>
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
                  <div>
                    <span>Name of Office</span>
                    <Input type="text" placeholder="Enter office name" />
                  </div>
                  
                  <!--  office Addresss-->

                  <div class="flex flex-row">
                    <!-- State -->
                    <div class="flex flex-col">
                        <span>State</span>
                        <Select>
                            <SelectTrigger class="w-[180px]">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">
                                  Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">
                                  Grapes
                                </SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>

                    </div>
                    <!-- District -->
                    <div flex flex-col>
                        <span>District</span>
                        <Select>
                            <SelectTrigger class="w-[180px]">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">
                                  Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">
                                  Grapes
                                </SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                    </div>
                    <!-- Muncipality -->
                    <div flex flex-col>
                        <span>Muncipality</span>
                        <Select>
                            <SelectTrigger class="w-[180px]">
                              <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">
                                  Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                  Banana
                                </SelectItem>
                                <SelectItem value="blueberry">
                                  Blueberry
                                </SelectItem>
                                <SelectItem value="grapes">
                                  Grapes
                                </SelectItem>
                                <SelectItem value="pineapple">
                                  Pineapple
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                    </div>
                  </div>

                  <!-- Ward No -->

                  <div class="flex flex-row">
                    <div class="flex flex-col">
                        <span>Ward No.</span>
                        <Input type="text" placeholder="Enter Ward No." />
                    </div>
                    
                    <div class="flex flex-col">
                        <span>Street Address.</span>
                        <Input type="text" placeholder="Enter street Address" />
                    </div>
                  </div>

<!-- Related Documents -->
                  <div>
                    <span></span>
                  </div>

                  <!-- Brief Description of complaint * -->
                   <div class="flex flex-col">
                    <Label for="Description">Brief Description of complaint *</Label>
                    <Textarea placeholder="Type your message here." />

                   </div>



                

            </div>
        </div>

        
        
      </div>
    </div>
  </template>
  
  <script setup>
  import YellowBanner from "../components/YellowBanner.vue";
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
  import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>
  