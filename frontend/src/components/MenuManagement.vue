<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">菜單管理</h1>
    <div class="mb-3">
      <input type="text" class="form-control bg-secondary text-white" placeholder="搜索菜品...">
    </div>
    <button class="btn btn-secondary mb-3">新增菜品</button>
    <table class="table table-dark">
      <thead>
      <tr>
        <th>名稱</th>
        <th>價格</th>
        <th>類別</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in menuItems" :key="item.id">
        <td>{{ item.name }}</td>
        <td>${{ item.price.toFixed(2) }}</td>
        <td>{{ item.category }}</td>
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
  name: 'MenuManagement',
  data() {
    return {
      menuItems: [
        { id: 1, name: '漢堡', price: 8.99, category: '主食' },
        { id: 2, name: '沙拉', price: 6.99, category: '前菜' },
        { id: 3, name: '可樂', price: 2.99, category: '飲料' }
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