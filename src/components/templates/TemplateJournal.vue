<template>
  <div class="text-sm text-gray-800 bg-[#fdfbf7] p-6 shadow-md relative transform rotate-[-1deg]" style="min-width: 360px; font-family: 'Kalam', 'Comic Sans MS', 'Chalkboard SE', sans-serif;">
    
    <!-- Paper Texture Lines -->
    <div class="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:100%_24px] mt-8"></div>
    
    <!-- Tape Decor -->
    <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-[#ffffff] opacity-40 rotate-1 shadow-sm transform skew-x-12 backdrop-blur-sm z-20"></div>

    <div class="relative z-10">
      <div class="flex gap-4 items-start">
         <!-- Polaroid Style Avatar -->
         <div v-if="store.profile.avatar && store.config.showAvatar" class="bg-white p-2 pb-6 shadow-sm rotate-[-3deg] shrink-0 border border-gray-200">
            <img 
              :src="store.profile.avatar" 
              class="w-20 h-20 object-cover grayscale-[0.2] sepia-[0.3]"
            />
         </div>

         <div class="pt-2 flex-1">
            <h1 class="text-2xl font-bold text-[#2c3e50] mb-1 handwriting-font">{{ store.profile.name }}</h1>
            <p class="text-sm text-gray-500 italic mb-4 border-b border-gray-300 inline-block pb-0.5 handwriting-font">
               {{ store.profile.role }} <span v-if="store.profile.subRole">({{ store.profile.subRole }})</span>
            </p>

            <div class="space-y-1 text-sm handwriting-font text-gray-700">
               <div v-if="store.profile.email">
                  <span class="mr-1">✉️</span>
                  <a :href="'mailto:' + store.profile.email" class="hover:underline decoration-wavy">{{ store.profile.email }}</a>
               </div>
               <div v-if="store.profile.website">
                  <span class="mr-1">🌐</span>
                  <a :href="store.profile.website" target="_blank" class="hover:underline decoration-wavy">{{ store.profile.website }}</a>
               </div>
               
               <!-- Custom Lines as Notes -->
               <div v-if="store.customLines.length > 0" class="mt-2 pt-1">
                  <div v-for="(line, index) in store.customLines" :key="index" class="flex gap-1">
                     <span class="text-gray-400">-</span>
                     <span class="font-bold" :style="{ color: line.labelColor }">{{ line.label }}:</span>
                     <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:bg-yellow-100 px-1">{{ line.value }}</a>
                     <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
                  </div>
               </div>
            </div>

            <div class="mt-6 text-right font-bold text-gray-600 handwriting-font">
               {{ store.config.templateOptions.journal.signOff }}
            </div>
         </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@400;700&display=swap');

.handwriting-font {
  font-family: 'Kalam', cursive;
}
</style>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
