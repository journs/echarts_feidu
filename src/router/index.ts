import { createRouter, createWebHashHistory } from 'vue-router';
import CommunityManagement from '../components/CommunityManagement.vue';
import SecurityMonitoring from '../components/SecurityMonitoring.vue';
import CimPlatform from '../components/CimPlatform.vue';
import EnergyDetection from '../components/EnergyDetection.vue';
import EnergySavingAnalysis from '../components/EnergySavingAnalysis.vue';

const routes: Array<any> = [
    {
        path: '/',
        redirect: '/community-management' // 将根路径重定向到社区管理页面
    },
    {
        path: '/community-management',
        component: CommunityManagement
    },
    {
        path: '/security-monitoring',
        component: SecurityMonitoring
    },
    {
        path: '/cim-platform',
        component: CimPlatform
    },
    {
        path: '/energy-detection',
        component: EnergyDetection
    },
    {
        path: '/energy-saving-analysis',
        component: EnergySavingAnalysis
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
