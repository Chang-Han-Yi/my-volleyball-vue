<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

interface ArticleDetail {
  id: string
  title: string
  img: string | null
  content: string
}

const article = ref<ArticleDetail | null>(null)
const isLoading = ref(false)
const loadError = ref('')

async function fetchArticle() {
  const id = String(route.params.slug || '').trim()
  if (!id) {
    article.value = null
    return
  }

  isLoading.value = true
  loadError.value = ''

  try {
    const response = await axios.get<ArticleDetail>(`${API_BASE}/articles/${id}`)
    article.value = response.data
  } catch (error) {
    console.error(error)
    article.value = null
    loadError.value = '找不到這篇文章或載入失敗。'
  } finally {
    isLoading.value = false
  }
}

onMounted(fetchArticle)
watch(() => route.params.slug, fetchArticle)
</script>

<template>
  <div class="container py-8 py-md-10">
    <div v-if="isLoading" class="text-center py-10">
      <h2 class="fw-black mb-3">文章載入中...</h2>
    </div>

    <div v-else-if="article" class="mx-auto article-wrapper">
      <router-link to="/volleyball" class="text-decoration-none small fw-bold text-primary">
        <i class="bi bi-arrow-left me-1"></i>返回排球專區
      </router-link>

      <h1 class="display-5 fw-black mt-3 mb-2">{{ article.title }}</h1>
      <p class="text-secondary mb-4">文章編號：{{ article.id }}</p>

      <div v-if="article.img" class="rounded-5 overflow-hidden shadow-sm mb-5">
        <img :src="article.img" :alt="article.title" class="article-image w-100" />
      </div>

      <div class="article-content fs-5 lh-lg text-dark">
        <p class="mb-4">{{ article.content }}</p>
      </div>
    </div>

    <div v-else class="text-center py-10">
      <h2 class="fw-black mb-3">找不到這篇賽事文章</h2>
      <p v-if="loadError" class="text-danger">{{ loadError }}</p>
      <router-link to="/volleyball" class="btn btn-primary rounded-pill px-4"
        >回到排球專區</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.fw-black {
  font-weight: 900;
}

.py-8 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.py-10 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.article-wrapper {
  max-width: 860px;
}

.article-image {
  max-height: 440px;
  object-fit: cover;
}
</style>
