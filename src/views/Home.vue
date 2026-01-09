<template>
  <div class="min-h-screen bg-gray-900 text-white flex">
    <!-- Left Panel: Editor -->
    <div class="w-1/3 bg-gray-800 p-6 overflow-y-auto border-r border-gray-700 font-mono">
      <h1 class="text-xl font-bold mb-6 text-green-400 text-center lg:text-left">&gt; Signature Config</h1>
      
      <!-- Template Selection Button -->
      <section class="mb-8">
        <label class="block text-xs uppercase tracking-wider text-gray-400 mb-2">Current Template</label>
        <button 
          @click="showGallery = true"
          class="w-full bg-gray-700 hover:bg-gray-600 text-white p-3 rounded flex justify-between items-center transition-colors border border-gray-600"
        >
          <span class="font-bold">{{ currentTemplateName }}</span>
          <span class="text-xs text-green-400 uppercase tracking-widest">[Change]</span>
        </button>
      </section>

      <!-- Profile Section -->
      <section class="mb-8">
        <h2 class="text-sm uppercase tracking-wider text-gray-400 mb-4 border-b border-gray-700 pb-1">Profile Info</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-xs text-gray-500 mb-1">Name</label>
            <input v-model="store.profile.name" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1">Role</label>
            <input v-model="store.profile.role" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1">Sub Role (Fun)</label>
            <input v-model="store.profile.subRole" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
          <div>
            <label class="block text-xs text-gray-500 mb-1">Email</label>
            <input v-model="store.profile.email" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
             <div>
            <label class="block text-xs text-gray-500 mb-1">Website</label>
            <input v-model="store.profile.website" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
          <div>
             <label class="block text-xs text-gray-500 mb-1">Avatar URL</label>
             <input v-model="store.profile.avatar" type="text" class="w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-green-500 text-sm" />
          </div>
          <div class="flex items-center gap-2" :class="templateCapabilities.avatar ? 'opacity-100' : 'opacity-40 grayscale pointer-events-none'">
            <input 
              v-model="store.config.showAvatar" 
              type="checkbox" 
              id="showAvatar" 
              class="accent-green-500" 
              :disabled="!templateCapabilities.avatar"
            />
            <label for="showAvatar" class="text-sm cursor-pointer select-none">Show Avatar {{ !templateCapabilities.avatar ? '(Not supported)' : '' }}</label>
          </div>
          
          <!-- Avatar Shape Configuration -->
          <div v-if="store.config.showAvatar" class="pl-6 transition-all duration-300">
             <label class="block text-[10px] text-gray-500 mb-1">Avatar Shape</label>
             <div class="flex bg-gray-900 rounded p-1 border border-gray-700">
               <button 
                 v-for="radius in [{ name: 'Circle', val: '50%' }, { name: 'Rounded', val: '8px' }]"
                 :key="radius.name"
                 @click="store.config.avatarRadius = radius.val"
                 class="flex-1 text-xs py-1 rounded transition-colors"
                 :class="store.config.avatarRadius === radius.val ? 'bg-gray-700 text-white font-bold' : 'text-gray-500 hover:text-gray-300'"
               >
                 {{ radius.name }}
               </button>
             </div>
          </div>
        </div>
      </section>

      <!-- Template Specific Options -->
      <section v-if="['git', 'retro', 'startup', 'social', 'classic', 'blueprint', 'rpg', 'eco', 'holo', 'journal', 'swiss', 'legal'].includes(store.config.templateId)" class="mb-4 bg-gray-900 border border-gray-700 rounded-lg p-3">
        <h2 class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
           <span>⚡ Template Options</span>
        </h2>
        
        <!-- Git Options -->
        <div v-if="store.config.templateId === 'git'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Commit Time Text</label>
              <input v-model="store.config.templateOptions.git.commitText" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-green-500 transition-colors" />
           </div>
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Status Message (Top Right)</label>
              <input v-model="store.config.templateOptions.git.messageText" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-green-500 transition-colors" />
           </div>
        </div>

        <!-- Retro Options -->
        <div v-if="store.config.templateId === 'retro'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">BIOS Vendor Name</label>
              <input v-model="store.config.templateOptions.retro.biosVendor" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-green-500 transition-colors" />
           </div>
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Copyright Years</label>
              <input v-model="store.config.templateOptions.retro.copyRight" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-green-500 transition-colors" />
           </div>
        </div>

        <!-- Startup Options -->
        <div v-if="store.config.templateId === 'startup'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Top Right Tagline</label>
              <input v-model="store.config.templateOptions.startup.tagline" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-indigo-500 transition-colors" />
           </div>
        </div>

        <!-- Social Options -->
        <div v-if="store.config.templateId === 'social'" class="space-y-3">
           <div class="flex items-center gap-2">
              <input type="checkbox" v-model="store.config.templateOptions.social.verified" class="accent-blue-500" id="socialVerified" />
              <label for="socialVerified" class="text-xs text-gray-300 select-none cursor-pointer">Show Verified Badge (Blue Tick)</label>
           </div>
        </div>

        <!-- Classic Options -->
        <div v-if="store.config.templateId === 'classic'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Newspaper Masthead</label>
              <input v-model="store.config.templateOptions.classic.masthead" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-gray-500 transition-colors" />
           </div>
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Intro Text Body</label>
              <textarea v-model="store.config.templateOptions.classic.introText" rows="3" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-[10px] text-gray-300 focus:border-gray-500 transition-colors resize-none"></textarea>
           </div>
        </div>

        <!-- Blueprint Options -->
        <div v-if="store.config.templateId === 'blueprint'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Project Code Name</label>
              <input v-model="store.config.templateOptions.blueprint.projName" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-blue-500 transition-colors" />
           </div>
        </div>

        <!-- RPG Options -->
        <div v-if="store.config.templateId === 'rpg'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Character Class / Level</label>
              <input v-model="store.config.templateOptions.rpg.characterClass" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-yellow-600 transition-colors" />
           </div>
        </div>

        <!-- Eco Options -->
        <div v-if="store.config.templateId === 'eco'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Eco Badge Text</label>
              <input v-model="store.config.templateOptions.eco.tagline" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-green-600 transition-colors" />
           </div>
        </div>

        <!-- Holo Options -->
        <div v-if="store.config.templateId === 'holo'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Sector / Zone ID</label>
              <input v-model="store.config.templateOptions.holo.sector" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-cyan-500 transition-colors" />
           </div>
        </div>

        <!-- Journal Options -->
        <div v-if="store.config.templateId === 'journal'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Sign Off (Footer)</label>
              <input v-model="store.config.templateOptions.journal.signOff" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-gray-500 transition-colors" />
           </div>
        </div>

        <!-- Swiss Options -->
        <div v-if="store.config.templateId === 'swiss'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-gray-500 mb-1">Department / Division text</label>
              <input v-model="store.config.templateOptions.swiss.department" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs text-gray-300 focus:border-red-600 transition-colors" />
           </div>
        </div>

        <!-- Legal Options -->
        <div v-if="store.config.templateId === 'legal'" class="space-y-3">
           <div>
              <label class="block text-[10px] text-red-400 mb-1 font-bold">Confidentiality Disclaimer</label>
              <textarea v-model="store.config.templateOptions.legal.disclaimer" rows="4" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-[10px] text-gray-300 focus:border-gray-500 transition-colors resize-none leading-tight"></textarea>
           </div>
        </div>
      </section>

      <!-- Custom Rows Section -->
      <section class="mb-8">
        <div class="flex justify-between items-center mb-4 border-b border-gray-700 pb-1">
          <h2 class="text-sm uppercase tracking-wider text-gray-400">Custom Lines</h2>
          <button @click="store.addCustomLine" class="text-xs bg-green-900 text-green-300 px-2 py-1 rounded hover:bg-green-800 transition-colors">+ Add</button>
        </div>
        
        <div class="space-y-3">
          <div v-for="(line, index) in store.customLines" :key="line.id" class="p-3 bg-gray-900 rounded border border-gray-700 group relative">
             <button @click="store.removeCustomLine(line.id)" class="absolute top-1 right-1 text-gray-600 hover:text-red-400 text-lg leading-none">&times;</button>
             
             <div class="grid grid-cols-2 gap-2 mb-2">
               <div>
                  <label class="block text-[10px] text-gray-500">Label</label>
                  <input v-model="line.label" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs focus:border-green-500" placeholder="e.g. GitHub" />
               </div>
               <div>
                  <label class="block text-[10px] text-gray-500">Value</label>
                  <input v-model="line.value" class="w-full bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs focus:border-green-500" placeholder="Text to show" />
               </div>
             </div>

             <!-- URL Input -->
             <div class="mb-2">
                <label class="block text-[10px] text-gray-500">Link URL (Optional)</label>
                <div class="flex items-center bg-gray-800 border border-gray-700 rounded px-2">
                   <span class="text-gray-500 text-xs mr-1">🔗</span>
                   <input v-model="line.url" class="w-full bg-transparent py-1 text-xs focus:outline-none text-green-400" placeholder="https://..." />
                </div>
             </div>
             
             <div class="flex gap-2 items-center">
               <div class="flex-1 grid grid-cols-2 gap-2">
                 <!-- Label Color -->
                 <div>
                    <label class="block text-[10px] text-gray-500">Label Color</label>
                    <div class="flex items-center gap-2 bg-gray-800 rounded px-2 py-1 border border-gray-700">
                      <input type="color" v-model="line.labelColor" class="w-4 h-4 rounded-full overflow-hidden border-none p-0 bg-transparent" />
                      <span class="text-[10px] text-gray-400 font-mono">{{ line.labelColor }}</span>
                    </div>
                 </div>
                 <!-- Value Color -->
                 <div>
                    <label class="block text-[10px] text-gray-500">Value Color</label>
                    <div class="flex items-center gap-2 bg-gray-800 rounded px-2 py-1 border border-gray-700">
                      <input type="color" v-model="line.valueColor" class="w-4 h-4 rounded-full overflow-hidden border-none p-0 bg-transparent" />
                      <span class="text-[10px] text-gray-400 font-mono">{{ line.valueColor }}</span>
                    </div>
                 </div>
               </div>
                <div class="flex items-center gap-1 mt-4">
                  <input type="checkbox" v-model="line.bold" class="accent-green-500" />
                  <span class="text-xs text-gray-400">Bold</span>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>

    <!-- Right Panel: Preview -->
    <div class="w-2/3 bg-gray-950 flex flex-col justify-center items-center relative p-4"> <!-- Reduced padding p-10 -> p-4 -->
      <div class="absolute top-6 right-6 flex gap-2">
        <!-- GitHub Repo -->
        <a href="https://github.com/Taloran/MailTail" target="_blank" class="bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 px-3 py-2 rounded shadow text-xs font-mono transition-all flex items-center justify-center" title="View on GitHub">
           <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
           </svg>
        </a>
        <!-- Copy Source Button -->
        <button @click="copy(false)" class="bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-600 px-3 py-2 rounded shadow text-xs font-mono transition-all">
           {{ copiedSource ? 'Copied Src!' : 'Copy Code </> '}}
        </button>
        <!-- Copy Rendered Button -->
        <button @click="copy(true)" class="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded shadow-lg font-mono text-sm transition-all flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
           </svg>
           <span v-if="copiedRendered">Copied!</span>
           <span v-else>Copy Signature</span>
        </button>
      </div>

      <div class="mb-4 text-gray-500 text-sm font-mono">Real-time Preview</div>
      
      <!-- Preview Container -->
      <div ref="previewRef" class="bg-white p-4 rounded shadow-2xl max-w-3xl w-full flex justify-start items-start overflow-auto min-h-[300px]">
         <component :is="activeTemplate" />
      </div>
    
      <div class="mt-8 text-gray-600 text-xs text-center max-w-md">
        <p class="mb-2 text-green-400 font-bold">How to use:</p>
        <p class="mb-1">1. Click <span class="text-white bg-green-900 px-1 rounded">Copy Signature</span></p>
        <p>2. Paste directly into Gmail/Outlook settings (Ctrl+V)</p>
        <p class="mt-2 text-gray-600 italic">If you need the raw HTML code, use "Copy Code".</p>
      </div>
    </div>

    <!-- Template Gallery Modal -->
    <TemplateGalleryModal 
      v-if="showGallery" 
      :activeI="store.config.templateId"
      @close="showGallery = false"
      @select="selectTemplate"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSignatureStore } from '../stores/signature'
