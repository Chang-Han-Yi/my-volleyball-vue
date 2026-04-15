<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold text-success"><i class="bi bi-graph-up-arrow me-2"></i>成長</h1>
      <p class="lead text-muted">學習筆記、閱讀心得與自我提升紀錄</p>
    </div>

    <!-- 分類切換按鈕 (Tabs/Pills) -->
    <div class="d-flex justify-content-center mb-5">
      <ul class="nav nav-pills bg-light p-2 rounded-pill shadow-sm">
        <li class="nav-item">
          <button class="nav-link rounded-pill px-4 fw-semibold" :class="{ 'active bg-success text-white': currentCategory === 'all' }" @click="currentCategory = 'all'">全部</button>
        </li>
        <li class="nav-item">
          <button class="nav-link rounded-pill px-4 fw-semibold" :class="{ 'active bg-success text-white': currentCategory === 'engineer' }" @click="currentCategory = 'engineer'">工程師</button>
        </li>
        <li class="nav-item">
          <button class="nav-link rounded-pill px-4 fw-semibold" :class="{ 'active bg-success text-white': currentCategory === 'volleyball' }" @click="currentCategory = 'volleyball'">排球員</button>
        </li>
      </ul>
    </div>

    <div class="row">
      <!-- 篩選後的文章列表 -->
      <div class="col-md-4 mb-4" v-for="post in filteredPosts" :key="post.id">
        <div class="card h-100 shadow-sm border-0 rounded-4 card-hover">
          <div class="card-body p-4 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-3">
               <div class="text-muted small"><i class="bi bi-calendar3 me-2"></i>{{ post.date }}</div>
               <span class="badge rounded-pill" :class="post.category === 'engineer' ? 'bg-primary' : 'bg-warning text-dark border'">
                 {{ post.category === 'engineer' ? '技術開發' : '排球筆記' }}
               </span>
            </div>
            <h5 class="card-title fw-bold">{{ post.title }}</h5>
            <p class="card-text text-muted mb-3">{{ post.excerpt }}</p>
            <div class="mt-auto pt-3 border-top">
              <a href="#" class="text-success text-decoration-none fw-bold">閱讀更多 <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 當無文章時的空白狀態 -->
      <div v-if="filteredPosts.length === 0" class="col-12 text-center text-muted py-5">
         <i class="bi bi-inbox display-1 opacity-25"></i>
         <p class="mt-3">目前該分類下尚無分享文章。</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 定義目前選取的分類狀態 (all, engineer, volleyball)
const currentCategory = ref('all')

// 建立模擬文章資料庫 (Mock Data)
const posts = ref([
  {
    id: 1,
    category: 'engineer',
    date: '2026-04-10',
    title: 'Vue 3 與 Composition API 學習筆記',
    excerpt: '整理與反思這段期間導入 Vue 3 新特性的經驗，探討狀態管理與元件複用性的提升。'
  },
  {
    id: 2,
    category: 'volleyball',
    date: '2026-03-25',
    title: '面對高大攔網的攻擊與突破策略',
    excerpt: '針對身材較矮小的攻擊手，如何在面對具備身高優勢的攔網球員時，利用手腕與視野改變進攻節奏。'
  },
  {
    id: 3,
    category: 'engineer',
    date: '2026-03-12',
    title: '重構個人網站：從靜態架構轉移為多頁式應用',
    excerpt: '紀錄本網站開發過程的技術挑戰，探討多頁面切換機制及前後台 CMS 結合的部署策略。'
  },
  {
    id: 4,
    category: 'volleyball',
    date: '2026-02-18',
    title: '突破撞牆期：低潮時的心理韌性訓練',
    excerpt: '在賽季進行中遇到技術瓶頸時，如何透過冥想與專注度訓練，幫助自己在場上重新找回節奏。'
  }
])

// 透過 computed 建立自動過濾機制
const filteredPosts = computed(() => {
  if (currentCategory.value === 'all') {
    return posts.value
  }
  return posts.value.filter(post => post.category === currentCategory.value)
})
</script>

<style scoped>
.card-hover {
  transition: transform 0.2s ease-in-out;
}
.card-hover:hover {
  transform: translateY(-5px);
}
</style>
