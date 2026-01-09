<template>
  <div class="font-mono text-sm p-5 bg-[#1e1e1e] text-[#d4d4d4] rounded-lg shadow-xl relative select-none" style="min-width: 380px;">
    <!-- VS Code Window Controls -->
    <div class="flex gap-1.5 mb-3 opacity-50">
      <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
      <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
      <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
    </div>
    
    <div class="flex">
       <!-- Line Numbers -->
       <div class="flex flex-col text-right mr-4 text-[#858585] select-none text-xs leading-6">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span v-for="i in Math.max(0, store.customLines.length)" :key="'num-'+i">{{ 6 + i }}</span>
          <span>{{ 7 + store.customLines.length }}</span>
       </div>
       
       <!-- Code Content -->
       <div class="flex-1 leading-6 whitespace-pre font-mono text-xs sm:text-sm">
          <div><span class="text-[#c586c0]">const</span> <span class="text-[#4ec9b0]">Signature</span> <span class="text-[#d4d4d4]">=</span> <span class="text-[#ffd700]">{</span></div>
          
          <div>  <span class="text-[#9cdcfe]">name</span><span class="text-[#d4d4d4]">:</span> <span class="text-[#ce9178]">'{{ store.profile.name }}'</span><span class="text-[#d4d4d4]">,</span></div>
          
          <div>  <span class="text-[#9cdcfe]">role</span><span class="text-[#d4d4d4]">:</span> <span class="text-[#ce9178]">'{{ store.profile.role }}'</span><span class="text-[#d4d4d4]">,</span></div>
          
          <div v-if="store.profile.email">  <span class="text-[#9cdcfe]">email</span><span class="text-[#d4d4d4]">:</span> <a :href="'mailto:' + store.profile.email" class="text-[#ce9178] hover:underline cursor-pointer">'{{ store.profile.email }}'</a><span class="text-[#d4d4d4]">,</span></div>
          
          <div v-if="store.profile.mobile">  <span class="text-[#9cdcfe]">mobile</span><span class="text-[#d4d4d4]">:</span> <span class="text-[#b5cea8]">{{ store.profile.mobile.replace(/\D/g,'') }}</span><span class="text-[#d4d4d4]">,</span></div>
          
          <div v-if="store.profile.website">  <span class="text-[#9cdcfe]">web</span><span class="text-[#d4d4d4]">:</span> <a :href="store.profile.website" target="_blank" class="text-[#ce9178] hover:underline cursor-pointer">'{{ store.profile.website }}'</a><span class="text-[#d4d4d4]">,</span></div>
          
          <!-- Custom Props -->
          <template v-if="store.customLines.length > 0">
             <div v-for="(line, index) in store.customLines" :key="index">  <span class="text-[#9cdcfe]">{{ formatKey(line.label) }}</span><span class="text-[#d4d4d4]">:</span> 
               <a v-if="line.url" :href="line.url" target="_blank" class="text-[#ce9178] hover:underline cursor-pointer" :style="{ color: line.valueColor }">'{{ line.value }}'</a>
               <span v-else class="text-[#ce9178]" :style="{ color: line.valueColor }">'{{ line.value }}'</span><span class="text-[#d4d4d4]">,</span>
             </div>
          </template>
          
          <div><span class="text-[#ffd700]">}</span><span class="text-[#d4d4d4]">;</span></div>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()

// Helper to sanitize custom labels into valid JS keys
const formatKey = (label) => {
  return label.toLowerCase().replace(/[^a-z0-9]/g, '_') || 'prop'
}
</script>
