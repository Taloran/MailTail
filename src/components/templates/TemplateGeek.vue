<template>
  <!-- 
    Geek / Root Style Template
    Based on user provided snippet. Dark mode card.
  -->
  <div>
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 450px; font-family: Consolas, 'Courier New', monospace; border-radius: 6px; overflow: hidden; background-color: #282c34;">
        <tbody>
            <tr>
                <!-- Left Icon Column -->
                <td width="60" align="center" valign="middle" style="background-color: #21252b; color: #98c379; font-size: 24px; font-weight: bold; border-right: 1px solid #181a1f;">
                    &gt;_
                </td>
                
                <!-- Main Content Column -->
                <td style="padding: 15px; vertical-align: middle;">
                    
                    <div style="margin-bottom: 6px;">
                        <span style="color: #ffffff; font-weight: bold; font-size: 16px;">{{ store.profile.name }}</span>
                        
                        <span style="color: #5c6370; font-size: 12px; display: inline-block; margin-left: 8px;">
                            {{ store.profile.role }}
                        </span>
                        </div>
                    
                    <div style="border-top: 1px solid #3e4451; width: 100%; height: 1px; font-size: 0; margin: 8px 0;"></div>

                    <div style="font-size: 12px; line-height: 1.6; color: #abb2bf;">
                        <!-- Email -->
                        <div>
                            <span style="color: #e06c75; font-weight: bold; width: 40px; display: inline-block;">mail</span> 
                            <a :href="`mailto:${store.profile.email}`" style="color: #abb2bf; text-decoration: none;">{{ store.profile.email }}</a>
                        </div>
                        <!-- Website -->
                        <div>
                            <span style="color: #61afef; font-weight: bold; width: 40px; display: inline-block;">web</span> 
                            <a :href="store.profile.website" style="color: #abb2bf; text-decoration: none;">{{ store.profile.website }}</a>
                        </div>
                        
                        <!-- Custom Rows -->
                        <div v-for="line in store.customLines" :key="line.id">
                            <span v-if="line.label" :style="{ color: line.labelColor || getColorForIndex(line.id), fontWeight: 'bold', minWidth: '65px', display: 'inline-block', paddingRight: '10px' }">{{ line.label.toLowerCase() }}</span> 
                            
                            <a v-if="line.url" :href="line.url" :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal', textDecoration: 'none' }">{{ line.value }}</a>
                            <span v-else :style="{ color: line.valueColor || line.color, fontWeight: line.bold ? 'bold' : 'normal' }">{{ line.value }}</span>
                        </div>
                        
                         <!-- Socials -->
                        <div v-for="social in store.socials" :key="social.id">
                            <span style="color: #d19a66; font-weight: bold; width: 40px; display: inline-block;">{{ social.type }}</span> 
                            <a :href="social.url" style="color: #abb2bf; text-decoration: none;">Link</a>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script setup>
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()

// Helper to cycle through geeky colors for custom labels
const colors = ['#e06c75', '#98c379', '#e5c07b', '#61afef', '#c678dd', '#56b6c2']
const getColorForIndex = (id) => {
    return colors[id % colors.length]
}
</script>
