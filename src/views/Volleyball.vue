<script setup lang="ts">
import { onMounted, nextTick, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import axios from 'axios'

interface ArticleItem {
  id: string
  title: string
  img: string | null
  content: string
}

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
const volleyballArticles = ref<ArticleItem[]>([])
const isLoading = ref(false)
const loadError = ref('')

async function fetchArticles() {
  isLoading.value = true
  loadError.value = ''

  try {
    const response = await axios.get<{ data: ArticleItem[] }>(`${API_BASE}/articles`)
    volleyballArticles.value = response.data.data
  } catch (error) {
    console.error(error)
    loadError.value = '文章載入失敗，請稍後再試。'
  } finally {
    isLoading.value = false
  }
}

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await fetchArticles()
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
      <div class="col-md-12 mb-4 stat-card">
        <div class="card h-100 shadow-sm border-0 rounded-5 transition-hover">
          <div class="card-body p-5">
            <h4 class="fw-black border-bottom border-primary border-opacity-25 pb-3 mb-4 letter-spacing-2">重點賽事經歷</h4>
            <div class="mt-2">
              <p v-if="isLoading" class="text-secondary mb-0">載入文章中...</p>
              <p v-else-if="loadError" class="text-danger mb-0">{{ loadError }}</p>
              <router-link
                v-for="article in volleyballArticles"
                :key="article.id"
                :to="`/volleyball/${article.id}`"
                class="experience-item d-block mb-3 ps-3 pe-2 py-2 border-start border-3 border-primary text-decoration-none rounded-3"
              >
                <h5 class="fw-bold mb-1 text-dark">{{ article.title }}</h5>
                <p class="text-secondary small mb-0">
                  {{ article.content.slice(0, 45) }}{{ article.content.length > 45 ? '...' : '' }}
                </p>
              </router-link>
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
