<template>
  <div class="font-mono text-sm text-gray-700 bg-white border border-gray-300 rounded-md overflow-hidden select-none" style="min-width: 400px;">
    
    <!-- Commit Header -->
    <div class="bg-gray-50 border-b border-gray-200 px-3 py-2 flex items-center gap-2 text-xs text-gray-500">
      <span class="font-bold text-gray-700">{{ store.profile.name.toLowerCase().replace(/\s+/g, '-') }}</span>
      <span>{{ store.config.templateOptions.git.commitText }}</span>
      <span class="ml-auto font-mono text-xs opacity-60">{{ store.config.templateOptions.git.messageText }}</span>
    </div>

    <div class="p-4 flex gap-4 items-start">
      <!-- Avatar (Committer) -->
      <div v-if="store.profile.avatar && store.config.showAvatar" class="shrink-0">
        <img 
          :src="store.profile.avatar" 
          class="w-12 h-12 rounded-md object-cover border border-gray-200"
          :style="{ borderRadius: store.config.avatarRadius }"
        />
      </div>

      <div class="flex-1 min-w-0">
        <!-- Commit Message (Role) -->
        <h1 class="font-semibold text-gray-900 mb-1 truncate">
          feat(role): {{ store.profile.role }}
        </h1>
        
        <div class="text-xs text-gray-600 mb-3 font-mono">
           <span v-if="store.profile.subRole">{{ store.profile.subRole }}</span>
           <span v-else>Update profile information</span>
        </div>

        <!-- Diff Stats (Contact) -->
        <div class="space-y-1 text-xs font-mono">
           <div v-if="store.profile.email" class="flex items-center gap-2">
             <span class="text-green-600 width-4">+</span>
             <a :href="'mailto:' + store.profile.email" class="hover:text-blue-600 hover:underline">{{ store.profile.email }}</a>
           </div>
           
           <div v-if="store.profile.mobile" class="flex items-center gap-2">
             <span class="text-green-600 width-4">+</span>
             <span>{{ store.profile.mobile }}</span>
           </div>

           <div v-if="store.profile.website" class="flex items-center gap-2">
             <span class="text-green-600 width-4">+</span>
             <a :href="store.profile.website" target="_blank" class="hover:text-blue-600 hover:underline">{{ store.profile.website }}</a>
           </div>

           <!-- Custom Lines as Additions -->
           <div v-if="store.customLines.length > 0" class="mt-2 pt-2 border-t border-gray-100 border-dashed">
             <div v-for="(line, index) in store.customLines" :key="index" class="flex items-center gap-2">
                <span class="text-green-600 width-4">+</span>
                <span :style="{ color: line.labelColor }">{{ line.label }}:</span>
                <a v-if="line.url" :href="line.url" target="_blank" :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }" class="hover:underline">{{ line.value }}</a>
                <span v-else :style="{ color: line.valueColor }" :class="{ 'font-bold': line.bold }">{{ line.value }}</span>
             </div>
           </div>
        </div>
      </div>
    </div>
    
    <!-- Footer status -->
    <div class="bg-green-50/50 border-t border-green-100 px-3 py-1 flex items-center gap-2 text-[10px] text-green-700 rounded-b-md">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
         <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
       </svg>
       <span>Verified signature</span>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
