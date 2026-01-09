<template>
  <div class="font-serif text-sm text-[#c8aa6e] bg-[#1a1a1a] p-1 border-[#c8aa6e] select-none relative overflow-hidden" style="min-width: 420px; border-width: 3px; border-style: ridge;">
    
    <!-- Background Texture (Dark Leather/Metal) -->
    <div class="absolute inset-0 bg-[#121212] z-0" style="background-image: radial-gradient(#2a2a2a 1px, transparent 1px); background-size: 10px 10px; opacity: 0.3;"></div>

    <div class="relative z-10 p-4 border border-[#4a4a4a] bg-[#1a1a1a]/90 h-full">
      <!-- Header: Class & Name -->
      <div class="flex justify-between items-end border-b border-[#c8aa6e] pb-1 mb-3">
         <div>
            <div class="text-[10px] uppercase text-[#8b8b8b] tracking-wider">{{ store.config.templateOptions.rpg.characterClass }}</div>
            <h1 class="text-xl font-bold text-white tracking-wide shadow-black drop-shadow-md">{{ store.profile.name }}</h1>
         </div>
         <div class="text-right">
            <div class="text-[10px] text-[#8b8b8b]">ROLE_ID</div>
            <div class="font-bold text-[#c8aa6e] uppercase text-xs">{{ store.profile.role }}</div>
         </div>
      </div>

      <div class="flex gap-4">
         <!-- Avatar Frame -->
         <div v-if="store.profile.avatar && store.config.showAvatar" class="relative group">
            <div class="w-[84px] h-[84px] border-2 border-[#c8aa6e] bg-black p-0.5 relative rotate-45 mt-3 ml-3 shadow-[0_0_10px_rgba(200,170,110,0.3)]">
               <img 
                 :src="store.profile.avatar" 
                 class="w-full h-full object-cover -rotate-45"
               />
            </div>
            <!-- Gem Decoration -->
            <div class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-red-900 border border-[#c8aa6e] shadow-[0_0_5px_rgba(255,0,0,0.5)]"></div>
         </div>

         <!-- Stats Panel -->
         <div class="flex-1 space-y-2 pl-4">
            <!-- Stat Rows -->
            <div v-if="store.profile.email" class="space-y-0.5">
               <div class="flex justify-between text-[10px] text-[#8b8b8b] uppercase">
                  <span>Intelligence (Email)</span>
                  <span>18</span>
               </div>
               <div class="h-1.5 bg-[#333] border border-[#555] relative">
                  <div class="absolute inset-0 bg-blue-900 w-[85%]"></div>
               </div>
               <a :href="'mailto:' + store.profile.email" class="block text-right text-xs text-[#eee] hover:text-[#c8aa6e] transition-colors truncate">{{ store.profile.email }}</a>
            </div>

            <div v-if="store.profile.website" class="space-y-0.5 pt-1">
               <div class="flex justify-between text-[10px] text-[#8b8b8b] uppercase">
                  <span>Charisma (Web)</span>
                  <span>16</span>
               </div>
               <div class="h-1.5 bg-[#333] border border-[#555] relative">
                  <div class="absolute inset-0 bg-purple-900 w-[60%]"></div>
               </div>
               <a :href="store.profile.website" target="_blank" class="block text-right text-xs text-[#eee] hover:text-[#c8aa6e] transition-colors truncate">{{ store.profile.website }}</a>
            </div>
         </div>
      </div>

      <!-- Inventory (Custom Lines) -->
      <div v-if="store.customLines.length > 0" class="mt-4 border-t border-[#4a4a4a] pt-2">
         <div class="text-[10px] text-[#c8aa6e] uppercase mb-1 flex items-center gap-2">
            <span>Inventory</span>
            <span class="flex-1 h-px bg-[#4a4a4a]"></span>
         </div>
         <div class="grid grid-cols-2 gap-2 text-[10px]">
             <div v-for="(line, index) in store.customLines" :key="index" class="flex gap-1 items-center bg-[#0a0a0a] border border-[#333] px-2 py-1">
                <div class="w-1.5 h-1.5 bg-[#c8aa6e] rotate-45"></div>
                <span class="text-[#888]">{{ line.label }}:</span>
                <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:text-white truncate flex-1">{{ line.value }}</a>
                <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="truncate flex-1">{{ line.value }}</span>
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
