<template>
  <div class="font-sans p-6 bg-yellow-300 text-black relative overflow-hidden select-none border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200" style="min-width: 340px;">
    
    <!-- Decorative Shapes -->
    <div class="absolute top-0 right-0 w-16 h-16 bg-cyan-400 border-l-4 border-b-4 border-black"></div>
    <div class="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-pink-500 border-4 border-black"></div>
    <div class="absolute bottom-8 right-12 w-4 h-4 bg-black"></div>

    <div class="relative z-10 flex gap-5 items-center">
      <!-- Avatar Section -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="relative shrink-0">
         <!-- Backing Shape -->
         <div class="absolute inset-0 bg-pink-500 translate-x-1 translate-y-1 border-2 border-black" :style="{ borderRadius: store.config.avatarRadius }"></div>
         <!-- Image -->
         <img 
           :src="store.profile.avatar" 
           class="w-20 h-20 object-cover border-2 border-black relative bg-white"
           :style="{ borderRadius: store.config.avatarRadius }"
         />
      </div>

      <div class="flex-1 min-w-0">
        <!-- Name & Role -->
        <h1 class="text-2xl font-black uppercase tracking-tighter leading-none mb-1 shadow-[2px_2px_0px_0px_#fff] inline-block bg-black text-white px-2 py-1 transform -rotate-1">
          {{ store.profile.name }}
        </h1>
        <div class="font-bold text-sm bg-cyan-400 border-2 border-black px-2 py-0.5 inline-block mt-1 mb-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.2)]">
          {{ store.profile.role }} <span v-if="store.profile.subRole" class="text-xs font-normal">| {{ store.profile.subRole }}</span>
        </div>

        <!-- Contact Info -->
        <div class="space-y-1 text-sm font-bold">
          <div v-if="store.profile.email" class="flex items-center gap-2 group">
             <div class="w-2 h-2 bg-black rotate-45 group-hover:bg-pink-500 transition-colors"></div>
             <a :href="'mailto:' + store.profile.email" class="hover:underline decoration-2 decoration-pink-500">{{ store.profile.email }}</a>
          </div>
          
          <div v-if="store.profile.mobile" class="flex items-center gap-2 group">
             <div class="w-2 h-2 bg-black rotate-45 group-hover:bg-pink-500 transition-colors"></div>
             <span>{{ store.profile.mobile }}</span>
          </div>

          <div v-if="store.profile.website" class="flex items-center gap-2 group">
             <div class="w-2 h-2 bg-black rotate-45 group-hover:bg-pink-500 transition-colors"></div>
             <a :href="store.profile.website" target="_blank" class="hover:bg-black hover:text-white transition-colors px-1 -ml-1">{{ store.profile.website }}</a>
          </div>
        </div>

        <!-- Custom Lines -->
         <div v-if="store.customLines.length > 0" class="mt-3 pt-3 border-t-4 border-black border-dotted">
            <div v-for="(line, index) in store.customLines" :key="index" class="text-xs flex gap-2 items-center mb-1">
               <span class="font-black bg-white border border-black px-1" :style="{ color: line.labelColor, borderColor: line.labelColor }">{{ line.label }}</span>
               <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:bg-white/50 px-1">{{ line.value }}</a>
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
