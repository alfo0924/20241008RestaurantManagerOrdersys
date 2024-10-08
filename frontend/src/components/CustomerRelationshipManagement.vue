<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">客戶關係管理</h1>
    <div class="mb-3">
      <input type="text" class="form-control bg-secondary text-white" placeholder="搜索客戶...">
    </div>
    <button class="btn btn-secondary mb-3">新增客戶</button>
    <table class="table table-dark">
      <thead>
      <tr>
        <th>姓名</th>
        <th>聯繫方式</th>
        <th>消費次數</th>
        <th>總消費金額</th>
        <th>會員等級</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="customer in customers" :key="customer.id">
        <td>{{ customer.name }}</td>
        <td>{{ customer.contact }}</td>
        <td>{{ customer.visitCount }}</td>
        <td>${{ customer.totalSpent.toFixed(2) }}</td>
        <td>{{ customer.membershipLevel }}</td>
        <td>
          <button class="btn btn-secondary btn-sm me-2">編輯</button>
          <button class="btn btn-secondary btn-sm">查看詳情</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CustomerRelationshipManagement',
  data() {
    return {
      customers: [
        { id: 1, name: '張三', contact: '123-456-7890', visitCount: 10, totalSpent: 500.00, membershipLevel: '黃金' },
        { id: 2, name: '李四', contact: '098-765-4321', visitCount: 5, totalSpent: 250.00, membershipLevel: '銀牌' },
        { id: 3, name: '王五', contact: '111-222-3333', visitCount: 15, totalSpent: 750.00, membershipLevel: '鑽石' }
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