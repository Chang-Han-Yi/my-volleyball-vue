import axios from 'axios'

export interface ArticleItem {
  id: string
  title: string
  img: string | null
  content: string
  isPublished: boolean
  createdAt?: string
  updatedAt?: string
}

export interface ArticlePayload {
  id?: string
  title?: string
  img?: string | null
  content?: string
  isPublished?: boolean
}

export const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
})

export async function listArticles(options?: { includeDraft?: boolean }): Promise<ArticleItem[]> {
  const { data } = await api.get<{ data: ArticleItem[] }>('/articles', {
    params: options?.includeDraft ? { includeDraft: '1' } : {},
  })
  return data.data
}

export async function getArticle(id: string, options?: { includeDraft?: boolean }): Promise<ArticleItem> {
  const { data } = await api.get<ArticleItem>(`/articles/${encodeURIComponent(id)}`, {
    params: options?.includeDraft ? { includeDraft: '1' } : {},
  })
  return data
}

export async function createArticle(payload: Required<Pick<ArticlePayload, 'id' | 'title' | 'content'>> & ArticlePayload): Promise<ArticleItem> {
  const { data } = await api.post<ArticleItem>('/articles', payload)
  return data
}

export async function updateArticle(id: string, payload: ArticlePayload): Promise<ArticleItem> {
  const { data } = await api.put<ArticleItem>(`/articles/${encodeURIComponent(id)}`, payload)
  return data
}

export async function deleteArticle(id: string): Promise<void> {
  await api.delete(`/articles/${encodeURIComponent(id)}`)
}

export async function uploadImage(file: File): Promise<string> {
  const formData = new FormData()
  formData.append('image', file)
  const { data } = await api.post<{ url: string }>('/uploads', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  })
  return data.url
}
