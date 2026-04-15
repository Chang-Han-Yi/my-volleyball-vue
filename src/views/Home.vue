<template>
  <div class="container py-5 position-relative">
    
    <!-- 個人品牌標題區塊 -->
    <div ref="heroSection" class="text-center mb-5 pb-2">
      <div class="gsap-hero-title overflow-hidden mb-2">
        <h1 class="display-3 fw-bold text-dark mb-0 ls-tight">我是 <span class="text-primary">[您的姓名]</span></h1>
      </div>
      <div class="gsap-hero-desc overflow-hidden">
        <p class="lead text-secondary mt-2 fw-semibold">熱血與邏輯並存的 <span class="text-primary">雙棲開發者</span></p>
      </div>
    </div>

    <!-- Bento Grid 便當盒 (戰情室排版) -->
    <div ref="bentoContainer" class="bento-container gsap-cards-stagger">
      
      <!-- 1. 個人核心介紹卡 (大) -->
      <div class="bento-item bento-large d-flex flex-column flex-primary-focus bg-dark text-white rounded-5 shadow-sm overflow-hidden anim-card border-0">
         <div class="p-4 p-md-5 d-flex flex-column justify-content-center h-100 position-relative z-1">
            <h2 class="display-5 fw-bold mb-3 tracking-tight">我是 <span class="text-primary">[您的姓名]</span></h2>
            <p class="fs-5 mb-4 text-light opacity-75">
              一位在 <span class="text-white fw-bold">Code</span> 與 <span class="text-white fw-bold">Volleyball</span> 之間尋找完美的平衡點的雙棲開發者。在此紀錄我的技術探索與競技人生。
            </p>
            <div class="d-flex gap-2">
              <router-link to="/contact" class="btn btn-primary rounded-pill px-4 fw-bold shadow-sm">與我聯絡</router-link>
              <a href="#" class="btn btn-outline-light rounded-pill px-4 fw-bold">查看 GitHub</a>
            </div>
         </div>
         <!-- 裝飾底圖 -->
         <i class="bi bi-code-slash position-absolute text-white opacity-05" style="font-size: 20rem; right: -50px; bottom: -80px;"></i>
      </div>

      <!-- 2. 雙棲戰力儀表板 (高) -->
      <div class="bento-item bento-tall p-4 d-flex flex-column bg-primary text-white rounded-5 shadow-sm">
        <h4 class="fw-bold mb-4 border-bottom border-white border-opacity-25 pb-2">雙棲戰力</h4>
        <div class="flex-grow-1 d-flex flex-column justify-content-around">
           <div class="stat-item">
              <div class="small fw-semibold opacity-75">軟體開發</div>
              <div class="h2 fw-bold mb-0">5+ <span class="fs-6">Years</span></div>
              <div class="progress bg-white bg-opacity-20 mt-1" style="height: 4px;">
                <div class="progress-bar bg-white" style="width: 85%"></div>
              </div>
           </div>
           <div class="stat-item mt-4">
              <div class="small fw-semibold opacity-75">最高打點</div>
              <div class="h2 fw-bold mb-0">320 <span class="fs-6">cm</span></div>
              <div class="progress bg-white bg-opacity-20 mt-1" style="height: 4px;">
                <div class="progress-bar bg-warning" style="width: 95%"></div>
              </div>
           </div>
           <div class="stat-item mt-4">
              <div class="small fw-semibold opacity-75">GitHub Commits</div>
              <div class="h2 fw-bold mb-0">1.2k+</div>
           </div>
        </div>
        <router-link to="/engineer" class="btn btn-outline-light btn-sm rounded-pill w-100 mt-4 fw-bold">詳細檔案</router-link>
      </div>

      <!-- 3. 最新動態混編 (寬) -->
      <div class="bento-item bento-wide p-4 bg-white border rounded-5 shadow-sm d-flex flex-column">
        <div class="d-flex justify-content-between align-items-center mb-3">
           <h5 class="fw-bold mb-0">最近在忙什麼？</h5>
           <span class="badge bg-light text-dark border">LIVE FEED</span>
        </div>
        <div class="list-group list-group-flush border-0">
          <div class="list-group-item bg-transparent border-0 px-0 py-2 d-flex align-items-center">
            <span class="badge bg-success-subtle text-success me-2">PROJECT</span>
            <span class="text-secondary small">重構個人網站首頁為 Bento Grid 佈局...</span>
          </div>
          <div class="list-group-item bg-transparent border-0 px-0 py-2 d-flex align-items-center">
            <span class="badge bg-warning-subtle text-warning me-2">SPORT</span>
            <span class="text-secondary small">完成週末排球聯賽分組積分賽...</span>
          </div>
          <div class="list-group-item bg-transparent border-0 px-0 py-2 d-flex align-items-center border-bottom">
            <span class="badge bg-primary-subtle text-primary me-2">STUDY</span>
            <span class="text-secondary small">研究 Vue 3 渲染性能調優策略...</span>
          </div>
        </div>
        <router-link to="/growth" class="btn btn-link text-decoration-none text-primary fw-bold p-0 mt-3 align-self-start">查看更多紀錄 <i class="bi bi-arrow-right"></i></router-link>
      </div>

      <!-- 4. 作品快速連結 (小) -->
      <div class="bento-item bento-small p-4 d-flex flex-column align-items-center justify-content-center text-center bg-white border rounded-5 shadow-sm hover-reveal">
        <i class="bi bi-boxes fs-1 text-primary mb-2"></i>
        <h6 class="fw-bold text-dark mb-0">我的作品集</h6>
        <router-link to="/projects" class="stretched-link"></router-link>
      </div>

      <!-- 5. 專區入口：排球 (小) -->
      <div class="bento-item bento-small p-4 d-flex flex-column align-items-center justify-content-center text-center bg-warning text-dark rounded-5 shadow-sm">
        <i class="bi bi-dribbble fs-1 mb-2"></i>
        <h6 class="fw-bold mb-0">排球專區</h6>
        <router-link to="/volleyball" class="stretched-link"></router-link>
      </div>

      <!-- 6. 專區入口：GitHub (小) -->
       <div class="bento-item bento-small p-4 d-flex flex-column align-items-center justify-content-center text-center bg-dark text-white rounded-5 shadow-sm border border-light border-opacity-10">
        <i class="bi bi-github fs-1 mb-2 opacity-75"></i>
        <h6 class="fw-bold mb-0">GitHub</h6>
        <a href="https://github.com" target="_blank" class="stretched-link"></a>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const bentoContainer = ref<HTMLElement | null>(null)
