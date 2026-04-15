<script setup lang="ts">
import { ref } from 'vue'

// 定義表單資料綁定模型，這也將是未來 API 傳送的 Payload 結構
const postForm = ref({
  title: '',
  category: 'news',
  status: 'draft',
  content: '',
  isPinned: false
})

const submitPost = () => {
  // 開發測試用，確認資料綁定狀態
  console.log('準備向 API 寄送的 Payload:', postForm.value)
  alert('資料已成功搜集並列印至 Console，待後續串接真實 API。')
}
</script>

<template>
  <div class="container-fluid">
    <!-- 頁面標題與動作按鈕 -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="h3 mb-0 text-dark fw-bold">新增排球文章</h2>
      <div>
        <button class="btn btn-outline-secondary me-2 px-4">儲存草稿</button>
        <button class="btn btn-primary px-4 fw-semibold" @click="submitPost">發布文章</button>
      </div>
    </div>

    <div class="row g-4">
      <!-- 左側：主要內容區段 (標題與內文) -->
      <div class="col-lg-8">
        <div class="card border-0 shadow-sm mb-4 h-100">
          <div class="card-body p-4">
            <div class="mb-4">
              <label for="postTitle" class="form-label fw-bold text-secondary">
                文章標題 <span class="text-danger">*</span>
              </label>
              <input 
                type="text" 
                class="form-control form-control-lg bg-light border-0" 
                id="postTitle" 
                v-model="postForm.title" 
                placeholder="請輸入抓人眼球的賽事標題..."
              >
            </div>
            
            <div class="mb-3">
              <label for="postContent" class="form-label fw-bold text-secondary">
                文章內文 <span class="text-danger">*</span>
              </label>
              <!-- 預留區塊：此處的 textarea 日後會被取代為富文本編輯器 -->
              <textarea 
                class="form-control bg-light border-0" 
                id="postContent" 
                rows="15" 
                v-model="postForm.content" 
                placeholder="請在此輸入文章內容。&#10;（技術標記：此欄位日後將引入富文本編輯器，產出帶有 HTML 標籤的字串）"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側：發布設定與屬性 -->
      <div class="col-lg-4">
        <!-- 屬性設定卡片 -->
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white py-3 border-light">
            <h6 class="mb-0 fw-bold text-dark">發布選項</h6>
          </div>
          <div class="card-body p-4">
            <div class="mb-4">
              <label class="form-label fw-semibold text-secondary">文章狀態</label>
              <select class="form-select bg-light border-0" v-model="postForm.status">
                <option value="draft">📝 草稿 (Draft)</option>
                <option value="published">✅ 已發布 (Published)</option>
                <option value="hidden">👁️ 隱藏 (Hidden)</option>
              </select>
            </div>
            <div class="mb-4">
              <label class="form-label fw-semibold text-secondary">文章分類</label>
              <select class="form-select bg-light border-0" v-model="postForm.category">
                <option value="news">最新消息</option>
                <option value="match_result">賽事結果</option>
                <option value="announcement">官方公告</option>
              </select>
            </div>
            <div class="form-check form-switch mt-4 pt-3 border-top">
              <input class="form-check-input" type="checkbox" role="switch" id="pinnedSwitch" v-model="postForm.isPinned">
              <label class="form-check-label fw-semibold text-dark ms-2" for="pinnedSwitch">將此文章置頂於前台列表</label>
            </div>
          </div>
        </div>

        <!-- 封面圖片 (預留概念區塊) -->
        <div class="card border-0 shadow-sm mb-4">
          <div class="card-header bg-white py-3 border-light">
            <h6 class="mb-0 fw-bold text-dark">封面主視覺</h6>
          </div>
          <div class="card-body text-center p-4">
            <div class="border border-2 rounded p-5 text-muted bg-light upload-area">
              <code class="d-block mb-2">Image Upload Area</code>
              <small>點擊或拖放圖片至此處上傳</small>
            </div>
            <div class="form-text mt-3">建議尺寸：1200 x 630 px (支援 JPG, PNG, WebP)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upload-area {
  border-style: dashed !important;
  cursor: pointer;
}

/* 針對開關按鈕做微調放大 */
.form-switch .form-check-input {
  width: 2.5em;
  height: 1.25em;
}
</style>
