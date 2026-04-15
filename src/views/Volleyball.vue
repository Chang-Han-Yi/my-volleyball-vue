<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="display-4 fw-bold text-primary"><i class="bi bi-dribbble me-2"></i>排球專區</h1>
      <p class="lead text-muted">專屬排球的賽事經歷、技術數據與精華影片</p>
    </div>

    <!-- 經歷與能力 -->
    <div class="row mb-5">
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <h4 class="fw-bold border-bottom pb-2">個人能力指標</h4>
            <ul class="list-group list-group-flush mt-3 border-0">
              <li class="list-group-item d-flex justify-content-between px-0"><span>身高 / 體重</span> <span class="fw-bold">182 cm / 75 kg</span></li>
              <li class="list-group-item d-flex justify-content-between px-0"><span>打點高</span> <span class="fw-bold">320 cm</span></li>
              <li class="list-group-item d-flex justify-content-between px-0"><span>場上位置</span> <span class="fw-bold text-primary">主攻手 (OH)</span></li>
            </ul>
             <p class="mt-3 text-muted small">優異的滯空能力與攻擊視野，防守拼勁強，能參與一傳體系。</p>
          </div>
        </div>
      </div>
      <div class="col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0 rounded-4">
          <div class="card-body p-4">
            <h4 class="fw-bold border-bottom pb-2">重點賽事經歷</h4>
            <div class="mt-3">
              <div class="mb-3">
                <h6 class="fw-bold mb-1">大專盃甲級聯賽</h6>
                <small class="text-muted">先發主攻手 / 負責戰術執行與防守核心</small>
              </div>
              <div class="mb-3">
                <h6 class="fw-bold mb-1">全國排球錦標賽</h6>
                <small class="text-muted">年度全國賽 / 貢獻關鍵得分</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 影片區塊 -->
    <h4 class="fw-bold mb-4">精華影片 (Highlights)</h4>
    <div class="row">
      <div class="col-md-6 mb-4">
        <div class="bg-dark text-white rounded-4 d-flex align-items-center justify-content-center border video-placeholder">
          <i class="bi bi-play-circle-fill display-1 text-secondary opacity-75"></i>
        </div>
        <h5 class="fw-bold mt-3">冠軍戰 Highlights</h5>
      </div>
      <div class="col-md-6 mb-4">
        <div class="bg-dark text-white rounded-4 d-flex align-items-center justify-content-center border video-placeholder">
          <i class="bi bi-play-circle-fill display-1 text-secondary opacity-75"></i>
        </div>
        <h5 class="fw-bold mt-3">日常重量與敏捷訓練</h5>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 排球專區
</script>

<style scoped>
.video-placeholder {
  height: 250px;
}
</style>
