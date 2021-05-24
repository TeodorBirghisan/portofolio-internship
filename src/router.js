import { createWebHistory, createRouter } from "vue-router";
import Login from './components/auth/Login'
import CVPage from './components/CVPage';
const routes = [{
    path: "/login",
    component: Login
},
{
    path:'/',
    name:'CVPage',
    component:CVPage
}];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;