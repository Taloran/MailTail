<template>
  <!-- 
    Clean Text Template
    Pure typography, no columns, vertical stack.
    Designed to look great without an avatar.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Verdana', sans-serif; font-size: 14px; line-height: 1.5; color: #1a1a1a;">
    <tbody>
      <tr>
        <td style="font-size: 20px; font-weight: bold; color: #111; letter-spacing: -0.5px; padding-bottom: 4px;">
          {{ store.profile.name }}
        </td>
      </tr>
      <tr>
        <td style="font-size: 14px; color: #555; padding-bottom: 12px; border-bottom: 1px solid #eee; margin-bottom: 12px;">
          {{ store.profile.role }} <span style="font-size: 12px; color: #888; margin-left: 5px;">{{ store.profile.subRole }}</span>
        </td>
      </tr>
      <!-- Spacer Row imitating margin -->
      <tr><td style="height: 12px;"></td></tr>
      
      <!-- Info Block -->
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td style="padding-bottom: 4px; padding-right: 15px;">
                  <span style="color: #888; font-size: 12px;">EMAIL</span><br>
                  <a :href="`mailto:${store.profile.email}`" style="color: #111; text-decoration: none; font-weight: 500;">{{ store.profile.email }}</a>
                </td>
                <td style="padding-bottom: 4px;">
                  <span style="color: #888; font-size: 12px;">WEB</span><br>
                  <a :href="store.profile.website" style="color: #111; text-decoration: none; font-weight: 500;">{{ store.profile.website }}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      
      <!-- Custom Lines -->
      <tr v-if="store.customLines.length > 0">
        <td style="padding-top: 8px;">
          <span v-for="(line, index) in store.customLines" :key="line.id" style="font-size: 12px; margin-right: 12px;">
             <span v-if="line.label" :style="{ color: line.labelColor || '#888' }">{{ line.label }}:</span>
             <span :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal', marginLeft: line.label ? '4px' : '0px' }">
               <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, textDecoration: 'underline' }">{{ line.value }}</a>
               <span v-else>{{ line.value }}</span>
             </span>
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
