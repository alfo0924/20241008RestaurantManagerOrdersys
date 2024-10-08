<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">營銷管理</h1>
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-3">促銷活動</h2>
        <div class="mb-3">
          <label for="promotionName" class="form-label">活動名稱</label>
          <input type="text" class="form-control bg-secondary text-white" id="promotionName" v-model="newPromotion.name">
        </div>
        <div class="mb-3">
          <label for="promotionDescription" class="form-label">活動描述</label>
          <textarea class="form-control bg-secondary text-white" id="promotionDescription" v-model="newPromotion.description"></textarea>
        </div>
        <div class="mb-3">
          <label for="promotionStartDate" class="form-label">開始日期</label>
          <input type="date" class="form-control bg-secondary text-white" id="promotionStartDate" v-model="newPromotion.startDate">
        </div>
        <div class="mb-3">
          <label for="promotionEndDate" class="form-label">結束日期</label>
          <input type="date" class="form-control bg-secondary text-white" id="promotionEndDate" v-model="newPromotion.endDate">
        </div>
        <button class="btn btn-secondary mb-3" @click="addPromotion">添加促銷活動</button>
        <table class="table table-dark">
          <thead>
          <tr>
            <th>活動名稱</th>
            <th>開始日期</th>
            <th>結束日期</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="promotion in promotions" :key="promotion.id">
            <td>{{ promotion.name }}</td>
            <td>{{ promotion.startDate }}</td>
            <td>{{ promotion.endDate }}</td>
            <td>
              <button class="btn btn-secondary btn-sm me-2" @click="editPromotion(promotion)">編輯</button>
              <button class="btn btn-danger btn-sm" @click="deletePromotion(promotion)">刪除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">食品安全管理</h2>
        <div class="mb-3">
          <label for="inspectionDate" class="form-label">檢查日期</label>
          <input type="date" class="form-control bg-secondary text-white" id="inspectionDate" v-model="newInspection.date">
        </div>
        <div class="mb-3">
          <label for="inspectionResult" class="form-label">檢查結果</label>
          <select class="form-select bg-secondary text-white" id="inspectionResult" v-model="newInspection.result">
            <option value="pass">通過</option>
            <option value="fail">未通過</option>
            <option value="warning">警告</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="inspectionNotes" class="form-label">備註</label>
          <textarea class="form-control bg-secondary text-white" id="inspectionNotes" v-model="newInspection.notes"></textarea>
        </div>
        <button class="btn btn-secondary mb-3" @click="addInspection">添加檢查記錄</button>
        <table class="table table-dark">
          <thead>
          <tr>
            <th>檢查日期</th>
            <th>結果</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="inspection in inspections" :key="inspection.id">
            <td>{{ inspection.date }}</td>
            <td>{{ inspection.result }}</td>
            <td>
              <button class="btn btn-secondary btn-sm me-2" @click="viewInspectionDetails(inspection)">查看詳情</button>
              <button class="btn btn-danger btn-sm" @click="deleteInspection(inspection)">刪除</button>
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
  name: 'MarketingManagement',
  data() {
    return {
      newPromotion: { name: '', description: '', startDate: '', endDate: '' },
      promotions: [
        { id: 1, name: '週年慶', startDate: '2024-11-01', endDate: '2024-11-07' },
        { id: 2, name: '聖誕特惠', startDate: '2024-12-20', endDate: '2024-12-25' }
      ],
      newInspection: { date: '', result: '', notes: '' },
      inspections: [
        { id: 1, date: '2024-10-01', result: '通過' },
        { id: 2, date: '2024-09-01', result: '警告' }
      ]
    }
  },
  methods: {
    addPromotion() {
      if (this.newPromotion.name && this.newPromotion.startDate && this.newPromotion.endDate) {
        this.promotions.push({
          id: this.promotions.length + 1,
          ...this.newPromotion
        });
        this.newPromotion = { name: '', description: '', startDate: '', endDate: '' };
      } else {
        alert('請填寫所有必要欄位');
      }
    },
    editPromotion(promotion) {
      // 這裡可以實現編輯功能，例如打開一個編輯模態框
      console.log('編輯促銷活動', promotion);
    },
    deletePromotion(promotion) {
      if (confirm('確定要刪除這個促銷活動嗎？')) {
        this.promotions = this.promotions.filter(p => p.id !== promotion.id);
      }
    },
    addInspection() {
      if (this.newInspection.date && this.newInspection.result) {
        this.inspections.push({
          id: this.inspections.length + 1,
          ...this.newInspection
        });
        this.newInspection = { date: '', result: '', notes: '' };
      } else {
        alert('請填寫所有必要欄位');
      }
    },
    viewInspectionDetails(inspection) {
      // 這裡可以實現查看詳情功能，例如打開一個詳情模態框
      console.log('查看檢查詳情', inspection);
    },
    deleteInspection(inspection) {
      if (confirm('確定要刪除這個檢查記錄嗎？')) {
        this.inspections = this.inspections.filter(i => i.id !== inspection.id);
      }
    }
  }
}
</script>

<style scoped>
.bg-secondary, .btn-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
.table-dark {
  --bs-table-bg: rgba(33, 37, 41, 0.8);
}
</style>