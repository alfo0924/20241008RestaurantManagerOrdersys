<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">庫存管理</h1>
    <div class="mb-3">
      <input type="text" class="form-control bg-secondary text-white" placeholder="搜索庫存項目...">
    </div>
    <button class="btn btn-secondary mb-3">新增庫存項目</button>
    <table class="table table-dark">
      <thead>
      <tr>
        <th>名稱</th>
        <th>數量</th>
        <th>單位</th>
        <th>最後更新</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in inventoryItems" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.unit }}</td>
        <td>{{ item.lastUpdated }}</td>
        <td>
          <button class="btn btn-secondary btn-sm me-2">編輯</button>
          <button class="btn btn-danger btn-sm">刪除</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'InventoryManagement',
  data() {
    return {
      inventoryItems: [
        { id: 1, name: '牛肉', quantity: 50, unit: '公斤', lastUpdated: '2024-10-07' },
        { id: 2, name: '麵粉', quantity: 100, unit: '公斤', lastUpdated: '2024-10-06' },
        { id: 3, name: '番茄', quantity: 30, unit: '公斤', lastUpdated: '2024-10-08' }
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