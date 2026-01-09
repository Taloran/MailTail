<template>
  <div class="font-serif text-sm text-gray-900 bg-[#f4f1ea] p-4 select-none border-t-4 border-black" style="min-width: 400px; font-family: 'Times New Roman', Times, serif;">
    
    <!-- Masthead -->
    <div class="text-center border-b-2 border-black pb-2 mb-3">
      <h1 class="text-2xl font-bold uppercase tracking-widest">{{ store.config.templateOptions.classic.masthead }}</h1>
      <div class="flex justify-between text-[10px] uppercase font-sans font-bold mt-1 text-gray-600">
         <span>Vol. {{ new Date().getFullYear() }}</span>
         <span>Personal Edition</span>
         <span>Free</span>
      </div>
    </div>

    <div class="flex gap-4 mb-3">
      <!-- Left Column: Main Story (Profile) -->
      <div class="flex-1 border-r border-gray-300 pr-4">
         <h2 class="text-xl font-bold leading-none mb-2">{{ store.profile.name }}</h2>
         <p class="text-xs italic font-medium text-gray-600 mb-3 uppercase border-b border-gray-300 pb-1">
            {{ store.profile.role }} <span v-if="store.profile.subRole">| {{ store.profile.subRole }}</span>
         </p>
         
         <div class="text-[11px] leading-tight text-justify font-sans text-gray-800 space-y-2">
            <p>
               <span class="float-left text-3xl leading-none font-serif mr-1 pt-1 font-bold">A</span>
               <span>{{ store.config.templateOptions.classic.introText.substring(1) }}</span>
            </p>
            <!-- Contact List as 'News Items' -->
            <ul class="list-disc list-inside space-y-0.5 mt-2">
               <li v-if="store.profile.email">
                  <span class="font-bold">Email: </span>
                  <a :href="'mailto:' + store.profile.email" class="hover:underline">{{ store.profile.email }}</a>
               </li>
               <li v-if="store.profile.mobile">
                  <span class="font-bold">Phone: </span>
                  <span>{{ store.profile.mobile }}</span>
               </li>
               <li v-if="store.profile.website">
                  <span class="font-bold">Web: </span>
                  <a :href="store.profile.website" target="_blank" class="hover:underline">{{ store.profile.website }}</a>
               </li>
            </ul>
         </div>
      </div>

      <!-- Right Column: Sidebar (Avatar Only) -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="w-24 shrink-0 flex flex-col gap-3">
         <div class="border border-black p-0.5">
            <img 
              :src="store.profile.avatar" 
              class="w-full aspect-square object-cover grayscale filter contrast-125 sepia-[0.3]"
            />
            <div class="text-[8px] text-center italic mt-0.5 text-gray-500 font-sans">Fig 1. File Photo</div>
         </div>
      </div>
    </div>

    <!-- Footer: Classifieds (Custom Lines) -->
    <div v-if="store.customLines.length > 0" class="border-t-2 border-black pt-2">
       <div class="flex items-baseline gap-2 mb-1">
          <h3 class="text-[10px] font-bold uppercase font-sans bg-black text-white px-1">Classifieds</h3>
          <div class="flex-1 h-px bg-gray-400"></div>
       </div>
       
       <div class="grid grid-cols-2 gap-x-4 gap-y-1">
          <div v-for="(line, index) in store.customLines" :key="index" class="text-[9px] font-sans flex items-baseline gap-1 border-b border-gray-300 pb-0.5 border-dotted last:border-0 odd:last:border-0">
             <span class="font-bold whitespace-nowrap" :style="{ color: line.labelColor }">{{ line.label }}:</span>
             <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline truncate">{{ line.value }}</a>
             <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="truncate">{{ line.value }}</span>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
