import Dashboard from '../components/dashboard/Dashboard.vue'
import TrainingSession from '../components/dashboard/TrainingSession.vue'
import AdminUsers from '../components/admin/AdminUsers.vue'
import AdminUserDetails from '../components/admin/AdminUserDetails.vue'
import AdminNotifications from '../components/admin/AdminNotifications.vue'
import AdminTrainings from '../components/admin/AdminTrainings.vue'
import AdminTrainingsDetails from '../components/admin/AdminTrainingsDetails.vue'
import Login from '../components/dashboard/Login.vue'
import Signup from '../components/dashboard/Signup.vue'
import AdminLogin from '../components/admin/AdminLogin.vue'

export const routes = [
    {path: '/', component: Dashboard, name: 'dashboard'},
    {path: '/tranings/:session', component: TrainingSession, name: 'traningSession'},
    {path: '/admin/users', component: AdminUsers, name: 'adminUsers'},
    {path: '/admin/users/:details', component: AdminUserDetails, name: 'adminUserDetails'},
    {path: '/admin/notifications', component: AdminNotifications, name: 'adminNotifications'},
    {path: '/admin/tranings', component: AdminTrainings, name: 'adminTrainings'},
    {path: '/admin/tranings/:details', component: AdminTrainingsDetails, name: 'adminTrainingsDetails'},
    {path: '/admin/login', component: AdminLogin, name: 'adminLogin'},
    {path: '/login', component: Login, name: 'login'},
    {path: '/signup', component: Signup, name: 'signup'},
]