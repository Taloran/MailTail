<template>
  <!-- 
    Signoff Style Template
    Handwritten feel, very minimal. No Avatar.
  -->
  <div style="font-family: Arial, sans-serif;">
    <!-- "Handwritten" Name -->
    <div style="font-family: 'Brush Script MT', 'Segoe UI Script', 'Luca Calligraphy', cursive; font-size: 28px; color: #1e293b; margin-bottom: 8px;">
      {{ store.profile.name }}
    </div>
    
    <div style="border-left: 2px solid #cbd5e1; padding-left: 12px; margin-left: 4px;">
       <div style="font-size: 14px; font-weight: bold; color: #475569; margin-bottom: 2px;">
         {{ store.profile.role }}
       </div>
       <div style="font-size: 12px; color: #94a3b8; font-style: italic; margin-bottom: 8px;">
         {{ store.profile.subRole }}
       </div>
       
       <table cellpadding="0" cellspacing="0" border="0" style="font-size: 12px; color: #64748b;">
         <tbody>
           <tr>
              <td style="padding-right: 10px;">
                <a :href="`mailto:${store.profile.email}`" style="color: #64748b; text-decoration: none; border-bottom: 1px dashed #cbd5e1;">{{ store.profile.email }}</a>
              </td>
              <td>
                <a :href="store.profile.website" style="color: #64748b; text-decoration: none; border-bottom: 1px dashed #cbd5e1;">{{ store.profile.website }}</a>
              </td>
           </tr>
         </tbody>
       </table>
       
       <div style="margin-top: 8px; font-size: 12px;">
         <span v-for="(line, index) in store.customLines" :key="line.id" style="display: block; margin-bottom: 2px;">
            <span v-if="line.label" :style="{ color: line.labelColor || '#94a3b8', fontStyle: 'italic', marginRight: '6px' }">{{ line.label }}</span>
            <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || '#475569', textDecoration: 'none', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</a>
            <span v-else :style="{ color: line.valueColor || '#475569', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
         </span>
       </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
