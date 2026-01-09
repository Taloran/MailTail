<template>
  <div class="font-sans text-sm text-[#00FFFF] bg-[#050510] p-6 select-none relative overflow-hidden clip-path-polygon" style="min-width: 400px; font-family: 'Rajdhani', sans-serif; clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);">
    
    <!-- HUD Grid Background -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    
    <!-- Scanline Effect -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_50%,rgba(0,255,255,0.02)_50%)] bg-[size:100%_4px] pointer-events-none"></div>

    <div class="relative z-10 flex gap-6 items-center">
       <!-- Hex Avatar -->
       <div v-if="store.profile.avatar && store.config.showAvatar" class="relative group shrink-0">
          <div class="w-20 h-20 bg-[#00FFFF] clip-path-hex opacity-20 absolute top-0 left-0 animate-pulse"></div>
          <div class="w-20 h-20 p-[2px] bg-gradient-to-b from-[#00FFFF] to-transparent clip-path-hex">
             <img 
               :src="store.profile.avatar" 
               class="w-full h-full object-cover clip-path-hex filter brightness-125 contrast-110 sepia-[1] hue-rotate-[130deg]" 
             />
          </div>
       </div>

       <div class="flex-1 min-w-0">
          <div class="flex justify-between items-baseline border-b border-[#00FFFF]/30 pb-1 mb-2">
             <h1 class="text-2xl font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#0088FF] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">
                {{ store.profile.name }}
             </h1>
             <div class="text-[9px] uppercase tracking-[0.2em] opacity-70">{{ store.config.templateOptions.holo.sector }}</div>
          </div>
          
          <div class="text-xs uppercase tracking-wider text-[#0088FF] mb-3 font-semibold">
             {{ store.profile.role }} 
             <span v-if="store.profile.subRole" class="text-[#00FFFF]/50"> // {{ store.profile.subRole }}</span>
          </div>

          <!-- Data Linkages -->
          <div class="grid grid-cols-2 gap-x-4 gap-y-1 text-[10px] tracking-wide font-mono">
             <div v-if="store.profile.email" class="flex gap-2 items-center group">
                <span class="text-[#00FFFF]/40 group-hover:text-[#00FFFF]">></span>
                <a :href="'mailto:' + store.profile.email" class="hover:text-white truncate transition-colors">{{ store.profile.email }}</a>
             </div>
             <div v-if="store.profile.website" class="flex gap-2 items-center group">
                <span class="text-[#00FFFF]/40 group-hover:text-[#00FFFF]">></span>
                <a :href="store.profile.website" target="_blank" class="hover:text-white truncate transition-colors">{{ store.profile.website }}</a>
             </div>
          </div>

           <!-- Custom Lines HUD -->
           <div v-if="store.customLines.length > 0" class="mt-3 pt-2 border-t border-dashed border-[#00FFFF]/20">
              <div class="flex flex-wrap gap-3">
                 <div v-for="(line, index) in store.customLines" :key="index" class="flex items-center gap-1 text-[10px] bg-[#00FFFF]/5 px-1.5 py-0.5 rounded-sm border border-[#00FFFF]/10">
                    <span class="text-[#0088FF] font-bold" :style="{ color: line.labelColor }">{{ line.label }}</span>
                    <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:text-white hover:shadow-[0_0_8px_rgba(0,255,255,0.8)] transition-all">{{ line.value }}</a>
                    <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
                 </div>
              </div>
           </div>
       </div>
    </div>
    
    <!-- Corner Decor -->
    <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00FFFF] opacity-50"></div>
    <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00FFFF] opacity-50"></div>
  </div>
</template>

<style scoped>
.clip-path-hex {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