import TemplateGalleryModal from '../components/TemplateGalleryModal.vue'
import TemplateTerminal from '../components/templates/TemplateTerminal.vue'
import TemplateMinimal from '../components/templates/TemplateMinimal.vue'
import TemplateBusiness from '../components/templates/TemplateBusiness.vue'
import TemplateCleanText from '../components/templates/TemplateCleanText.vue'
import TemplateCompact from '../components/templates/TemplateCompact.vue'
import TemplateGeek from '../components/templates/TemplateGeek.vue'
import TemplateElegant from '../components/templates/TemplateElegant.vue'
import TemplateCreative from '../components/templates/TemplateCreative.vue'
import TemplateRibbon from '../components/templates/TemplateRibbon.vue'
import TemplateSignoff from '../components/templates/TemplateSignoff.vue'
import TemplateGlitch from '../components/templates/TemplateGlitch.vue'
import TemplateCodeBlock from '../components/templates/TemplateCodeBlock.vue'
import TemplatePop from '../components/templates/TemplatePop.vue'
import TemplateGlass from '../components/templates/TemplateGlass.vue'
import TemplateCorporate from '../components/templates/TemplateCorporate.vue'
import TemplateExecutive from '../components/templates/TemplateExecutive.vue'
import TemplateGit from '../components/templates/TemplateGit.vue'
import TemplateRetro from '../components/templates/TemplateRetro.vue'
import TemplateStartup from '../components/templates/TemplateStartup.vue'
import TemplateSocial from '../components/templates/TemplateSocial.vue'
import TemplateClassic from '../components/templates/TemplateClassic.vue'
import TemplateBlueprint from '../components/templates/TemplateBlueprint.vue'
import TemplateRPG from '../components/templates/TemplateRPG.vue'
import TemplateEco from '../components/templates/TemplateEco.vue'
import TemplateHolo from '../components/templates/TemplateHolo.vue'
import TemplateJournal from '../components/templates/TemplateJournal.vue'
import TemplateSwiss from '../components/templates/TemplateSwiss.vue'
import TemplateLegal from '../components/templates/TemplateLegal.vue'

