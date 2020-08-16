import Vue from 'vue'
import VueRouter from 'vue-router'
import Running_Order from '../views/Running_Order.vue'
import Closing_Order from '../views/Closing_Order.vue'
import Category from '../views/Category.vue'
import Add_Product from '../views/Add_Product.vue'
import Manage_Product from '../views/Manage_Product.vue'
import Add_Customer from '../views/Add_Customer.vue'
import Manage_Customer from '../views/Manage_Customer.vue'
import Add_Supplier from '../views/Add_Supplier.vue'
import Add_Salesman from '../views/Add_Salesman.vue'
import Manage_Salesman from '../views/Manage_Salesman.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/Running_Order',
            name: 'Running_Order',
            component: Running_Order
        },
        {
            path: '/Closing_Order',
            name: 'Closing_Order',
            component: Closing_Order
        },
        {
            path: '/Category',
            name: 'Category',
            component: Category
        },
        {
            path: '/Add_Product',
            name: 'Add_Product',
            component: Add_Product
        },
        {
            path: '/Manage_Product',
            name: 'Manage_Product',
            component: Manage_Product
        },
        {
            path: '/Add_Customer',
            name: 'Add_Customer',
            component: Add_Customer
        },
        {
            path: '/Manage_Customer',
            name: 'Manage_Customer',
            component: Manage_Customer
        },
        {
            path: '/Add_Supplier',
            name: 'Add_Supplier',
            component: Add_Supplier
        },
        {
            path: '/Add_Salesman',
            name: 'Add_Salesman',
            component: Add_Salesman
        },
        {
            path: '/Manage_Salesman',
            name: 'Manage_Salesman',
            component: Manage_Salesman
        }
    ]
})

export default router