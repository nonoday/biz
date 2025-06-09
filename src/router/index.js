import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    // {
    //   path: "/",
    //   name: '/',
    //   component: () => import('@/views/main/index.vue'),
    //   meta: { 
    //     layout : 'NoneLayout' , 
    //     title : '도로명주소 안내시스템'
    //   },
    // },
    {
      path: "/",
      name: '/',
      component: () => import('@/views/markup_list/List.vue'),
      meta: { 
        layout : 'NoneLayout' , 
        title : '도로명주소 안내시스템'
      },
    },
    {
      path: "/list",
      name: '/list',
      component: () => import('@/views/markup_list/List.vue'),
      meta: { 
        layout : 'NoneLayout' , 
        title : '도로명주소 안내시스템'
      },
    },
    {
      path: "/button",
      name: '/button',
      component: () => import('@/views/common/Button.vue'),
      meta: { 
        layout : 'DefaultLayout' , 
        title : '도로명주소 안내시스템'
      },
    },
    {
      path: "/board",
      name: '/board',
      component: () => import('@/views/common/Board.vue'),
      meta: { 
        layout : 'DefaultLayout' , 
        title : '도로명주소 안내시스템'
      },
    },
    //주소정보 정책소개 Address Information Policy Introduction
    {
      path: "/policy_introduction/PolicyIntroduction",
      name: '/policy_introduction/PolicyIntroduction',
      component: () => import('@/views/policy_introduction/PolicyIntroduction.vue'),
      meta: { layout : 'DefaultLayout' , title : '주소정보 활용정책 소개 < 주소정보 정책소개 | 주소기반산업지원서비스'},
    },
    
    
    //주소정보 체험하기 Experience Address Information


    //주소정보 자료제공 Address information data provision
    {
      path: "/data_provision/AddressDownload",
      name: '/data_provision/AddressDownload',
      component: () => import('@/views/data_provision/AddressDownload.vue'),
      meta: { layout : 'DefaultLayout' , title : '주소정보 다운로드 < 주소정보 자료제공 | 주소기반산업지원서비스'},
    },
    {
      path: "/data_provision/AddressDownloadDetails",
      name: '/data_provision/AddressDownloadDetails',
      component: () => import('@/views/data_provision/AddressDownloadDetails.vue'),
      meta: { layout : 'DefaultLayout' , title : '다운로드 상세 < 주소정보 다운로드 < 주소정보 자료제공 | 주소기반산업지원서비스'},
    },
    {
      path: "/data_provision/DataOrganization",
      name: '/data_provision/DataOrganization',
      component: () => import('@/views/data_provision/DataOrganization.vue'),
      meta: { layout : 'DefaultLayout' , title : '데이터 구성 < 주소정보 다운로드 < 주소정보 자료제공 | 주소기반산업지원서비스'},
    },
    {
      path: "/data_provision/SchemaComposition",
      name: '/data_provision/SchemaComposition',
      component: () => import('@/views/data_provision/SchemaComposition.vue'),
      meta: { layout : 'DefaultLayout' , title : '스키마 구성  < 주소정보 다운로드 < 주소정보 자료제공 | 주소기반산업지원서비스'},
    },

    // 주소정보 소통창구 Address information communication window
    {
      path: "/TechTipsList",
      name: '/TechTipsList',
      component: () => import('@/views/communication/TechTipsList.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },
    {
      path: "/TechTipsDetails",
      name: '/TechTipsDetails',
      component: () => import('@/views/communication/TechTipsDetails.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },


    {
      path: "/Inquiry",
      name: '/Inquiry',
      component: () => import('@/views/communication/InquiryList.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },
    {
      path: "/InquiryDetails",
      name: '/InquiryDetails',
      component: () => import('@/views/communication/InquiryDetails.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },
    {
      path: "/Notice",
      name: '/Notice',
      component: () => import('@/views/communication/NoticeList.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },
    {
      path: "/NoticeDetails",
      name: '/NoticeDetails',
      component: () => import('@/views/communication/NoticeDetails.vue'),
      meta: { layout : 'DefaultLayout' , title : ' | 주소기반산업지원서비스'},
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  if(to.path !== '/' && document.getElementById('innorixjs') === null) {
    injectScript('/assets/innorix/innorix.js', 'innorixjs', 'script');

    injectScript('/assets/innorix/innorix.css', 'innorixcss', 'link');

    import("primevue/resources/themes/lara-light-teal/theme.css") ;
    import("primeicons/primeicons.css");
    import('bootstrap-icons/font/bootstrap-icons.min.css');
    import('@/assets/scss/common/_function.scss');
    import('@/assets/scss/all.scss');
    import('bootstrap-icons/font/bootstrap-icons.min.css');
  }

  if(to.path === '/') {
    document.body.classList.add('layoutMain');
    document.body.style.backgroundColor = '#f2f5fa';
  } else {
    document.body.classList.remove('layoutMain');
    document.body.style.backgroundColor = '';
  }

  return next();
});

const injectScript = (url, id, elmtType) => {
  const elmt = document.createElement(elmtType);
  elmt.src = url;
  elmt.id = id;
  document.getElementsByTagName('head')[0].appendChild(elmt);
}


export default router
