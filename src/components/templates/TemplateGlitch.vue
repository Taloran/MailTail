<template>
  <div class="font-mono text-sm leading-relaxed p-4 bg-black text-green-400 relative overflow-hidden select-none" style="min-width: 320px;">
    <!-- Scanlines -->
    <!-- Scanlines (Optimized: Hidden unless hovered to save GPU) -->
    <div class="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
         style="background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); background-size: 100% 2px, 3px 100%;">
    </div>
    
    <div class="relative z-20 flex items-start gap-4">
      <!-- Glitched Avatar -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="relative shrink-0">
         <img 
           :src="store.profile.avatar" 
           class="w-20 h-20 object-cover grayscale contrast-125 border-2 border-green-500"
           :style="{ borderRadius: store.config.avatarRadius }"
         />
         <div class="absolute inset-0 border-2 border-red-500 opacity-0 group-hover:opacity-50 translate-x-[2px] mix-blend-screen transition-opacity" :style="{ borderRadius: store.config.avatarRadius }"></div>
         <div class="absolute inset-0 border-2 border-blue-500 opacity-0 group-hover:opacity-50 translate-x-[-2px] mix-blend-screen transition-opacity" :style="{ borderRadius: store.config.avatarRadius }"></div>
      </div>
      
      <div class="flex-1 space-y-1">
        <h1 class="text-xl font-bold uppercase tracking-widest relative inline-block">
          <span class="relative z-10">{{ store.profile.name }}</span>
          <span class="absolute top-0 left-0 -ml-[2px] text-red-500 opacity-0 group-hover:opacity-70 mix-blend-screen group-hover:animate-pulse transition-opacity">{{ store.profile.name }}</span>
          <span class="absolute top-0 left-0 ml-[2px] text-blue-500 opacity-0 group-hover:opacity-70 mix-blend-screen group-hover:animate-pulse transition-opacity">{{ store.profile.name }}</span>
        </h1>
        <p class="text-xs uppercase tracking-widest text-pink-500 bg-pink-500/10 inline-block px-1">
          // {{ store.profile.role }}
          {{ store.profile.subRole ? ` > ${store.profile.subRole}` : '' }}
        </p>
        
        <div class="mt-3 text-xs space-y-0.5 opacity-80">
          <div v-if="store.profile.email" class="flex items-center gap-2">
            <span class="text-gray-500">>></span> 
            <a :href="'mailto:' + store.profile.email" class="hover:bg-green-400 hover:text-black transition-colors">{{ store.profile.email }}</a>
          </div>
          <div v-if="store.mobile" class="flex items-center gap-2">
            <span class="text-gray-500">>></span>
            <span>{{ store.mobile }}</span>
          </div>
          <div v-if="store.profile.website" class="flex items-center gap-2">
            <span class="text-gray-500">>></span>
            <a :href="store.profile.website" target="_blank" class="underline decoration-dotted">{{ store.profile.website }}</a>
          </div>
        </div>

        <!-- Custom Lines with Glitch Effect -->
        <div v-if="store.customLines.length > 0" class="mt-3 pt-2 border-t border-green-900/50">
            <div v-for="(line, index) in store.customLines" :key="index" class="text-xs flex gap-2 items-center">
               <span :style="{ color: line.labelColor }">[{{ line.label }}]</span>
               <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
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
