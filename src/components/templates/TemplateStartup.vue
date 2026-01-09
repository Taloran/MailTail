<template>
  <div class="font-sans text-sm text-gray-600 bg-white p-6 rounded-xl border border-gray-100 shadow-sm select-none relative overflow-hidden" style="min-width: 380px;">
    
    <!-- Top Accent Background -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-indigo-500"></div>

    <!-- Tagline Badge -->
    <div class="absolute top-4 right-4 bg-indigo-50 text-indigo-600 text-[10px] uppercase font-bold px-2 py-1 rounded-full tracking-wider">
      {{ store.config.templateOptions.startup.tagline }}
    </div>

    <div class="flex items-start gap-5 mt-2">
      <!-- Avatar -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0">
        <img 
          :src="store.profile.avatar" 
          class="w-16 h-16 object-cover bg-gray-50 ring-4 ring-white shadow-s"
          :style="{ borderRadius: store.config.avatarRadius }"
        />
      </div>

      <div class="flex-1 min-w-0 pt-0.5">
        <h1 class="text-xl font-bold text-gray-900 leading-tight mb-1">
          {{ store.profile.name }}
        </h1>
        <p class="text-xs font-medium text-indigo-500 mb-4 inline-block bg-indigo-50 px-2 py-0.5 rounded">
          {{ store.profile.role }} <span v-if="store.profile.subRole" class="text-indigo-300">/ {{ store.profile.subRole }}</span>
        </p>

        <!-- Modern Grid Contact -->
        <div class="grid grid-cols-1 gap-y-1.5 text-xs text-gray-500">
          <div v-if="store.profile.email" class="flex items-center gap-2 group">
            <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors"></span>
            <a :href="'mailto:' + store.profile.email" class="hover:text-indigo-600 transition-colors font-medium text-gray-600">{{ store.profile.email }}</a>
          </div>
          
          <div v-if="store.profile.mobile" class="flex items-center gap-2 group">
            <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors"></span>
            <span>{{ store.profile.mobile }}</span>
          </div>

          <div v-if="store.profile.website" class="flex items-center gap-2 group">
             <span class="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-indigo-500 transition-colors"></span>
             <a :href="store.profile.website" target="_blank" class="hover:text-indigo-600 transition-colors font-medium border-b border-gray-200 hover:border-indigo-200">{{ store.profile.website }}</a>
          </div>
        </div>

        <!-- Custom Lines (Pills) -->
         <div v-if="store.customLines.length > 0" class="mt-4 pt-4 border-t border-gray-50 flex flex-wrap gap-2">
            <div v-for="(line, index) in store.customLines" :key="index" class="text-[10px] flex items-center bg-gray-50 px-2 py-1 rounded hover:bg-gray-100 transition-colors">
               <span class="font-bold mr-1.5 text-gray-400" :style="{ color: line.labelColor }">{{ line.label }}</span>
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
