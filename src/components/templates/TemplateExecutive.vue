<template>
  <div class="font-serif text-sm text-gray-900 bg-white select-none shadow-sm relative overflow-hidden" style="min-width: 400px;">
    
    <!-- Top Accent Bar -->
    <div class="h-2 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>

    <div class="p-6 flex gap-6 items-start">
      <!-- Avatar (Optional) -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0 relative">
        <div class="absolute inset-0 bg-slate-100 rounded-full transform translate-x-1 translate-y-1"></div>
        <img 
          :src="store.profile.avatar" 
          class="w-24 h-24 object-cover relative bg-white border border-gray-100"
          :style="{ borderRadius: store.config.avatarRadius }"
        />
      </div>

      <div class="flex-1 min-w-0 pt-1">
        <h1 class="text-2xl font-bold tracking-tight text-slate-900 mb-1">
          {{ store.profile.name }}
        </h1>
        <p class="font-sans text-xs font-semibold text-yellow-600 uppercase tracking-widest mb-4 border-b border-gray-100 pb-3">
          {{ store.profile.role }} <span v-if="store.profile.subRole" class="text-gray-400 font-normal">| {{ store.profile.subRole }}</span>
        </p>

        <!-- Compact Grid Info -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-xs text-gray-600">
          <div v-if="store.profile.email" class="flex items-center gap-2">
            <div class="w-1 h-1 bg-yellow-600 rounded-full"></div>
            <a :href="'mailto:' + store.profile.email" class="hover:text-slate-900 transition-colors">{{ store.profile.email }}</a>
          </div>
          
          <div v-if="store.profile.mobile" class="flex items-center gap-2">
            <div class="w-1 h-1 bg-yellow-600 rounded-full"></div>
            <span>{{ store.profile.mobile }}</span>
          </div>

          <div v-if="store.profile.website" class="flex items-center gap-2 col-span-2">
            <div class="w-1 h-1 bg-yellow-600 rounded-full"></div>
            <a :href="store.profile.website" target="_blank" class="hover:text-slate-900 transition-colors">{{ store.profile.website }}</a>
          </div>
        </div>

        <!-- Custom Lines -->
         <div v-if="store.customLines.length > 0" class="mt-4 pt-3 border-t border-gray-100 font-sans">
            <div v-for="(line, index) in store.customLines" :key="index" class="text-xs flex items-center mb-1">
               <span class="text-slate-400 mr-2 min-w-[60px]" :style="{ color: line.labelColor }">{{ line.label }}</span>
               <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
               <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
            </div>
         </div>
      </div>
    </div>
    
    <!-- Bottom Accent -->
    <div class="h-1 bg-slate-100 mx-6 mb-6"></div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
