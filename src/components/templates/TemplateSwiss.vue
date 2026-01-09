<template>
  <div class="font-sans text-sm text-black bg-white p-8 select-none border-t-[8px] border-black relative overflow-hidden" style="min-width: 400px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
    
    <!-- Swiss Grid Layout -->
    <div class="flex gap-8">
       <!-- Col 1: Visual Identity -->
       <div class="w-24 shrink-0 flex flex-col justify-between">
          <div v-if="store.profile.avatar && store.config.showAvatar" class="w-24 h-24 bg-gray-100 mb-4 relative overflow-hidden grayscale">
             <img 
               :src="store.profile.avatar" 
               class="w-full h-full object-cover mix-blend-multiply"
             />
          </div>
          <!-- Swiss Plus Decorative -->
          <div class="w-8 h-8 relative">
             <div class="absolute top-1/2 left-0 w-full h-2 bg-red-600 -translate-y-1/2"></div>
             <div class="absolute top-0 left-1/2 h-full w-2 bg-red-600 -translate-x-1/2"></div>
          </div>
       </div>

       <!-- Col 2: Text Info -->
       <div class="flex-1 min-w-0 pt-1">
          <h1 class="text-4xl font-bold tracking-tighter leading-none mb-1 uppercase">{{ store.profile.name }}</h1>
          
          <div class="flex items-baseline gap-3 border-b-2 border-black pb-4 mb-4">
             <span class="text-base font-bold">{{ store.profile.role }}</span>
             <span class="text-xs font-medium text-gray-500 uppercase tracking-widest">{{ store.config.templateOptions.swiss.department }}</span>
          </div>

          <div class="grid grid-cols-2 gap-x-8 gap-y-2 text-xs font-medium leading-relaxed">
             <div v-if="store.profile.email">
                <span class="block text-[10px] uppercase text-gray-400 font-bold mb-0.5">Contact</span>
                <a :href="'mailto:' + store.profile.email" class="hover:text-red-600 transition-colors">{{ store.profile.email }}</a>
             </div>

             <div v-if="store.profile.website">
                <span class="block text-[10px] uppercase text-gray-400 font-bold mb-0.5">Web</span>
                <a :href="store.profile.website" target="_blank" class="hover:text-red-600 transition-colors">{{ store.profile.website }}</a>
             </div>
             
             <div v-if="store.profile.mobile">
                <span class="block text-[10px] uppercase text-gray-400 font-bold mb-0.5">Phone</span>
                <span>{{ store.profile.mobile }}</span>
             </div>

             <!-- Custom Lines -->
             <div v-if="store.customLines.length > 0" class="col-span-2 mt-2 pt-2 border-t border-gray-100">
                <div class="flex flex-wrap gap-x-4 gap-y-1">
                   <div v-for="(line, index) in store.customLines" :key="index" class="flex gap-1 items-baseline">
                      <span class="font-bold text-gray-400 text-[10px] uppercase" :style="{ color: line.labelColor }">{{ line.label }}</span>
                      <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
                      <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
