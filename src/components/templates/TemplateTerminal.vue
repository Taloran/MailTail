<template>
  <!-- 
    Terminal Style Signature Template
    Strictly uses <table> for layout and inline CSS for styling.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Consolas', 'Monaco', 'Courier New', monospace; font-size: 14px; line-height: 1.5; color: #282c34; background-color: transparent;">
    <tbody>
      <tr>
        <!-- Avatar Column -->
        <td v-if="store.config.showAvatar" valign="top" style="padding-right: 20px;">
          <img :src="store.profile.avatar || 'https://via.placeholder.com/80'" alt="Avatar" width="80" height="80" :style="{ borderRadius: store.config.avatarRadius, display: 'block', border: '2px solid #282c34' }" />
        </td>
        
        <!-- Content Column -->
        <td valign="top">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <!-- Name Row -->
              <tr>
                <td style="font-size: 18px; font-weight: bold; color: #98c379;">
                  &gt; {{ store.profile.name }}<span style="animation: blink 1s step-end infinite;">_</span>
                </td>
              </tr>
              
              <!-- Role Row -->
              <tr>
                <td style="color: #abb2bf; padding-bottom: 5px;">
                  {{ store.profile.role }} <span style="color: #5c6370;">{{ store.profile.subRole }}</span>
                </td>
              </tr>
              
              <!-- Divider -->
              <tr>
                <td style="border-bottom: 1px dashed #5c6370; height: 10px; margin-bottom: 10px;"></td>
              </tr>
              <tr><td style="height: 10px;"></td></tr>

              <!-- Static Contact Info -->
              <tr>
                <td style="color: #abb2bf;">
                  <span style="color: #e5c07b;">Email:</span> 
                  <a :href="`mailto:${store.profile.email}`" style="color: #61afef; text-decoration: none; margin-left: 5px;">{{ store.profile.email }}</a>
                </td>
              </tr>
              <tr>
                <td style="color: #abb2bf;">
                  <span style="color: #e5c07b;">Web:</span> 
                  <a :href="store.profile.website" target="_blank" style="color: #61afef; text-decoration: none; margin-left: 5px;">{{ store.profile.website }}</a>
                </td>
              </tr>

              <!-- Dynamic Custom Rows -->
              <tr v-for="line in store.customLines" :key="line.id">
                <td style="color: #abb2bf;">
                  <span v-if="line.label" :style="{ color: line.labelColor || '#e5c07b', fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.label }}:</span>
                  <span :style="{ color: line.valueColor || line.color, marginLeft: line.label ? '5px' : '0px' }">
                    <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, textDecoration: 'underline' }">{{ line.value }}</a>
                    <span v-else>{{ line.value }}</span>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          
          <!-- Socials -->
          <tr v-if="store.socials.length > 0">
            <td style="padding-top: 10px;">
              <table cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td v-for="social in store.socials" :key="social.id" style="padding-right: 10px;">
                      <a :href="social.url" target="_blank" style="text-decoration: none; color: #98c379;">
                        [{{ social.type }}]
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'

const store = useSignatureStore()
</script>
