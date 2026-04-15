<script setup lang="ts">
import { ref } from 'vue'

const tableData = ref([
  { date: '2026-04-15', name: 'John Doe', address: '123 Taipei St.' },
  { date: '2026-04-14', name: 'Jane Smith', address: '456 Kaohsiung Blvd.' },
  { date: '2026-04-13', name: 'Alice Lee', address: '789 Taichung Rd.' },
])
</script>

<template>
  <div>
    <h2 class="mb-4">儀表板 (Dashboard)</h2>

    <!-- 使用 Bootstrap Grid 排版 -->
    <div class="row g-3 mb-4">
      <div class="col-md-4">
        <div class="card border-0 shadow-sm text-center h-100">
          <div class="card-body">
            <div class="text-secondary mb-2">總使用者數</div>
            <div class="fs-2 fw-bold text-primary">1,234</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm text-center h-100">
          <div class="card-body">
            <div class="text-secondary mb-2">今日活躍</div>
            <div class="fs-2 fw-bold text-success">56</div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0 shadow-sm text-center h-100">
          <div class="card-body">
            <div class="text-secondary mb-2">待辦事項</div>
            <div class="fs-2 fw-bold text-danger">12</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 使用 Bootstrap Table 展示資料 -->
    <div class="card border-0 shadow-sm">
      <div class="card-header bg-white d-flex justify-content-between align-items-center py-3">
        <span class="fw-bold">最近註冊名單</span>
        <button class="btn btn-primary btn-sm">匯出資料</button>
      </div>
      <div class="card-body p-0">
        <div class="table-responsive">
          <table class="table table-striped table-hover mb-0">
            <thead>
              <tr>
                <th scope="col" class="px-3">註冊日期</th>
                <th scope="col">使用者名稱</th>
                <th scope="col">聯絡地址</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in tableData" :key="index">
                <td class="px-3">{{ row.date }}</td>
                <td>{{ row.name }}</td>
                <td>{{ row.address }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
