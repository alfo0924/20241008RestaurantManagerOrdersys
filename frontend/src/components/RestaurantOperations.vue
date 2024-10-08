<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">餐廳運營</h1>
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-3">桌位管理</h2>
        <div class="mb-3">
          <label for="tableNumber" class="form-label">桌號</label>
          <input type="number" class="form-control bg-secondary text-white" id="tableNumber" v-model="newTable.number">
        </div>
        <div class="mb-3">
          <label for="tableCapacity" class="form-label">容納人數</label>
          <input type="number" class="form-control bg-secondary text-white" id="tableCapacity" v-model="newTable.capacity">
        </div>
        <button class="btn btn-secondary mb-3" @click="addTable">添加桌位</button>
        <table class="table table-dark">
          <thead>
          <tr>
            <th>桌號</th>
            <th>容納人數</th>
            <th>狀態</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="table in tables" :key="table.id">
            <td>{{ table.number }}</td>
            <td>{{ table.capacity }}</td>
            <td>{{ table.status }}</td>
            <td>
              <button class="btn btn-secondary btn-sm me-2" @click="changeTableStatus(table)">更改狀態</button>
              <button class="btn btn-danger btn-sm" @click="removeTable(table)">刪除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">預訂管理</h2>
        <div class="mb-3">
          <label for="reservationDate" class="form-label">日期</label>
          <input type="date" class="form-control bg-secondary text-white" id="reservationDate" v-model="newReservation.date">
        </div>
        <div class="mb-3">
          <label for="reservationTime" class="form-label">時間</label>
          <input type="time" class="form-control bg-secondary text-white" id="reservationTime" v-model="newReservation.time">
        </div>
        <div class="mb-3">
          <label for="reservationName" class="form-label">姓名</label>
          <input type="text" class="form-control bg-secondary text-white" id="reservationName" v-model="newReservation.name">
        </div>
        <div class="mb-3">
          <label for="reservationGuests" class="form-label">人數</label>
          <input type="number" class="form-control bg-secondary text-white" id="reservationGuests" v-model="newReservation.guests">
        </div>
        <button class="btn btn-secondary mb-3" @click="addReservation">添加預訂</button>
        <table class="table table-dark">
          <thead>
          <tr>
            <th>日期</th>
            <th>時間</th>
            <th>姓名</th>
            <th>人數</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="reservation in reservations" :key="reservation.id">
            <td>{{ reservation.date }}</td>
            <td>{{ reservation.time }}</td>
            <td>{{ reservation.name }}</td>
            <td>{{ reservation.guests }}</td>
            <td>
              <button class="btn btn-danger btn-sm" @click="removeReservation(reservation)">取消</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RestaurantOperations',
  data() {
    return {
      newTable: { number: null, capacity: null },
      tables: [
        { id: 1, number: 1, capacity: 4, status: '空閒' },
        { id: 2, number: 2, capacity: 2, status: '占用' },
        { id: 3, number: 3, capacity: 6, status: '預訂' }
      ],
      newReservation: { date: '', time: '', name: '', guests: null },
      reservations: [
        { id: 1, date: '2024-10-10', time: '18:00', name: '張三', guests: 4 },
        { id: 2, date: '2024-10-11', time: '19:30', name: '李四', guests: 2 }
      ]
    }
  },
  methods: {
    addTable() {
      // 添加桌位邏輯
    },
    changeTableStatus(_table) {
      // 更改桌位狀態邏輯
    },
    removeTable(_table) {
      // 刪除桌位邏輯
    },
    addReservation() {
      // 添加預訂邏輯
    },
    removeReservation(_reservation) {
      // 取消預訂邏輯
    }
  }
}
</script>

<style scoped>
.bg-secondary, .btn-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>