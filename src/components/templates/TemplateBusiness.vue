<template>
  <!-- 
    Business Style Signature Template
    Professional, blue accented, horizontal layout.
  -->
  <table cellpadding="0" cellspacing="0" border="0" style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4; color: #2c3e50;">
    <tbody>
      <tr>
        <!-- Avatar (Optional) -->
        <td v-if="store.config.showAvatar" valign="top" style="padding-right: 20px; width: 80px;">
          <img :src="store.profile.avatar || 'https://via.placeholder.com/80'" alt="Avatar" width="80" height="80" :style="{ borderRadius: store.config.avatarRadius, display: 'block' }" />
        </td>
        
        <!-- Vertical Divider (Only if Avatar is shown) -->
        <td v-if="store.config.showAvatar" style="border-right: 1px solid #cbd5e1; padding-right: 20px;"></td> <!-- Spacer -->
        
        <!-- Main Content (Adjust padding if no avatar) -->
        <td valign="top" :style="{ paddingLeft: store.config.showAvatar ? '20px' : '0px' }">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td style="font-size: 18px; font-weight: bold; color: #1e3a8a; padding-bottom: 2px;">
                  {{ store.profile.name }}
                </td>
              </tr>
              <tr>
                <td style="font-size: 13px; color: #64748b; padding-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px;">
                  {{ store.profile.role }}
                </td>
              </tr>
              <tr>
                <td style="font-size: 12px; color: #94a3b8; padding-bottom: 12px; font-style: italic;">
                  {{ store.profile.subRole }}
                </td>
              </tr>
              
              <!-- Contact Details Grid -->
              <tr>
                <td>
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tbody>
                      <tr>
                        <td style="padding-bottom: 4px;">
                          <span style="color: #1e3a8a; font-weight: bold; margin-right: 5px;">E:</span>
                          <a :href="`mailto:${store.profile.email}`" style="color: #334155; text-decoration: none;">{{ store.profile.email }}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-bottom: 4px;">
                          <span style="color: #1e3a8a; font-weight: bold; margin-right: 5px;">W:</span>
                          <a :href="store.profile.website" style="color: #334155; text-decoration: none;">{{ store.profile.website }}</a>
                        </td>
                      </tr>
                       <!-- Dynamic Custom Rows -->
                      <tr v-for="line in store.customLines" :key="line.id">
                        <td style="padding-bottom: 4px;">
                          <span v-if="line.label" :style="{ color: line.labelColor || '#1e3a8a', fontWeight: 'bold', marginRight: '5px' }">{{ line.label }}:</span>
                          <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal', textDecoration: 'underline' }">{{ line.value }}</a>
                          <span v-else :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              
              <!-- Socials (Icons-ish text) -->
              <tr v-if="store.socials.length > 0">
                 <td style="padding-top: 10px;">
                   <span v-for="(social, index) in store.socials" :key="social.id">
                     <a :href="social.url" style="color: #1e3a8a; text-decoration: none; font-size: 12px; font-weight: bold;">{{ social.type.toUpperCase() }}</a>
                     <span v-if="index < store.socials.length - 1" style="color: #cbd5e1; margin: 0 5px;">•</span>
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
