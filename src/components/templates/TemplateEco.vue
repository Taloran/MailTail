<template>
  <div class="font-sans text-sm text-[#556B2F] bg-[#F5F7F0] p-6 rounded-2xl select-none relative overflow-hidden" style="min-width: 380px;">
    
    <!-- Organic Shape Background -->
    <div class="absolute -top-10 -right-10 w-32 h-32 bg-[#8FBC8F] rounded-full opacity-20 blur-xl"></div>
    <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#D2B48C] rounded-full opacity-20 blur-xl"></div>

    <div class="relative z-10 flex gap-5 items-center">
      <!-- Avatar -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0 relative">
        <div class="absolute inset-0 bg-[#8FBC8F] rounded-full transform scale-105 opacity-50"></div>
        <img 
          :src="store.profile.avatar" 
          class="w-20 h-20 object-cover rounded-full border-2 border-white relative z-10 shadow-sm"
        />
        <!-- Leaf Icon Decor -->
        <div class="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-sm z-20">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-[#556B2F]" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
           </svg>
        </div>
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-start">
           <div>
              <h1 class="text-xl font-bold text-[#2E3B1F] tracking-tight">{{ store.profile.name }}</h1>
              <p class="text-xs font-medium text-[#6B8E23] mt-0.5">{{ store.profile.role }}</p>
           </div>
           <!-- Eco Badge -->
           <div class="text-[9px] font-bold text-[#556B2F] border border-[#8FBC8F] px-2 py-0.5 rounded-full bg-white/50 backdrop-blur-sm">
              {{ store.config.templateOptions.eco.tagline }}
           </div>
        </div>

        <div class="mt-4 space-y-1.5 text-xs">
          <div v-if="store.profile.email" class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#8FBC8F]"></span>
            <a :href="'mailto:' + store.profile.email" class="hover:text-[#2E3B1F] hover:underline transition-colors decoration-[#8FBC8F]">{{ store.profile.email }}</a>
          </div>
          
          <div v-if="store.profile.website" class="flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-[#8FBC8F]"></span>
             <a :href="store.profile.website" target="_blank" class="hover:text-[#2E3B1F] hover:underline transition-colors decoration-[#8FBC8F]">{{ store.profile.website }}</a>
          </div>

          <!-- Custom Lines -->
         <div v-if="store.customLines.length > 0" class="flex flex-wrap gap-x-3 gap-y-1 mt-2 pt-2 border-t border-[#8FBC8F]/30">
            <div v-for="(line, index) in store.customLines" :key="index" class="flex items-center gap-1.5">
               <span class="text-[10px] font-bold opacity-80" :style="{ color: line.labelColor }">{{ line.label }}</span>
               <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline opacity-90">{{ line.value }}</a>
               <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="opacity-90">{{ line.value }}</span>
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