let masterTl: gsap.core.Timeline | null = null

onMounted(() => {
  // 建立最高質感的 GSAP 排印與進場動畫 (Typography Reveal & Card Stagger)
  masterTl = gsap.timeline({ defaults: { ease: "power4.out" } })
  
  // 1. 文字遮罩滑出特效
  masterTl.fromTo('.gsap-hero-title h1', 
    { y: 150, skewY: 10, opacity: 0 }, 
    { y: 0, skewY: 0, opacity: 1, duration: 1.2, stagger: 0.15 }
  )
  
  // 2. 副標題淡入
  masterTl.fromTo('.gsap-hero-desc p',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1 },
    "-=0.8"
  )

  // 3. 便當盒卡片依序升起 (Staggering entry)
  if (bentoContainer.value) {
    const cards = bentoContainer.value.querySelectorAll('.bento-item')
    masterTl.fromTo(cards, 
      { y: 80, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.2)", stagger: 0.08 },
      "-=0.6"
    )
  }
})

onUnmounted(() => {
  if (masterTl) masterTl.kill()
})
</script>

<style scoped>
/* 專業極簡字體排版 */
.ls-tight { letter-spacing: -2px; }
.tracking-tight { letter-spacing: -0.5px; }
.tracking-wider { letter-spacing: 1.5px; }

/* Bento Grid */
.bento-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 200px;
  gap: 1.5rem;
}

.bento-item {
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s ease;
}

.bento-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 30px rgba(0,0,0,0.08) !important;
  z-index: 10;
}

/* 尺寸定義 */
.bento-large { grid-column: span 2; grid-row: span 2; }
.bento-wide { grid-column: span 2; grid-row: span 1; }
.bento-tall { grid-column: span 1; grid-row: span 2; }
.bento-small { grid-column: span 1; grid-row: span 1; }

@media (max-width: 992px) { .bento-container { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 576px) {
  .bento-container { grid-template-columns: 1fr; grid-auto-rows: auto; }
  .bento-large, .bento-wide, .bento-tall, .bento-small { grid-column: span 1 !important; grid-row: span 1 !important; min-height: 180px; }
}
</style>
