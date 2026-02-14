# Personal Resume Website

基于 **Next.js 16 + TypeScript + Material-UI** 构建的个人简历/作品集网站，采用单页应用（SPA）架构，展示个人职业经历与技术能力。

## 核心功能

- **中英文双语支持** — 通过 React Context 实现语言切换，语言偏好持久化于 localStorage
- **响应式设计** — 移动端优先，适配多种屏幕尺寸，移动端配有抽屉式导航菜单
- **动画与视觉效果** — 淡入动画、悬浮效果、渐变背景、毛玻璃导航栏等
- **Docker 容器化部署** — 多阶段构建，使用 Alpine 镜像，以非 root 用户运行

## 页面模块

| 模块       | 说明                                    |
| ---------- | --------------------------------------- |
| Hero       | 首屏展示区，含个人头像、简介与 CTA 按钮 |
| About      | 个人介绍与特色卡片                      |
| Experience | 工作经历与职责详情                      |
| Skills     | 技术栈分类展示，带进度条                |
| Resume     | PDF 简历预览与下载                      |
| Contact    | 联系方式（GitHub、LinkedIn、Email）     |

## 技术栈

- **框架**: Next.js 16 (App Router) + React 19
- **语言**: TypeScript 5（严格模式）
- **UI 库**: Material-UI v7 + Emotion
- **部署**: Docker + Docker Compose
- **字体**: Geist（通过 next/font 优化加载）

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── components/         # React 组件
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 主页面
│   ├── providers.tsx       # Context Providers
│   └── globals.css         # 全局样式
├── src/
│   ├── context/            # 语言切换 Context
│   ├── locales/            # 中英文翻译文件 (en.json / zh.json)
│   └── theme.ts            # MUI 主题配置
├── public/                 # 静态资源（头像、简历 PDF 等）
├── Dockerfile              # 多阶段 Docker 构建
└── docker-compose.yml      # Docker Compose 配置
```

## 快速开始

### 本地开发

```bash
npm install
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果，修改 `app/page.tsx` 即可实时预览更新。

### Docker 部署

```bash
docker compose up -d
```

访问 [http://localhost:3001](http://localhost:3001) 查看生产环境效果。
