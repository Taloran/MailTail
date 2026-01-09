<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" @click.self="$emit('close')">
    <!-- Modal Content -->
    <div class="bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col overflow-hidden relative" @click.stop>
      <!-- Header -->
      <div class="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-900">
        <h2 class="text-xl font-bold text-white">Choose a Template ({{ templates.length }})</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-white">&times;</button>
      </div>
      
      <!-- Grid Content -->
      <div class="flex-1 overflow-y-auto p-6 bg-gray-800 gallery-optimization-root" style="will-change: transform;">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8" style="transform: translateZ(0);">
             <div 
               v-for="t in paginatedTemplates" 
               :key="t.id"
               @click="$emit('select', t.id)"
               class="border-2 rounded cursor-pointer transition-all hover:scale-[1.02] relative bg-white flex flex-col overflow-hidden h-64 group isolate"
               :class="activeId === t.id ? 'border-green-500 ring-2 ring-green-500/20' : 'border-gray-600 hover:border-gray-400'"
             >
              <!-- Live Preview Container -->
              <div class="flex-1 bg-white overflow-hidden relative w-full flex items-center justify-center p-4">
                  <!-- Scaled Wrapper for Preview -->
                  <div class="transform scale-75 origin-center pointer-events-none select-none">
                     <component :is="componentMap[t.id]" />
                  </div>
                  
                  <!-- Hover Overlay -->
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
              </div>
              
              <!-- Footer Label -->
              <div class="bg-gray-900 p-3 border-t border-gray-200">
                 <div class="flex justify-between items-center">
                    <span class="font-bold text-white text-sm">{{ t.name }}</span>
                    <span v-if="activeId === t.id" class="text-xs text-green-400 font-mono">[SELECTED]</span>
                 </div>
                 <div class="text-xs text-gray-400 mt-1 truncate">{{ t.desc }}</div>
              </div>
             </div>
        </div>
      </div>

      <!-- Pagination Footer -->
      <div class="p-4 border-t border-gray-700 bg-gray-900 flex justify-between items-center">
         <span class="text-gray-400 text-sm">Page {{ currentPage }} of {{ totalPages }}</span>
         <div class="flex gap-2">
            <button 
              @click="prevPage" 
              :disabled="currentPage === 1"
              class="px-3 py-1 bg-gray-700 rounded text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
            >
              &larr; Prev
            </button>
            <button 
              @click="nextPage" 
              :disabled="currentPage === totalPages"
              class="px-3 py-1 bg-gray-700 rounded text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600"
            >
              Next &rarr;
            </button>
         </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSignatureStore } from '../stores/signature'
import { ref, computed, watch, onMounted } from 'vue'
import TemplateTerminal from './templates/TemplateTerminal.vue'
import TemplateMinimal from './templates/TemplateMinimal.vue'
import TemplateBusiness from './templates/TemplateBusiness.vue'
import TemplateCleanText from './templates/TemplateCleanText.vue'
import TemplateCompact from './templates/TemplateCompact.vue'
import TemplateGeek from './templates/TemplateGeek.vue'
import TemplateElegant from './templates/TemplateElegant.vue'
import TemplateCreative from './templates/TemplateCreative.vue'
import TemplateRibbon from './templates/TemplateRibbon.vue'
import TemplateSignoff from './templates/TemplateSignoff.vue'
import TemplateGlitch from './templates/TemplateGlitch.vue'
import TemplateCodeBlock from './templates/TemplateCodeBlock.vue'
import TemplatePop from './templates/TemplatePop.vue'
import TemplateGlass from './templates/TemplateGlass.vue'
import TemplateCorporate from './templates/TemplateCorporate.vue'
import TemplateExecutive from './templates/TemplateExecutive.vue'
import TemplateGit from './templates/TemplateGit.vue'
import TemplateRetro from './templates/TemplateRetro.vue'
import TemplateStartup from './templates/TemplateStartup.vue'
import TemplateSocial from './templates/TemplateSocial.vue'
import TemplateClassic from './templates/TemplateClassic.vue'
import TemplateBlueprint from './templates/TemplateBlueprint.vue'
import TemplateRPG from './templates/TemplateRPG.vue'
import TemplateEco from './templates/TemplateEco.vue'
import TemplateHolo from './templates/TemplateHolo.vue'
import TemplateJournal from './templates/TemplateJournal.vue'
import TemplateSwiss from './templates/TemplateSwiss.vue'
import TemplateLegal from './templates/TemplateLegal.vue'

