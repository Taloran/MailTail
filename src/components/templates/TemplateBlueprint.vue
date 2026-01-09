<template>
  <div class="font-sans text-xs text-blue-900 bg-white p-6 relative overflow-hidden select-none border-2 border-blue-900" style="min-width: 400px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;">
    
    <!-- Grid Background -->
    <div class="absolute inset-0 z-0 pointer-events-none opacity-20" 
         style="background-image: linear-gradient(0deg, transparent 24%, #1e3a8a 25%, #1e3a8a 26%, transparent 27%, transparent 74%, #1e3a8a 75%, #1e3a8a 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #1e3a8a 25%, #1e3a8a 26%, transparent 27%, transparent 74%, #1e3a8a 75%, #1e3a8a 76%, transparent 77%, transparent); background-size: 30px 30px;">
    </div>

    <!-- Technical Header -->
    <div class="relative z-10 flex justify-between border-b-2 border-blue-900 pb-2 mb-4 uppercase tracking-widest font-bold">
       <span>REF: {{ Math.floor(Date.now() / 100000).toString(16).toUpperCase() }}</span>
       <span>{{ store.config.templateOptions.blueprint.projName }}</span>
    </div>

    <div class="relative z-10 flex gap-6">
      <!-- Logic Unit (Avatar) -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="border-2 border-blue-900 p-1 relative group">
         <div class="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-blue-900"></div>
         <div class="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-blue-900"></div>
         <!-- Connecting Line Graphic -->
         <div class="absolute top-1/2 -right-6 w-6 h-0.5 bg-blue-900"></div>
         
         <div>
            <img 
              :src="store.profile.avatar" 
              class="w-20 h-20 object-cover opacity-90 grayscale contrast-125"
              style="mix-blend-mode: multiply;"
            />
         </div>
      </div>

      <div class="flex-1 space-y-3">
        <!-- Spec Block 1: Identity -->
        <div>
           <h1 class="text-xl font-bold uppercase tracking-tighter mb-0.5">{{ store.profile.name }}</h1>
           <div class="flex items-center gap-2">
              <span class="bg-blue-900 text-white px-1 text-[10px] font-bold">ROLE</span>
              <span class="font-bold uppercase">{{ store.profile.role }}</span>
           </div>
           <div v-if="store.profile.subRole" class="text-[10px] uppercase mt-0.5 text-blue-800/70">
              >> {{ store.profile.subRole }}
           </div>
        </div>

        <!-- Spec Block 2: Data Link -->
        <div class="border-l-2 border-blue-900 pl-3 space-y-1">
           <div v-if="store.profile.email" class="flex items-center gap-2 group">
              <span class="w-1.5 h-1.5 bg-blue-900 rotate-45 group-hover:bg-blue-600"></span>
              <a :href="'mailto:' + store.profile.email" class="hover:underline font-bold">{{ store.profile.email }}</a>
           </div>
           <div v-if="store.profile.mobile" class="flex items-center gap-2 group">
              <span class="w-1.5 h-1.5 bg-blue-900 rotate-45 group-hover:bg-blue-600"></span>
              <span>{{ store.profile.mobile }}</span>
           </div>
           <div v-if="store.profile.website" class="flex items-center gap-2 group">
              <span class="w-1.5 h-1.5 bg-blue-900 rotate-45 group-hover:bg-blue-600"></span>
              <a :href="store.profile.website" target="_blank" class="hover:underline font-bold">{{ store.profile.website }}</a>
           </div>
        </div>
      </div>
    </div>

    <!-- Parameter Table (Custom Lines) -->
    <div v-if="store.customLines.length > 0" class="relative z-10 mt-4 border-2 border-blue-900">
       <div class="bg-blue-900 text-white text-[9px] px-2 py-0.5 font-bold uppercase">Technical Params</div>
       <div class="grid grid-cols-2 text-[10px]">
          <div v-for="(line, index) in store.customLines" :key="index" class="border-b border-r border-blue-900/30 px-2 py-1 flex justify-between last:border-b-0">
             <span class="font-bold uppercase mr-2" :style="{ color: line.labelColor }">{{ line.label }}</span>
             <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" class="hover:underline text-right truncate">{{ line.value }}</a>
             <span v-else :style="{ color: line.valueColor }" class="text-right truncate">{{ line.value }}</span>
          </div>
       </div>
    </div>

    <!-- Footer Stamp -->
    <div class="absolute bottom-2 right-2 border-2 border-blue-900 rounded-full w-12 h-12 flex items-center justify-center -rotate-12 opacity-50 z-0 pointer-events-none">
       <span class="text-[8px] font-bold text-blue-900 text-center leading-tight">FINAL<br>APPV</span>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
