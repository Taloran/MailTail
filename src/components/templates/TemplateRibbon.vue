<template>
  <!-- 
    Ribbon Style Template
    Bold header bar, no avatar. Text focus.
  -->
  <div style="font-family: Helvetica, Arial, sans-serif; min-width: 300px; max-width: 500px;">
    <!-- Header Ribbon -->
    <div style="background-color: #2563eb; padding: 15px 20px; border-radius: 4px 4px 0 0;">
      <div style="color: #ffffff; font-size: 20px; font-weight: bold; letter-spacing: 0.5px;">
        {{ store.profile.name }}
      </div>
      <div style="color: #bfdbfe; font-size: 13px; font-weight: 500; margin-top: 2px;">
        {{ store.profile.role }} <span v-if="store.profile.subRole" style="opacity: 0.8;">| {{ store.profile.subRole }}</span>
      </div>
    </div>
    
    <!-- Body Content -->
    <div style="border: 1px solid #e5e7eb; border-top: none; padding: 15px 20px; border-radius: 0 0 4px 4px; background-color: #ffffff;">
       <table cellpadding="0" cellspacing="0" border="0" style="font-size: 13px; color: #4b5563;">
         <tbody>
           <!-- Contact Links -->
           <tr>
             <td style="padding-bottom: 6px;">
               <a :href="`mailto:${store.profile.email}`" style="color: #4b5563; text-decoration: none; display: flex; align-items: center;">
                 <span style="color: #2563eb; font-weight: bold; margin-right: 8px;">EMAIL</span>
                 {{ store.profile.email }}
               </a>
             </td>
           </tr>
           <tr>
             <td style="padding-bottom: 6px;">
               <a :href="store.profile.website" style="color: #4b5563; text-decoration: none; display: flex; align-items: center;">
                 <span style="color: #2563eb; font-weight: bold; margin-right: 8px;">WEB</span>
                 {{ store.profile.website }}
               </a>
             </td>
           </tr>
           
           <!-- Divider -->
           <tr v-if="store.customLines.length > 0">
             <td style="padding: 8px 0;">
               <div style="height: 1px; background-color: #f3f4f6; width: 100%;"></div>
             </td>
           </tr>
           
           <!-- Custom Lines -->
           <tr v-for="line in store.customLines" :key="line.id">
             <td style="padding-bottom: 4px;">
               <span v-if="line.label" :style="{ color: line.labelColor || '#2563eb', fontWeight: 'bold', marginRight: '8px', fontSize: '11px', textTransform: 'uppercase' }">{{ line.label }}</span>
               <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || '#4b5563', textDecoration: 'underline', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</a>
               <span v-else :style="{ color: line.valueColor || '#4b5563', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
             </td>
           </tr>
         </tbody>
       </table>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