const store = useSignatureStore()
const previewRef = ref(null)
const showGallery = ref(false)
const copiedRendered = ref(false)
const copiedSource = ref(false)

const templates = [
  { id: 'pop', name: 'Retro Pop' },
  { id: 'glass', name: 'Modern Glass' },
  { id: 'geek', name: 'Geek / Root' },
  { id: 'glitch', name: 'Cyberpunk Glitch' },
  { id: 'codeblock', name: 'Code Block' },
  { id: 'terminal', name: 'Legacy Terminal' },
  { id: 'minimal', name: 'Minimal' },
  { id: 'business', name: 'Business' },
  { id: 'corporate', name: 'Corporate Standard' },
  { id: 'executive', name: 'Executive Suite' },
  { id: 'git', name: 'Git Commit' },
  { id: 'retro', name: 'BIOS Retro' },
  { id: 'startup', name: 'Startup SaaS' },
  { id: 'social', name: 'Social Influencer' },
  { id: 'classic', name: 'Classic News' },
  { id: 'blueprint', name: 'Tech Blueprint' },
  { id: 'rpg', name: 'RPG Character' },
  { id: 'eco', name: 'Eco Calm' },
  { id: 'holo', name: 'Sci-Fi Holo' },
  { id: 'journal', name: 'My Journal' },
  { id: 'swiss', name: 'Swiss Design' },
  { id: 'legal', name: 'Legal Firm' },
  { id: 'elegant', name: 'Elegant Serif' },
  { id: 'creative', name: 'Creative Card' },
  { id: 'ribbon', name: 'Ribbon Bar' },
  { id: 'signoff', name: 'Handwritten Signoff' },
  { id: 'cleantext', name: 'Clean Text' },
  { id: 'compact', name: 'Compact' }
]

