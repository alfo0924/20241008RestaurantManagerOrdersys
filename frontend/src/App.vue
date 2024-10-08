<template>
  <div id="app" class="bg-dark text-white">
    <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">餐廳管理系統</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/">儀表板</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/menu">菜單管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/orders">訂單管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/inventory">庫存管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/employees">員工管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/financial">財務報表</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/crm">客戶關係管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/operations">餐廳運營</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/marketing">營銷管理</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/settings">系統設置</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
}
.bg-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>