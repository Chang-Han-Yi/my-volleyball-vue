# My Volleyball Vue (排球賽事後台管理系統)

本專案為一個基於 Vue 3 開發的排球賽事管理後台系統。前端採用純 Bootstrap 5 架構進行建置，以保持系統輕量與開發直覺。

## 一、 技術堆疊 (Tech Stack)

*   **核心框架**：[Vue 3](https://vuejs.org/) (Composition API)
*   **建置系統**：[Vite](https://vitejs.dev/)
*   **型別控制**：[TypeScript](https://www.typescriptlang.org/)
*   **路由管理**：[Vue Router 4](https://router.vuejs.org/)
*   **狀態管理**：[Pinia](https://pinia.vuejs.org/)
*   **UI 框架與佈局**：[Bootstrap 5](https://getbootstrap.com/) (負責所有網格、元件與 Margin/Padding Utilities)

## 二、 架構設計與開發規範 (Architecture & Guidelines)

### 1. 樣式載入管理
在 `src/main.ts` 中，統一載入 Bootstrap 的 CSS 與 JavaScript 依賴，以確保元件與網格系統能正常運作。

### 2. UI 框架開發規範
為了確保視覺語言一致：
*   **嚴禁手刻基礎 CSS**：排版（如上下間距、靠左靠右）強制依賴 Bootstrap Utility Classes（如 `.mb-3`, `.text-center`, `.d-flex`）。
*   **統一使用 Bootstrap 元件**：表單（Forms）、表格（Tables）、對話框（Modals）皆需採用 Bootstrap 預設的 Class 結構整合 Vue 資料綁定。

### 3. 後台目錄結構
*   `src/layouts/AdminLayout.vue`：全域後台母版，包含 Sidebar 與 Header。所有需套用後台版面的頁面，皆配置於此母版的 `<RouterView />` 之下。
*   `src/router/index.ts`：所有後台路徑皆收斂於 `/admin` 此一父路由（Parent Route）底下。

## 三、 環境建置 (Environment Setup)

### 1. 安裝系統套件
```bash
npm install
```

### 2. 啟動開發伺服器
包含 Hot-Reload 與基礎除錯功能。
```bash
npm run dev
```

### 3. 部署準備 (Type-Check & Build)
編譯並打包正式上線包裝。
```bash
npm run build
```
