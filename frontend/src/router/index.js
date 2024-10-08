import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import MenuManagement from '../components/MenuManagement.vue'
import OrderManagement from '../components/OrderManagement.vue'
import InventoryManagement from '../components/InventoryManagement.vue'
import EmployeeManagement from '../components/EmployeeManagement.vue'
import FinancialReports from '../components/FinancialReports.vue'
import CustomerRelationshipManagement from '../components/CustomerRelationshipManagement.vue'
import RestaurantOperations from '../components/RestaurantOperations.vue'
import MarketingManagement from '../components/MarketingManagement.vue'
import SystemSettings from '../components/SystemSettings.vue'

const routes = [
    { path: '/', component: Dashboard },
    { path: '/menu', component: MenuManagement },
    { path: '/orders', component: OrderManagement },
    { path: '/inventory', component: InventoryManagement },
    { path: '/employees', component: EmployeeManagement },
    { path: '/financial', component: FinancialReports },
    { path: '/crm', component: CustomerRelationshipManagement },
    { path: '/operations', component: RestaurantOperations },
    { path: '/marketing', component: MarketingManagement },
    { path: '/settings', component: SystemSettings }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router