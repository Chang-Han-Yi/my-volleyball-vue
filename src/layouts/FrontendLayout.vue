<template>
  <div class="app-background bg-light text-dark min-vh-100 position-relative">
    
    <!-- 雙棲身分極簡浮水印 (Watermark Elements) -->
    <div class="watermark-layer position-fixed top-0 start-0 w-100 h-100 overflow-hidden" style="z-index: 0; pointer-events: none;">
       <!-- 工程師符號 -->
       <div class="position-absolute text-secondary watermark-icon floating-slow" style="top: -5%; left: -5%; font-size: 35vw; font-weight: 900; line-height: 1; transform: rotate(-10deg);">
         { }
       </div>
       <div class="position-absolute text-primary watermark-icon floating-slower" style="bottom: 5%; left: 15%; font-size: 15vw; font-weight: 900; line-height: 1; letter-spacing: -1vw;">
         &lt; / &gt;
       </div>
       <!-- 排球符號 (右上角，增加進場特效與浮動感) -->
       <div class="position-absolute ball-animation-wrapper" style="top: 8%; right: 5%; font-size: 10vw; user-select: none; z-index: 0;">
         <span style="filter: drop-shadow(0 15px 25px rgba(0,0,0,0.1));">🏐</span>
       </div>
       <div class="position-absolute text-success watermark-icon floating-slower" style="bottom: -10%; right: 25%; font-size: 25vw;">
         <i class="bi bi-bullseye"></i>
       </div>
    </div>

    <div class="position-relative z-1 d-flex flex-column min-vh-100">
      <!-- 導覽列：極簡白/透明毛玻璃 -->
      <nav class="navbar navbar-expand-lg navbar-light bg-white bg-opacity-75 backdrop-blur border-bottom shadow-sm">
        <div class="container">
          <router-link class="navbar-brand fw-bold text-dark tracking-widest" to="/">我的個人專區</router-link>
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#frontendNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="frontendNavbar">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/" exact>首頁</router-link></li>
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/volleyball">排球</router-link></li>
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/engineer">工程師</router-link></li>
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/growth">成長</router-link></li>
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/projects">作品</router-link></li>
              <li class="nav-item"><router-link class="nav-link text-secondary px-3" active-class="active fw-bold text-dark" to="/contact">聯絡</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

      <main class="flex-grow-1 py-4">
        <router-view></router-view>
      </main>

      <footer class="bg-white text-secondary text-center py-4 mt-auto border-top">
        <div class="container">
          <p class="mb-0 small">&copy; {{ new Date().getFullYear() }} 雙棲開發者. All rights reserved.</p>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
// 全域佈局回歸最高質感的極簡白 (Light Mode)
</script>

<style scoped>
.app-background {
  background-color: #f8fafc; /* Tailwind Slate-50 乾淨背景 */
}

/* 浮水印層級，創造空間深度且確保視覺存在感 */
.watermark-icon {
  opacity: 0.08; /* 提升至 8% 透明度以增強識別度 */
  user-select: none;
}

/* 讓底圖擁有極為緩慢的呼吸感 */
.floating-slow {
  animation: float 25s ease-in-out infinite alternate;
}
.floating-slower {
  animation: floatRot 35s ease-in-out infinite alternate-reverse;
}

@keyframes float {
  0% { transform: translateY(0) scale(1) rotate(-10deg); }
  100% { transform: translateY(40px) scale(1.02) rotate(-5deg); }
}

@keyframes floatRot {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(-30px) rotate(10deg); }
}

/* 排球進場 + 浮動組合動畫 */
.ball-animation-wrapper {
  opacity: 0;
  transform: scale(0);
  /* 縮短循環週期並增加振幅 */
  animation: ballEntrance 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             ballFloat 2.5s ease-in-out infinite alternate 1.2s;
}

@keyframes ballEntrance {
  0% { transform: scale(0) rotate(-45deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
}

@keyframes ballFloat {
  0% { transform: translateY(0) rotate(0deg); opacity: 0.6; }
  100% { transform: translateY(-60px) rotate(15deg); opacity: 0.6; }
}

.backdrop-blur {
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}
</style>
