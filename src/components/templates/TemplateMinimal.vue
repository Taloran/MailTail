<template>
  <!-- 
    Minimal Style Signature Template
    Clean, whitespace-heavy, no avatars by default (can be toggled).
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 1.6; color: #333333;">
    <tbody>
      <tr>
        <!-- Avatar (Optional via Store) -->
        <td v-if="store.config.showAvatar" valign="top" style="padding-right: 15px; width: 60px;">
          <img :src="store.profile.avatar || 'https://via.placeholder.com/60'" alt="Avatar" width="60" height="60" :style="{ borderRadius: store.config.avatarRadius, display: 'block' }" />
        </td>
        <td valign="top">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td valign="top" style="padding-bottom: 4px;">
                  <span style="font-weight: 700; font-size: 16px; color: #000;">{{ store.profile.name }}</span>
                  <span style="color: #888; margin: 0 8px;">|</span>
                  <span style="color: #555;">{{ store.profile.role }}</span>
                </td>
              </tr>
              <tr>
                <td style="padding-bottom: 12px; font-size: 13px; color: #666; font-style: italic;">
                  {{ store.profile.subRole }}
                </td>
              </tr>
              <!-- Custom Rows (Minimal list) -->
              <tr v-if="store.customLines.length > 0">
                <td style="padding-bottom: 8px;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      <tr v-for="line in store.customLines" :key="line.id">
                        <td v-if="line.label" :style="{ paddingRight: '10px', color: line.labelColor || '#888', fontSize: '12px' }">{{ line.label }}</td>
                        <td :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal', fontSize: '13px' }">
                          <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, textDecoration: 'underline' }">{{ line.value }}</a>
                          <span v-else>{{ line.value }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <!-- Contact & Socials -->
              <tr>
                <td style="border-top: 2px solid #000; padding-top: 8px;">
                  <a :href="`mailto:${store.profile.email}`" style="color: #000; text-decoration: none; font-weight: 600; margin-right: 15px;">{{ store.profile.email }}</a>
                  <a :href="store.profile.website" style="color: #000; text-decoration: none; margin-right: 15px;">Website</a>
                  
                  <span v-for="social in store.socials" :key="social.id" style="margin-right: 10px;">
                    <a :href="social.url" style="color: #666; text-decoration: none;">{{ social.type }}</a>
                  </span>
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