const currentTemplateName = computed(() => {
  const t = templates.find(t => t.id === store.config.templateId)
  return t ? t.name : 'Unknown'
})

const activeTemplate = computed(() => {
  switch (store.config.templateId) {
    case 'geek': return TemplateGeek
    case 'minimal': return TemplateMinimal
    case 'business': return TemplateBusiness
    case 'corporate': return TemplateCorporate
    case 'executive': return TemplateExecutive
    case 'git': return TemplateGit
    case 'retro': return TemplateRetro
    case 'startup': return TemplateStartup
    case 'social': return TemplateSocial
    case 'classic': return TemplateClassic
    case 'blueprint': return TemplateBlueprint
    case 'rpg': return TemplateRPG
    case 'eco': return TemplateEco
    case 'holo': return TemplateHolo
    case 'journal': return TemplateJournal
    case 'swiss': return TemplateSwiss
    case 'legal': return TemplateLegal
    case 'elegant': return TemplateElegant
    case 'creative': return TemplateCreative
    case 'ribbon': return TemplateRibbon
    case 'signoff': return TemplateSignoff
    case 'cleantext': return TemplateCleanText
    case 'compact': return TemplateCompact
    case 'glitch': return TemplateGlitch
    case 'codeblock': return TemplateCodeBlock
    case 'pop': return TemplatePop
    case 'glass': return TemplateGlass
    default: return TemplateTerminal
  }
})

