<template>
  <div class="container-fluid bg-dark text-white p-4">
    <h1 class="mb-4">系統設置</h1>
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-3">一般設置</h2>
        <div class="mb-3">
          <label for="restaurantName" class="form-label">餐廳名稱</label>
          <input type="text" class="form-control bg-secondary text-white" id="restaurantName" v-model="settings.restaurantName">
        </div>
        <div class="mb-3">
          <label for="language" class="form-label">系統語言</label>
          <select class="form-select bg-secondary text-white" id="language" v-model="settings.language">
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
        </div>
        <div class="mb-3">
          <label for="timezone" class="form-label">時區</label>
          <select class="form-select bg-secondary text-white" id="timezone" v-model="settings.timezone">
            <option value="Asia/Taipei">台北</option>
            <option value="Asia/Hong_Kong">香港</option>
            <option value="Asia/Tokyo">東京</option>
          </select>
        </div>
      </div>
      <div class="col-md-6">
        <h2 class="mb-3">安全設置</h2>
        <div class="mb-3">
          <label for="backupFrequency" class="form-label">數據備份頻率</label>
          <select class="form-select bg-secondary text-white" id="backupFrequency" v-model="settings.backupFrequency">
            <option value="daily">每日</option>
            <option value="weekly">每週</option>
            <option value="monthly">每月</option>
          </select>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="twoFactorAuth" v-model="settings.twoFactorAuth">
          <label class="form-check-label" for="twoFactorAuth">啟用雙因素認證</label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="dataEncryption" v-model="settings.dataEncryption">
          <label class="form-check-label" for="dataEncryption">啟用數據加密</label>
        </div>
      </div>
    </div>
    <button class="btn btn-secondary mt-3" @click="saveSettings">保存設置</button>
  </div>
</template>

<script>
export default {
  name: 'SystemSettings',
  data() {
    return {
      settings: {
        restaurantName: '示例餐廳',
        language: 'zh',
        timezone: 'Asia/Taipei',
        backupFrequency: 'daily',
        twoFactorAuth: false,
        dataEncryption: true
      }
    }
  },
  methods: {
    saveSettings() {
      // 這裡添加保存設置的邏輯
      console.log('設置已保存', this.settings);
    }
  }
}
</script>

<style scoped>
.bg-secondary, .btn-secondary {
  background-color: rgba(179, 179, 179, 0.8) !important;
}
</style>