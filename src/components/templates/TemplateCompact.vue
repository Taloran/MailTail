<template>
  <!-- 
    Compact Template
    Single block, very dense, minimal height.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Arial', sans-serif; font-size: 13px; line-height: 1.4; color: #444; border-left: 3px solid #000; padding-left: 12px;">
    <tbody>
      <tr>
        <td>
          <span style="font-weight: 800; color: #000;">{{ store.profile.name }}</span>
          <span style="color: #ccc; margin: 0 6px;">/</span>
          <span style="font-weight: 500;">{{ store.profile.role }}</span>
        </td>
      </tr>
      <tr>
        <td style="font-size: 12px;">
          <a :href="`mailto:${store.profile.email}`" style="color: #666; text-decoration: none;">{{ store.profile.email }}</a>
          <span style="color: #ccc; margin: 0 4px;">•</span>
          <a :href="store.profile.website" style="color: #666; text-decoration: none;">{{ store.profile.website }}</a>
          
          <span v-for="line in store.customLines" :key="line.id">
             <span style="color: #ccc; margin: 0 4px;">•</span>
             <span v-if="line.label" :style="{ color: line.labelColor || '#444', fontWeight: 'bold', marginRight: '3px', fontSize: '0.9em' }">{{ line.label }}:</span>
             <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal', textDecoration: 'none' }">{{ line.value }}</a>
             <span v-else :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