// Template Capabilities Configuration
const templateCapabilities = computed(() => {
  const id = store.config.templateId
  return {
    avatar: ['terminal', 'minimal', 'business', 'corporate', 'executive', 'git', 'retro', 'startup', 'social', 'classic', 'blueprint', 'rpg', 'eco', 'holo', 'journal', 'swiss', 'legal', 'elegant', 'creative', 'glitch', 'pop', 'glass'].includes(id),
    // Add more if needed in future
  }
})

const selectTemplate = (id) => {
  store.updateConfig({ templateId: id })
  showGallery.value = false
}

// Improved Copy Functionality
const copy = async (asRendered) => {
  if (!previewRef.value) return

  if (asRendered) {
    // Copy as Rich Text / HTML (for pasting into Visual Editors like Gmail)
    try {
      const blobHtml = new Blob([previewRef.value.innerHTML], { type: 'text/html' });
      const blobText = new Blob([previewRef.value.innerText], { type: 'text/plain' });
      
      const item = new ClipboardItem({
        'text/html': blobHtml,
        'text/plain': blobText
      });
      
      await navigator.clipboard.write([item]);
      copiedRendered.value = true
      setTimeout(() => copiedRendered.value = false, 2000)
    } catch (err) {
      console.error('Copy failed', err)
      alert("Copy failed. Your browser might not support this feature.")
    }
  } else {
    // Copy as Source Code (Strings)
    navigator.clipboard.writeText(previewRef.value.innerHTML).then(() => {
      copiedSource.value = true
      setTimeout(() => copiedSource.value = false, 2000)
    })
  }
}
</script>