defineProps({
  activeId: String
})

const emit = defineEmits(['select', 'close'])

const templates = [
  { id: 'pop', name: 'Retro Pop', desc: '90s Memphis style with bold colors.' },
  { id: 'glass', name: 'Modern Glass', desc: 'Frosted glassmorphism effect.' },
  { id: 'git', name: 'Git Commit', desc: 'Code commit history style.' },
  { id: 'retro', name: 'BIOS Retro', desc: 'Old school blue screen BIOS.' },
  { id: 'startup', name: 'Startup SaaS', desc: 'Modern tech company vibe.' },
  { id: 'social', name: 'Social Influencer', desc: 'Instagram style profile.' },
  { id: 'classic', name: 'Classic News', desc: 'Vintage newspaper look.' },
  { id: 'blueprint', name: 'Tech Blueprint', desc: 'Engineering schematic grid.' },
  { id: 'rpg', name: 'RPG Character', desc: 'Game stat sheet. Lvl 99.' },
  { id: 'eco', name: 'Eco Calm', desc: 'Organic green sustainability.' },
  { id: 'holo', name: 'Sci-Fi Holo', desc: 'Futuristic HUD interface.' },
  { id: 'journal', name: 'My Journal', desc: 'Handwritten sticky note.' },
  { id: 'swiss', name: 'Swiss Design', desc: 'Minimalist typographic grid.' },
  { id: 'legal', name: 'Legal Firm', desc: 'Formal with disclaimer footer.' },
  { id: 'geek', name: 'Geek / Root', desc: 'Dark mode terminal aesthetic for devs.' },
  { id: 'glitch', name: 'Cyberpunk Glitch', desc: 'Neon RGB split effects. Warning: Loud.' },
  { id: 'codeblock', name: 'Code Block', desc: 'IDE theme with syntax highlighting.' },
  { id: 'terminal', name: 'Legacy Terminal', desc: 'Classic monospace styling.' },
  { id: 'minimal', name: 'Minimal', desc: 'Clean, airy, and professional.' },
  { id: 'business', name: 'Business', desc: 'Corporate blue with strong hierarchy.' },
  { id: 'corporate', name: 'Corporate Standard', desc: 'Reliable, traditional layout.' },
  { id: 'executive', name: 'Executive Suite', desc: 'Premium serif branding.' },
  { id: 'elegant', name: 'Elegant Serif', desc: 'Sophisticated classic style.' },
  { id: 'creative', name: 'Creative Card', desc: 'Modern card with vibrant accents.' },
  { id: 'ribbon', name: 'Ribbon Bar', desc: 'Bold header bar. High impact, no avatar.' },
  { id: 'signoff', name: 'Handwritten Signoff', desc: 'Personal touch with script font.' },
  { id: 'cleantext', name: 'Clean Text', desc: 'Typography focus, no images.' },
  { id: 'compact', name: 'Compact', desc: 'Dense single-line layout.' }
]

const componentMap = {
  pop: TemplatePop,
  glass: TemplateGlass,
  git: TemplateGit,
  retro: TemplateRetro,
  startup: TemplateStartup,
  social: TemplateSocial,
  classic: TemplateClassic,
  blueprint: TemplateBlueprint,
  rpg: TemplateRPG,
  eco: TemplateEco,
  holo: TemplateHolo,
  journal: TemplateJournal,
  swiss: TemplateSwiss,
  legal: TemplateLegal,
  geek: TemplateGeek,
  glitch: TemplateGlitch,
  codeblock: TemplateCodeBlock,
  terminal: TemplateTerminal,
  minimal: TemplateMinimal,
  business: TemplateBusiness,
  corporate: TemplateCorporate,
  executive: TemplateExecutive,
  elegant: TemplateElegant,
  creative: TemplateCreative,
  ribbon: TemplateRibbon,
  signoff: TemplateSignoff,
  cleantext: TemplateCleanText,
  compact: TemplateCompact
}

// Pagination & Optimization state
const pageSize = 6;
const currentPage = ref(1);
const totalPages = computed(() => Math.ceil(templates.length / pageSize));
const paginatedTemplates = computed(() => templates.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize));

// Removed computed slice since we iterate all templates now
const prevPage = () => { if (currentPage.value > 1) currentPage.value--; };
const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++; };

const select = (id) => {
  emit('select', id)
}
</script>
