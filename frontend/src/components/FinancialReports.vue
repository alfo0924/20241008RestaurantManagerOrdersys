<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">財務報表</h1>
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">本月收入</h5>
            <p class="card-text display-4">$45,000</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card bg-secondary text-white">
          <div class="card-body">
            <h5 class="card-title">本月支出</h5>
            <p class="card-text display-4">$30,000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-3">
      <label for="reportType" class="form-label">選擇報表類型</label>
      <select id="reportType" class="form-select bg-secondary text-white">
        <option value="monthly">月度報表</option>
        <option value="quarterly">季度報表</option>
        <option value="annual">年度報表</option>
      </select>
    </div>
    <button class="btn btn-secondary mb-3">生成報表</button>
    <div class="chart-container" style="position: relative; height:40vh; width:80vw">
      <canvas id="financialChart"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  name: 'FinancialReports',
  mounted() {
    this.createChart();
  },
  methods: {
    createChart() {
      const ctx = document.getElementById('financialChart');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['一月', '二月', '三月', '四月', '五月', '六月'],
          datasets: [{
            label: '收入',
            data: [30000, 35000, 40000, 38000, 42000, 45000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }, {
            label: '支出',
            data: [25000, 28000, 30000, 29000, 31000, 30000],
            borderColor: 'rgb(255, 99, 132)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.bg-secondary, .btn-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>