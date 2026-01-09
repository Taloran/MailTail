<template>
  <div class="font-mono text-sm leading-relaxed p-4 bg-[#0000AA] text-white relative overflow-hidden select-none border-4 border-double border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]" style="min-width: 320px; font-family: 'Courier New', Courier, monospace;">
    
    <!-- BIOS Header -->
    <div class="text-center mb-4 text-[#FFFF55]">
       <div>{{ store.config.templateOptions.retro.biosVendor }}</div>
       <div>(C)Copyright {{ store.config.templateOptions.retro.copyRight }}, {{ store.profile.name }} Inc.</div>
    </div>
    
    <div class="flex gap-4 items-start border-white border p-2">
      <!-- Avatar (Pixelated) -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="relative shrink-0 border border-white p-1">
         <img 
           :src="store.profile.avatar" 
           class="w-20 h-20 object-cover grayscale contrast-125"
           style="image-rendering: pixelated;"
         />
      </div>
      
      <div class="flex-1 min-w-0">
        <!-- Main Info -->
        <div class="flex justify-between text-white">
           <span>NAME. . . . . . . . . :</span>
           <span class="text-[#FFFF55]">{{ store.profile.name }}</span>
        </div>
        <div class="flex justify-between text-white">
           <span>ROLE. . . . . . . . . :</span>
           <span class="text-[#FFFF55]">{{ store.profile.role }}</span>
        </div>
        <div v-if="store.profile.subRole" class="flex justify-between text-gray-300">
           <span>SUB_CLASS . . . . . . :</span>
           <span>{{ store.profile.subRole }}</span>
        </div>
        
        <div class="my-2 border-b border-white border-dashed"></div>

        <!-- Contact Info -->
        <div class="space-y-1">
           <div v-if="store.profile.email" class="flex justify-between group">
              <span>EMAIL . . . . . . . . :</span>
              <a :href="'mailto:' + store.profile.email" class="text-white hover:bg-[#FFFF55] hover:text-[#0000AA] px-1 transition-colors">{{ store.profile.email }}</a>
           </div>

           <div v-if="store.profile.mobile" class="flex justify-between">
              <span>PHONE . . . . . . . . :</span>
              <span>{{ store.profile.mobile }}</span>
           </div>

           <div v-if="store.profile.website" class="flex justify-between group">
              <span>WEB . . . . . . . . . :</span>
              <a :href="store.profile.website" target="_blank" class="text-white hover:bg-[#FFFF55] hover:text-[#0000AA]  px-1 transition-colors truncate max-w-[150px]">{{ store.profile.website }}</a>
           </div>
        </div>
      </div>
    </div>

    <!-- Bottom Legend -->
    <div class="mt-4 flex justify-between text-xs text-white">
       <span>F1:Help</span>
       <span>ESC:Exit</span>
    </div>

    <!-- Custom Lines Area -->
    <div v-if="store.customLines.length > 0" class="mt-2 text-xs">
       <div class="text-[#FFFF55] mb-1">POST MAP:</div>
       <div v-for="(line, index) in store.customLines" :key="index" class="flex gap-2">
          <span class="w-4 text-center">OK</span>
          <span class="text-gray-300" :style="{ color: line.labelColor }">[{{ line.label }}]</span>
           <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
           <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
