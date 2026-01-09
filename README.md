# Vue Email Signature Generator

一个专为开发者和创意人士设计的 HTML 邮件签名生成器。基于 Vue 3 + Tailwind CSS 构建，拥有极其丰富的模板库，支持实时预览和一键复制兼容性良好的 HTML 代码。

![Demo](https://mail-tail.vercel.app)

## 特性 (Features)

- **Rich Gallery**: 内置 15+ 种精美模板，涵盖 商务、极客、复古、科幻、森系、手绘 等多种风格。
- **Deep Customization**: 每个模板都有专属的定制选项 (如 BIOS 版本、工程代号、免责声明等)。
- **Terminal & Minimal**: 提供传统的 `<table>` 布局模板，确保 100% 兼容 Outlook/Gmail。
- **Modern Designs**: 提供基于现代 CSS 的创意模板，视觉效果惊艳 (适合 Web 邮箱用户)。
- **Dynamic Rows**: 支持无限添加自定义行 (例如 PGP Keys, Server Status, WeChat, GitHub 等)。
- **Data Safety**: 纯前端应用，无后端存储，您的隐私数据绝对安全。

## 快速开始 (Quick Start)

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

---

## 贡献指南 (Contribution Guide)

我们非常欢迎社区贡献新的模板！无论你是设计师还是开发者，都可以通过以下方式参与。

### 我有设计想法 (Design Ideas)

如果你有好的设计思路但不会写代码：
1. 请创建一个 Issue。
2. 附上设计草图（手绘、Figma截图均可）。
3. 描述该模板的 **风格** (如 "赛博朋克") 和 **独特元素** (如 "霓虹灯边框")。

### 我想提交代码 (Pull Requests)

如果你想自己实现一个新模板，请遵循以下步骤：

#### 1. 创建组件
在 `src/components/templates/` 目录下新建 `.vue` 文件，命名格式为 `Template[Name].vue` (例如 `TemplatePixel.vue`)。

#### 2. 选择你的流派 (Choose Your Style)

我们目前支持两种模板开发模式，请根据目标用户选择：

**A. 兼容优先模式 (Compatibility First)**
*   **目标**: 企业用户、Outlook/老旧客户端用户。
*   **规则**:
    *   必须使用 `<table>` 布局。
    *   禁止使用 Flexbox, Grid, Position, Transform。
    *   所有样式必须内联 (Inline Styles)。
    *   参考: `TemplateMinimal.vue`, `TemplateCorporate.vue`。

**B. 视觉优先模式 (Visual First)**
*   **目标**: 创意人士、Web 邮箱用户 (Gmail, Apple Mail)。
*   **规则**:
    *   可以使用 Flexbox, Tailwind CSS, Google Fonts。
    *   可以使用 `border-radius`, `box-shadow`, `gradients`。
    *   保持结构相对简单，避免过度复杂的 CSS 动画 (部分邮箱不支持)。
    *   参考: `TemplateHolo.vue`, `TemplateEco.vue`。

#### 3. 数据绑定
所有模板必须通过 Pinia Store 获取数据：
```javascript
import { useSignatureStore } from '../../stores/signature'
const store = useSignatureStore()

// 使用: store.profile.name, store.profile.email 等
```

#### 4. 注册模板
1.  在 `src/components/TemplateGalleryModal.vue` 中引入并注册你的组件。
2.  在 `src/views/Home.vue` 中添加它到 `templates` 列表，并根据需要添加专属的配置选项 (在 `templateOptions` 中)。

---

## 模板专属选项 (Unique Options)

如果你的模板需要特殊的配置（比如 "RPG 模板" 的 "等级"），请：
1.  在 `src/stores/signature.js` 的 `config.templateOptions` 中添加默认值。
2.  在 `src/views/Home.vue` 的 `<section> <!-- Template Specific Options -->` 中添加对应的输入框。

---

## 技术栈 (Stack)
- Vue 3 (Script Setup)
- Vite
- Pinia (State Management)
- Tailwind CSS

期待你的创意！🚀
