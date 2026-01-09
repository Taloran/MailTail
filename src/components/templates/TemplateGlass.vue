<template>
  <div class="font-sans text-sm p-5 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white relative overflow-hidden select-none" style="min-width: 320px;">
    <!-- Abstract Background Blobs -->
    <div class="absolute top-[-20px] right-[-20px] w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl opacity-50"></div>
    <div class="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-blue-300 rounded-full mix-blend-overlay filter blur-xl opacity-50"></div>

    <!-- Glass Card -->
    <div class="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 shadow-2xl">
      <div class="flex items-center gap-5">
        <!-- Avatar Section -->
        <div v-if="store.profile.avatar && store.config.showAvatar" class="relative shrink-0 group">
           <img 
             :src="store.profile.avatar" 
             class="w-16 h-16 object-cover border-2 border-white/50 shadow-lg group-hover:scale-110 transition-transform duration-300"
             :style="{ borderRadius: store.config.avatarRadius }"
           />
           <div class="absolute inset-0 bg-white/20 rounded-full blur-md -z-10 group-hover:bg-white/40 transition-colors"></div>
        </div>

        <div class="flex-1 min-w-0">
          <h1 class="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            {{ store.profile.name }}
          </h1>
          <p class="text-xs font-medium text-white/80 uppercase tracking-widest mb-3 border-b border-white/10 pb-2">
            {{ store.profile.role }} <span v-if="store.profile.subRole" class="opacity-60 normal-case tracking-normal">| {{ store.profile.subRole }}</span>
          </p>

          <!-- Contact Grid -->
          <div class="grid grid-cols-1 gap-1 text-xs text-white/90">
             <div v-if="store.profile.email" class="flex items-center gap-2">
                <span class="opacity-50">Email</span>
                <a :href="'mailto:' + store.profile.email" class="hover:text-white hover:underline decoration-white/50 underline-offset-2">{{ store.profile.email }}</a>
             </div>
             
             <div v-if="store.profile.mobile" class="flex items-center gap-2">
                <span class="opacity-50">Tel</span>
                <span>{{ store.profile.mobile }}</span>
             </div>

             <div v-if="store.profile.website" class="flex items-center gap-2">
                <span class="opacity-50">Web</span>
                <a :href="store.profile.website" target="_blank" class="hover:text-white hover:underline decoration-white/50 underline-offset-2 truncate">{{ store.profile.website }}</a>
             </div>
          </div>
        </div>
      </div>

      <!-- Custom Lines -->
      <div v-if="store.customLines.length > 0" class="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-3">
         <div v-for="(line, index) in store.customLines" :key="index" class="text-xs flex items-center bg-black/20 rounded-full px-3 py-1 border border-white/5 backdrop-blur-sm">
            <span class="font-semibold mr-2 opacity-80" :style="{ color: line.labelColor }">{{ line.label }}</span>
            <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:text-white transition-colors">{{ line.value }}</a>
            <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
