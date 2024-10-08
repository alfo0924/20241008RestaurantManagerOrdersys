<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">員工管理</h1>
    <div class="mb-3">
      <input type="text" class="form-control bg-secondary text-white" placeholder="搜索員工...">
    </div>
    <button class="btn btn-secondary mb-3">新增員工</button>
    <table class="table table-dark">
      <thead>
      <tr>
        <th>姓名</th>
        <th>職位</th>
        <th>聯繫方式</th>
        <th>入職日期</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="employee in employees" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.contact }}</td>
        <td>{{ employee.hireDate }}</td>
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
  name: 'EmployeeManagement',
  data() {
    return {
      employees: [
        { id: 1, name: '張三', position: '廚師', contact: '123-456-7890', hireDate: '2023-01-15' },
        { id: 2, name: '李四', position: '服務員', contact: '098-765-4321', hireDate: '2023-03-20' },
        { id: 3, name: '王五', position: '經理', contact: '111-222-3333', hireDate: '2022-11-01' }
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