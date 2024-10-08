<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">訂單管理</h1>
    <div class="mb-3">
      <input type="text" class="form-control bg-secondary text-white" placeholder="搜索訂單...">
    </div>
    <table class="table table-dark">
      <thead>
      <tr>
        <th>訂單號</th>
        <th>客戶名稱</th>
        <th>總金額</th>
        <th>狀態</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ order.id }}</td>
        <td>{{ order.customerName }}</td>
        <td>${{ order.total.toFixed(2) }}</td>
        <td>{{ order.status }}</td>
        <td>
          <button class="btn btn-secondary btn-sm me-2">查看詳情</button>
          <button class="btn btn-secondary btn-sm">更新狀態</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'OrderManagement',
  data() {
    return {
      orders: [
        { id: 1001, customerName: '張三', total: 25.99, status: '已完成' },
        { id: 1002, customerName: '李四', total: 34.50, status: '準備中' },
        { id: 1003, customerName: '王五', total: 18.75, status: '已送達' }
      ]
    }
  }
}
</script>

<style scoped>
.bg-secondary, .btn-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>