<template>
  <!-- 
    Elegant Style Template
    Serif fonts, classic layout, sophisticated.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: Georgia, 'Times New Roman', Times, serif; color: #1a1a1a; line-height: 1.5;">
    <tbody>
      <tr>
        <!-- Content -->
        <td valign="top" style="padding-right: 20px;">
           <div style="font-size: 22px; font-weight: normal; color: #1a1a1a; letter-spacing: 0.5px; border-bottom: 2px solid #1a1a1a; padding-bottom: 5px; margin-bottom: 10px; display: inline-block;">
             {{ store.profile.name }}
           </div>
           
           <div style="font-style: italic; font-size: 14px; color: #555; margin-bottom: 2px;">
             {{ store.profile.role }}
           </div>
           <div style="font-size: 12px; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;">
             {{ store.profile.subRole }}
           </div>
           
           <!-- Contact Info -->
           <table cellpadding="0" cellspacing="0" border="0" style="font-size: 13px;">
             <tbody>
               <!-- Email -->
               <tr>
                 <td style="padding-bottom: 3px;">
                   <span style="font-weight: bold; color: #1a1a1a; margin-right: 5px;">E.</span>
                   <a :href="`mailto:${store.profile.email}`" style="color: #444; text-decoration: none; border-bottom: 1px solid #ddd;">{{ store.profile.email }}</a>
                 </td>
               </tr>
               <!-- Website -->
               <tr>
                 <td style="padding-bottom: 3px;">
                   <span style="font-weight: bold; color: #1a1a1a; margin-right: 5px;">W.</span>
                   <a :href="store.profile.website" style="color: #444; text-decoration: none; border-bottom: 1px solid #ddd;">{{ store.profile.website }}</a>
                 </td>
               </tr>
               <!-- Custom Lines -->
               <tr v-for="line in store.customLines" :key="line.id">
                 <td style="padding-bottom: 3px;">
                   <span v-if="line.label" :style="{ color: line.labelColor || '#1a1a1a', fontWeight: 'bold', marginRight: '5px' }">{{ line.label }}.</span>
                   <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || '#444', textDecoration: 'none', borderBottom: '1px solid #ddd', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</a>
                   <span v-else :style="{ color: line.valueColor || '#444', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
                 </td>
               </tr>
             </tbody>
           </table>
        </td>
        
        <!-- Avatar (Right Side for variety) -->
        <td v-if="store.config.showAvatar" valign="top" style="padding-left: 20px; border-left: 1px solid #eee;">
          <img :src="store.profile.avatar || 'https://via.placeholder.com/100'" alt="Avatar" width="90" height="90" :style="{ borderRadius: store.config.avatarRadius, display: 'block', border: '1px solid #ddd', padding: '3px' }" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()
</script>
