<template>
  <div class="font-serif text-sm text-gray-900 bg-white border border-gray-300 p-6 select-none shadow-sm flex flex-col justify-between" style="min-width: 420px; font-family: 'Times New Roman', Times, serif;">
    
    <div class="flex gap-6 items-start">
       <!-- Avatar (Formal Square) -->
       <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0 border border-gray-200 p-0.5">
          <img 
            :src="store.profile.avatar" 
            class="w-20 h-28 object-cover grayscale-[0.5]"
          />
       </div>

       <div class="flex-1 min-w-0">
          <div class="border-b-2 border-slate-900 pb-2 mb-3">
             <h1 class="text-2xl font-bold text-slate-900 uppercase tracking-widest">{{ store.profile.name }}</h1>
             <p class="text-xs font-bold text-slate-500 uppercase mt-0.5">{{ store.profile.role }}</p>
          </div>

          <div class="font-sans text-xs text-gray-600 grid grid-cols-2 gap-y-1 gap-x-4">
             <div v-if="store.profile.email" class="flex gap-2">
                <span class="font-bold text-slate-800">E:</span>
                <a :href="'mailto:' + store.profile.email" class="hover:text-blue-800 hover:underline">{{ store.profile.email }}</a>
             </div>
             <div v-if="store.profile.website" class="flex gap-2">
                <span class="font-bold text-slate-800">W:</span>
                <a :href="store.profile.website" target="_blank" class="hover:text-blue-800 hover:underline">{{ store.profile.website }}</a>
             </div>
             <div v-if="store.profile.mobile" class="flex gap-2">
                <span class="font-bold text-slate-800">P:</span>
                <span>{{ store.profile.mobile }}</span>
             </div>
             <div v-if="store.profile.subRole" class="flex gap-2 col-span-2">
                <span class="font-bold text-slate-800">Ref:</span>
                <span>{{ store.profile.subRole }}</span>
             </div>
          </div>

          <!-- Custom Lines -->
          <div v-if="store.customLines.length > 0" class="mt-2 pt-2 border-t border-gray-100 font-sans text-xs">
             <div v-for="(line, index) in store.customLines" :key="index" class="flex items-center gap-1">
                <span class="font-bold text-slate-500" :style="{ color: line.labelColor }">{{ line.label }}:</span>
                <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
                <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
             </div>
          </div>
       </div>
    </div>

    <!-- Legal Disclaimer Footer -->
    <div class="mt-5 pt-3 border-t border-gray-200 text-[9px] text-gray-400 font-sans text-justify leading-tight">
       <span class="font-bold text-gray-500 bg-gray-100 px-1 mr-1">DISCLAIMER:</span>
       {{ store.config.templateOptions.legal.disclaimer }}
    </div>

  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
