import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
// import "primevue/resources/themes/lara-light-teal/theme.css";
// import "primeflex/primeflex.scss";
// import "primevue/resources/primevue.min.css";
// import "primeicons/primeicons.css";
// import 'bootstrap-icons/font/bootstrap-icons.min.css';

// import '@/assets/scss/_mixin.scss'
// import '@/assets/scss/_function.scss'
// import '@/assets/scss/all.scss'

router.beforeEach((to, form, next) => {
    document.title = to.meta.title || '기본 타이틀';
    next();
});
const locale_ko = {
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    today: '오늘',
    weekHeader: 'Wk',
    firstDayOfWeek: 0,
    dateFormat: 'yy-mm-dd',
    accept: '확인',
    reject: '취소',
    cancel: '닫기',
    clear: 'Clear'
};

export function createVueApp() {
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.use(PrimeVue, {
        locale: locale_ko,
    });
    app.directive('caption', {});
    return { app, router };
}

// 클라이언트 사이드에서만 실행
if (typeof window !== 'undefined') {
    const { app } = createVueApp();
    app.mount('#app');
}

