<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()
  
  // 1. 頂部標題進場
  gsap.from('.header-reveal', {
    y: 30,
    opacity: 0,
    duration: 1,
    ease: 'power3.out'
  })

  // 2. 數據卡片發牌進場
  gsap.from('.stat-card', {
    y: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.stat-row',
      start: 'top 85%'
    }
  })

  // 3. 影片區塊捲動進場
  gsap.from('.video-item', {
    scale: 0.9,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.video-row',
      start: 'top 85%'
    }
  })
})
</script>

<template>
  <div class="container py-8 py-md-10">
    <div class="text-center mb-8 header-reveal">
      <h1 class="display-4 fw-black text-primary text-uppercase"><i class="bi bi-dribbble me-2"></i>排球專區</h1>
      <p class="lead text-secondary opacity-75">賽事經歷 / 技術數據 / 精華紀錄</p>
      <div class="divider bg-primary mx-auto mt-4" style="width: 60px; height: 4px;"></div>
    </div>

    <!-- 經歷與能力 -->
    <div class="row mb-10 stat-row">
      <div class="col-md-6 mb-4 stat-card">
        <div class="card h-100 shadow-sm border-0 rounded-5 transition-hover">
          <div class="card-body p-5">
            <h4 class="fw-black border-bottom border-primary border-opacity-25 pb-3 mb-4 letter-spacing-2">個人能力指標</h4>
            <ul class="list-group list-group-flush border-0">
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent py-3">
                <span class="text-secondary">身高 / 體重</span> <span class="fw-bold fs-5">182 cm / 75 kg</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent py-3">
                <span class="text-secondary">打點高</span> <span class="fw-bold fs-5 text-primary">320 cm</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent py-3 border-0">
                <span class="text-secondary">場上位置</span> <span class="badge bg-primary rounded-pill px-3 py-2 fw-bold">主攻手 (OH)</span>
              </li>
            </ul>
             <p class="mt-4 text-secondary small lh-lg bg-light p-3 rounded-4">
               優異的滯空能力與攻擊視野，具備強大的關鍵時刻得分能力。防守拼勁強，能穩定參與一傳體系。
             </p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4 stat-card">
        <div class="card h-100 shadow-sm border-0 rounded-5 transition-hover">
          <div class="card-body p-5">
            <h4 class="fw-black border-bottom border-primary border-opacity-25 pb-3 mb-4 letter-spacing-2">重點賽事經歷</h4>
            <div class="mt-2">
              <div class="experience-item mb-4 ps-3 border-start border-3 border-primary">
                <h5 class="fw-bold mb-1">大專盃甲級聯賽</h5>
                <p class="text-secondary small mb-0">先發主攻手 / 負責戰術執行與防守核心。帶領球隊闖入全國八強。</p>
              </div>
              <div class="experience-item mb-0 ps-3 border-start border-3 border-primary border-opacity-50">
                <h5 class="fw-bold mb-1">全國排球錦標賽</h5>
                <p class="text-secondary small mb-0">年度全國大型賽事 / 多次在決勝局貢獻關鍵攔網與重扣得分。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 影片區塊 -->
    <div class="section-title mb-6">
       <h4 class="fw-black display-6 mb-2">精華影片 (Highlights)</h4>
       <div class="bg-primary" style="width: 40px; height: 3px;"></div>
    </div>
    
    <div class="row video-row">
      <div class="col-md-6 mb-4 video-item">
        <div class="video-container rounded-5 bg-dark d-flex align-items-center justify-content-center overflow-hidden shadow-lg transition-hover" style="height: 300px;">
          <i class="bi bi-play-circle-fill display-1 text-white opacity-25"></i>
          <div class="video-overlay position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark">
             <h5 class="fw-bold text-white mb-0">冠軍戰全紀錄</h5>
          </div>
        </div>
        <p class="mt-3 text-secondary text-center small fw-bold">UVL 決賽精華 / 2025 Winter</p>
      </div>
      <div class="col-md-6 mb-4 video-item">
        <div class="video-container rounded-5 bg-dark d-flex align-items-center justify-content-center overflow-hidden shadow-lg transition-hover" style="height: 300px;">
          <i class="bi bi-play-circle-fill display-1 text-white opacity-25"></i>
          <div class="video-overlay position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-dark">
             <h5 class="fw-bold text-white mb-0">體能與爆發力訓練</h5>
          </div>
        </div>
        <p class="mt-3 text-secondary text-center small fw-bold">日常重量 / 敏捷性 / 垂直彈跳</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fw-black { font-weight: 900; }
.letter-spacing-2 { letter-spacing: 2px; }
.py-8 { padding-top: 6rem; padding-bottom: 6rem; }
.py-10 { padding-top: 8rem; padding-bottom: 8rem; }
.mb-10 { margin-bottom: 8rem; }

.transition-hover {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.transition-hover:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important;
}

.video-container {
  position: relative;
  cursor: pointer;
}
.bg-gradient-dark {
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
}

.experience-item {
  transition: all 0.3s ease;
}
.experience-item:hover {
  background: rgba(13, 110, 253, 0.05);
  border-left-color: #0d6efd !important;
}
</style>
