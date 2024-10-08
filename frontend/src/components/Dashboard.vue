<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">儀表板</h1>
    <div class="row">
      <div class="col-md-3 mb-3">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">總銷售額</h5>
            <p class="card-text display-4">$10,000</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">訂單數</h5>
            <p class="card-text display-4">150</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">顧客數</h5>
            <p class="card-text display-4">75</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 mb-3">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">平均訂單金額</h5>
            <p class="card-text display-4">$66.67</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>

<style scoped>
.bg-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>