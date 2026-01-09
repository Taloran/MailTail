# MailTail — 邮件签名生成器

一个专为开发者和创意人士设计的 HTML 邮件签名生成器。基于 Vue 3 + Tailwind CSS 构建，拥有极其丰富的模板库，支持实时预览和一键复制兼容性良好的 HTML 代码。

![预览](./public/preview.png)

## ✨ 特性

- **🎨 丰富的模板库**: 内置 20+ 种精美模板，涵盖商务、极客、复古、科幻、森系、手绘等多种风格
- **⚙️ 深度定制**: 每个模板都有专属的定制选项（如 BIOS 版本、工程代号、免责声明等）
- **📧 兼容性优先**: 提供传统的 `<table>` 布局模板，确保 100% 兼容 Outlook/Gmail
- **✨ 现代设计**: 提供基于现代 CSS 的创意模板，视觉效果惊艳（适合 Web 邮箱用户）
- **➕ 动态字段**: 支持无限添加自定义行（例如 PGP Keys, Server Status, WeChat, GitHub 等）
- **🔒 隐私安全**: 纯前端应用，无后端存储，您的隐私数据绝对安全

## 🎯 模板预览

### 商务正式系列
- **Corporate Standard** - 传统企业风格
- **Executive Suite** - 高管专属，奢华品质
- **Swiss Design** - 瑞士国际主义，极简黑白
- **Legal Firm** - 法律事务所，带免责声明

### 极客开发系列
- **Terminal / Geek** - 终端命令行风格
- **Git Commit** - GitHub 提交记录样式
- **BIOS Retro** - 复古 DOS/BIOS 屏幕
- **Code Block** - IDE 代码编辑器主题

### 创意设计系列
- **Sci-Fi Holo** - 科幻全息投影 HUD
- **Eco Calm** - 自然森系，环保主题
- **My Journal** - 手账笔记，手写字体
- **RPG Character** - 游戏角色属性面板
- **Startup SaaS** - 现代科技公司
- **Social Influencer** - 社交媒体网红风
- **Classic News** - 古典报纸排版
- **Tech Blueprint** - 工程蓝图设计稿

## 🚀 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动开发服务器
```bash
npm run dev
```

### 3. 构建生产版本
```bash
npm run build
```

## 🤝 贡献指南

我们非常欢迎社区贡献新的模板！无论你是设计师还是开发者，都可以通过以下方式参与。

### 💡 我有设计想法

如果你有好的设计思路但不会写代码：
1. 请创建一个 [Issue](https://github.com/Taloran/MailTail/issues)
2. 附上设计草图（手绘、Figma 截图均可）
3. 描述该模板的**风格**（如"赛博朋克"）和**独特元素**（如"霓虹灯边框"）

### 💻 我想提交代码

如果你想自己实现一个新模板，请遵循以下步骤：

#### 1️⃣ 创建组件
在 `src/components/templates/` 目录下新建 `.vue` 文件，命名格式为 `Template[Name].vue`（例如 `TemplatePixel.vue`）。

#### 2️⃣ 选择你的流派

我们目前支持两种模板开发模式，请根据目标用户选择：

**A. 兼容优先模式 (Compatibility First)**
- **目标**: 企业用户、Outlook/老旧客户端用户
- **规则**:
  - 必须使用 `<table>` 布局
  - 禁止使用 Flexbox, Grid, Position, Transform
  - 所有样式必须内联（Inline Styles）
  - 参考: `TemplateMinimal.vue`, `TemplateCorporate.vue`

**B. 视觉优先模式 (Visual First)**
- **目标**: 创意人士、Web 邮箱用户（Gmail, Apple Mail）
- **规则**:
  - 可以使用 Flexbox, Tailwind CSS, Google Fonts
  - 可以使用 `border-radius`, `box-shadow`, `gradients`
  - 保持结构相对简单，避免过度复杂的 CSS 动画（部分邮箱不支持）
  - 参考: `TemplateHolo.vue`, `TemplateEco.vue`

#### 3️⃣ 数据绑定
所有模板必须通过 Pinia Store 获取数据：
```javascript
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()

// 使用: store.profile.name, store.profile.email 等
```

#### 4️⃣ 注册模板
1. 在 `src/components/TemplateGalleryModal.vue` 中引入并注册你的组件
2. 在 `src/views/Home.vue` 中添加它到 `templates` 列表
3. 如需专属配置选项，在 `templateOptions` 中添加

## ⚙️ 模板专属选项

如果你的模板需要特殊的配置（比如"RPG 模板"的"等级"），请：
1. 在 `src/stores/signature.js` 的 `config.templateOptions` 中添加默认值
2. 在 `src/views/Home.vue` 的 `<!-- Template Specific Options -->` 中添加对应的输入框

## 🛠️ 技术栈
- **Vue 3** (Composition API)
- **Vite** (构建工具)
- **Pinia** (状态管理)
- **Tailwind CSS** (样式框架)

## 📄 许可证
MIT License

## 🙏 致谢
感谢所有为这个项目做出贡献的开发者和设计师！

---

**期待你的创意！** 🚀

如有问题或建议，欢迎提交 [Issue](https://github.com/Taloran/MailTail/issues) 或 [Pull Request](https://github.com/Taloran/MailTail/pulls)。
