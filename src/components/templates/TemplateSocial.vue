<template>
  <div class="font-sans text-sm text-gray-900 bg-white p-5 rounded-lg border border-gray-100 shadow-sm select-none" style="min-width: 360px;">
    
    <div class="flex items-center gap-5">
      <!-- Story Ring Avatar -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="relative shrink-0 cursor-pointer group">
         <div class="absolute -inset-0.5 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-500"></div>
         <img 
           :src="store.profile.avatar" 
           class="w-[70px] h-[70px] object-cover rounded-full border-2 border-white relative bg-white"
         />
      </div>

      <div class="flex-1 min-w-0">
        <!-- Username & Verified -->
        <div class="flex items-center gap-1 mb-0.5">
          <h1 class="text-base font-semibold text-gray-900 truncate">
            {{ store.profile.name.toLowerCase().replace(/\s+/g, '_') }}
          </h1>
          <!-- Verified Badge -->
          <svg v-if="store.config.templateOptions.social.verified" class="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
             <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-4-3.99-4-.85 0-1.63.25-2.28.68C13.68 3.13 12.65 2.5 11.5 2.5c-2.21 0-4 1.79-4 4 0 .93.31 1.79.83 2.47-1.12.62-1.92 1.74-2.07 3.06-.63.22-1.22.56-1.74 1.02-.95.84-1.52 2.05-1.52 3.4 0 2.49 2.01 4.5 4.5 4.5.64 0 1.26-.14 1.83-.39.63.92 1.68 1.54 2.87 1.54 1.21 0 2.27-.63 2.9-1.56.57.25 1.19.39 1.83.39 2.49 0 4.5-2.01 4.5-4.5 0-1.07-.37-2.05-1-2.83.65-.63 1.14-1.4 1.4-2.26.39-.7.62-1.5.62-2.34zm-10.3 3.44-2.12-2.12 1.41-1.41 1.77 1.77 4.24-4.24 1.41 1.41-5.3 5.3z" />
          </svg>
        </div>
        
        <p class="text-[11px] text-gray-500 font-medium mb-3">
          {{ store.profile.role }} <span v-if="store.profile.subRole">| {{ store.profile.subRole }}</span>
        </p>

        <!-- Stats Row -->
        <div class="flex gap-4 text-xs font-semibold text-gray-900 border-t border-gray-50 pt-2 mb-2">
           <div class="text-center">
             <span class="block text-[10px] text-gray-400 font-normal uppercase">Email</span>
             <a :href="'mailto:' + store.profile.email" class="hover:text-blue-500">Send</a>
           </div>
           <div class="text-center" v-if="store.profile.website">
             <span class="block text-[10px] text-gray-400 font-normal uppercase">Link</span>
             <a :href="store.profile.website" target="_blank" class="hover:text-blue-500">Visit</a>
           </div>
           <div class="text-center" v-if="store.customLines.length > 0">
             <span class="block text-[10px] text-gray-400 font-normal uppercase">More</span>
             <span>{{ store.customLines.length }}</span>
           </div>
        </div>

        <!-- Bio / Custom Lines -->
         <div v-if="store.customLines.length > 0" class="space-y-0.5 text-[11px] text-gray-800">
            <div v-for="(line, index) in store.customLines" :key="index" class="flex gap-1 items-baseline">
               <span class="font-bold" :style="{ color: line.labelColor }">{{ line.label }}</span>
               <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:text-blue-600 hover:underline">{{ line.value }}</a>
               <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
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
