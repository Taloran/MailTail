<template>
  <!-- 
    Creative Style Template
    Modern card look, colored border/accent, vibrant.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Verdana', sans-serif; background-color: #fafafa; border-left: 4px solid #8b5cf6; padding: 15px; border-radius: 0 8px 8px 0;">
    <tbody>
      <tr>
        <!-- Avatar -->
        <td v-if="store.config.showAvatar" valign="middle" style="padding-right: 15px;">
           <div style="position: relative;">
              <div style="position: absolute; top: -2px; left: -2px; right: -2px; bottom: -2px; background: #8b5cf6; border-radius: 50%; opacity: 0.2; z-index: 0;"></div>
              <img :src="store.profile.avatar || 'https://via.placeholder.com/80'" alt="Avatar" width="70" height="70" :style="{ borderRadius: store.config.avatarRadius, display: 'block', position: 'relative', zIndex: 1 }" />
           </div>
        </td>
        
        <!-- Content -->
        <td valign="middle">
          <div style="margin-bottom: 4px;">
            <span style="font-size: 18px; font-weight: bold; color: #2d3748;">{{ store.profile.name }}</span>
            <span style="color: #8b5cf6; margin: 0 5px;">//</span>
            <span style="font-size: 13px; color: #718096; font-weight: 500;">{{ store.profile.role }}</span>
          </div>
          
          <div style="font-size: 11px; color: #a0aec0; margin-bottom: 10px; font-style: italic;">
             {{ store.profile.subRole }}
          </div>
          
          <table cellpadding="0" cellspacing="0" border="0" style="font-size: 12px;">
            <tbody>
              <tr>
                 <td style="padding-top: 2px;">
                    <a :href="`mailto:${store.profile.email}`" style="color: #4a5568; text-decoration: none; font-weight: 500;">
                      <span style="color: #8b5cf6; margin-right: 4px;">✉</span>{{ store.profile.email }}
                    </a>
                    <span style="margin: 0 8px; color: #cbd5e1;">|</span>
                    <a :href="store.profile.website" style="color: #4a5568; text-decoration: none; font-weight: 500;">
                       <span style="color: #8b5cf6; margin-right: 4px;">⌘</span>{{ store.profile.website }}
                    </a>
                 </td>
              </tr>
              <!-- Custom Lines (Flowing if possible, but table rows for safety) -->
              <tr v-for="line in store.customLines" :key="line.id">
                 <td style="padding-top: 2px;">
                    <span v-if="line.label" :style="{ color: line.labelColor || '#8b5cf6', fontWeight: 'bold', marginRight: '4px', fontSize: '11px', textTransform: 'uppercase' }">{{ line.label }}</span>
                    <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || '#4a5568', textDecoration: 'none', borderBottom: '1px dotted #8b5cf6', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</a>
                    <span v-else :style="{ color: line.valueColor || '#4a5568', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
                 </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
