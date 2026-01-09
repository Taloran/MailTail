import { defineStore } from 'pinia'

export const useSignatureStore = defineStore('signature', {
  state: () => ({
    profile: {
      name: 'Alex Chen',
      role: 'Senior Software Engineer',
      subRole: '// Open Source Contributor', 
      email: 'alex.chen@example.com',
      website: 'https://example.com',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    },
    // 特性: 动态自定义行 (用户可增删)
    customLines: [
      { id: 1, label: 'WeChat', value: 'id_chat', url: '', labelColor: '#e5c07b', valueColor: '#abb2bf', bold: true }, // Fixed visibility for dark mode
      { id: 2, label: 'PGP', value: '0x11111111', url: 'https://keys.openpgp.org/', labelColor: '#98c379', valueColor: '#abb2bf', bold: false }
    ],
    socials: [],
    config: {
      templateId: 'terminal', // 默认选中终端模板
      primaryColor: '#98c379', // 终端绿
      secondaryColor: '#282c34', // 深色背景
      showAvatar: true,
      avatarRadius: '50%', // Default circle
      templateOptions: {
        git: {
          commitText: 'committed now',
          messageText: 'Wait... who renders?'
        },
        retro: {
          biosVendor: 'AWARD BIOS v6.00PG',
          copyRight: '1984-2024'
        },
        startup: {
          tagline: 'We’re hiring!'
        },
        social: {
          verified: true
        },
        classic: {
          masthead: 'THE DAILY NEWS',
          introText: 'An experienced professional dedicated to excellence. Contact details provided below for correspondence.'
        },
        blueprint: {
          projName: 'PROJECT: ALPHA'
        },
        rpg: {
          characterClass: 'Lvl 99 Code Wizard'
        },
        eco: {
          tagline: '100% Sustainable'
        },
        holo: {
          sector: 'SECTOR: MARS-01'
        },
        journal: {
          signOff: 'Best regards,'
        },
        swiss: {
          department: 'Global Strategy Division'
        },
        legal: {
          disclaimer: 'This message contains confidential information and is intended only for the individual named. If you are not the named addressee you should not disseminate, distribute or copy this e-mail.'
        }
      }
    }
  }),
  actions: {
    addCustomLine() {
      const id = Date.now()
      
      // Intelligent Color Selection based on Active Template
      // Returns [LabelColor, ValueColor]
      const getTemplateColors = (tid) => {
        switch(tid) {
            case 'geek': return ['#e5c07b', '#abb2bf']     // Gold / Grey
            case 'terminal': return ['#e5c07b', '#abb2bf'] // Gold / Grey
            case 'business': return ['#1e3a8a', '#334155'] // Blue / Slate
            case 'minimal': return ['#888888', '#333333']  // Light Grey / Dark Grey
            case 'elegant': return ['#1a1a1a', '#444444']  // Black / Dark Grey
            case 'creative': return ['#8b5cf6', '#4a5568'] // Purple / Slate
            case 'ribbon': return ['#2563eb', '#4b5563']   // Blue / Grey
            case 'signoff': return ['#94a3b8', '#475569']  // Light Grey / Dark Grey
            case 'cleantext': return ['#888888', '#111111'] // Grey / Black
            case 'compact': return ['#444444', '#444444']   // Grey / Grey
            default: return ['#333333', '#333333']
        }
      }
      
      const [defaultLabelColor, defaultValueColor] = getTemplateColors(this.config.templateId)

      this.customLines.push({
        id,
        label: '', // User requested no default label
        value: 'New Value',
        url: '', 
        labelColor: defaultLabelColor,
        valueColor: defaultValueColor,
        bold: false
      })
    },
    removeCustomLine(id) {
      this.customLines = this.customLines.filter(line => line.id !== id)
    },
    updateConfig(updates) {
      Object.assign(this.config, updates)
    }
  }
})
