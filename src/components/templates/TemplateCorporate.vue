<template>
  <div class="font-sans text-sm text-gray-800 bg-white p-5 border border-gray-200 select-none flex items-center gap-5" style="min-width: 380px;">
    
    <!-- Left: Avatar -->
    <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0">
      <img 
        :src="store.profile.avatar" 
        class="w-20 h-20 object-cover"
        :style="{ borderRadius: store.config.avatarRadius }"
      />
    </div>

    <!-- Divider -->
    <div v-if="store.profile.avatar && store.config.showAvatar" class="w-px h-24 bg-gray-300"></div>

    <!-- Right: Info -->
    <div class="flex-1 min-w-0">
      <h1 class="text-lg font-bold text-slate-800 leading-tight">
        {{ store.profile.name }}
      </h1>
      <p class="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">
        {{ store.profile.role }} <span v-if="store.profile.subRole">| {{ store.profile.subRole }}</span>
      </p>
      
      <div class="space-y-1 text-xs text-gray-600">
        <div v-if="store.profile.email">
          <span class="font-bold text-slate-400 mr-2">E</span>
          <a :href="'mailto:' + store.profile.email" class="text-blue-700 hover:underline">{{ store.profile.email }}</a>
        </div>
        
        <div v-if="store.profile.mobile">
          <span class="font-bold text-slate-400 mr-2">P</span>
          <span>{{ store.profile.mobile }}</span>
        </div>

        <div v-if="store.profile.website">
          <span class="font-bold text-slate-400 mr-2">W</span>
          <a :href="store.profile.website" target="_blank" class="text-blue-700 hover:underline">{{ store.profile.website }}</a>
        </div>
      </div>

      <!-- Custom Lines -->
      <div v-if="store.customLines.length > 0" class="mt-2 pt-2 border-t border-gray-100 flex flex-wrap gap-x-4 gap-y-1">
         <div v-for="(line, index) in store.customLines" :key="index" class="text-xs flex items-center">
            <span class="font-bold mr-1" :style="{ color: line.labelColor }">{{ line.label }}:</span>
            <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
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
