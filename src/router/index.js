import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    

    {
      path: "/",
      name: '/',
      component: () => import('@/views/markup_list/List.vue'),
      meta: { 
        layout: 'NoneLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플'
      },
    },
    {
      path: "/list",
      name: '/list',
      component: () => import('@/views/markup_list/List.vue'),
      meta: { 
        layout: 'NoneLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플',
      },
    },
    {
      path: "/button",
      name: '/button',
      component: () => import('@/views/common/Button.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플'
      },
    },
    {
      path: "/layer",
      name: '/layer',
      component: () => import('@/views/common/Layer.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플'
      },
    },
    {
      path: "/calendar",
      name: '/calendar',
      component: () => import('@/views/common/CalendarSample.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플'
      },
    },
    
    {
      path: "/board",
      name: '/board',
      component: () => import('@/views/common/Board.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플',
      },
    },
    {
      path: "/AddressCardSample",
      name: '/AddressCardSample',
      component: () => import('@/views/common/AddressCardSample.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플',
      },
    },

    {
      path: "/SearchResultHeaderSample",
      name: '/SearchResultHeaderSample',
      component: () => import('@/views/common/SearchResultHeaderSample.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '도로명주소 안내시스템',
        depth2: '샘플',
      },
    },












    //주소정보 정책소개 Address Information Policy Introduction
    {
      path: "/policy_introduction/PolicyIntroduction",
      name: '/policy_introduction/PolicyIntroduction',
      component: () => import('@/views/policy_introduction/PolicyIntroduction.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '주소정보 활용정책 소개',
        depth2: '주소정보 정책소개',
        firstpage: true
      },
    },
    {
      path: "/policy_introduction/AddressThing",
      name: '/policy_introduction/AddressThing',
      component: () => import('@/views/policy_introduction/AddressThing.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '사물주소 소개',
        depth3: '사물주소',
        depth2: '주소정보 정책소개'
      },
    },
    {
      path: "/policy_introduction/3DAddress",
      name: '/policy_introduction/3DAddress',
      component: () => import('@/views/policy_introduction/3DAddress.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '입체도로 소개',
        depth3: '입체주소',
        depth2: '주소정보 정책소개'
      },
    },
    {
      path: "/policy_introduction/location",
      name: '/policy_introduction/location',
      component: () => import('@/views/policy_introduction/location.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '장소지능 출입구 정보 소개',
        depth3: '장소지능정보',
        depth2: '주소정보 정책소개'
      },
    },
    {
      path: "/policy_introduction/Premier",
      name: '/policy_introduction/Premier',
      component: () => import('@/views/policy_introduction/Premier.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '수상시설',
        depth2: '주소정보 정책소개'
      },
    },
    {
      path: "/policy_introduction/Statistics",
      name: '/policy_introduction/Statistics',
      component: () => import('@/views/policy_introduction/Statistics.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '주요 통계',
        depth3: '주소정보통계',
        depth2: '주소정보 정책소개'
      },
    },
    
    
    //주소정보 체험하기 Experience Address Information
    {
      path: "/experience/IntendedUse",
      name: '/experience/IntendedUse',
      component: () => import('@/views/experience/IntendedUse.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '사용목적 선택',
        depth3: '사용자 추천',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/IntendedUseDetailedSettings",
      name: '/experience/IntendedUseDetailedSettings',
      component: () => import('@/views/experience/IntendedUseDetailedSettings.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '세부 설정 선택',
        depth3: '사용자 추천',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/IntendedUseResult",
      name: '/experience/IntendedUseResult',
      component: () => import('@/views/experience/IntendedUseResult.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '결과',
        depth3: '사용자 추천',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/Attribute",
      name: '/experience/Attribute',
      component: () => import('@/views/experience/Attribute.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '소개',
        depth3: '도로명 주소 속성정보 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/AttributeBasic",
      name: '/experience/AttributeBasic',
      component: () => import('@/views/experience/AttributeBasic.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '기본',
        depth3: '도로명 주소 속성정보 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/AttributeExpansion",
      name: '/experience/AttributeExpansion',
      component: () => import('@/views/experience/AttributeExpansion.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '확장',
        depth3: '도로명 주소 속성정보 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/Space",
      name: '/experience/Space',
      component: () => import('@/views/experience/Space.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '소개',
        depth3: '도로명 주소 공간정보 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/Experience",
      name: '/experience/Experience',
      component: () => import('@/views/experience/Experience.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '체험하기',
        depth3: '도로명 주소 공간정보 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/NewExperience",
      name: '/experience/NewExperience',
      component: () => import('@/views/experience/NewExperience.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '소개',
        depth3: '신규 주소정책 체험하기',
        depth2: '주소정보 체험하기'
      },
    },
    {
      path: "/experience/NewExperienceBasic",
      name: '/experience/NewExperienceBasic',
      component: () => import('@/views/experience/NewExperienceBasic.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '체험하기',
        depth3: '신규 주소정책 체험하기',
        depth2: '주소정보 체험하기'
      },
    },

    //주소정보 자료제공 Address information data provision
    {
      path: "/data_provision/AddressDownload",
      name: '/data_provision/AddressDownload',
      component: () => import('@/views/data_provision/AddressDownload.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '주소정보 다운로드',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressDownloadDetails",
      name: '/data_provision/AddressDownloadDetails',
      component: () => import('@/views/data_provision/AddressDownloadDetails.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '다운로드 상세',
        depth3: '주소정보 다운로드',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressProvided",
      name: '/data_provision/AddressProvided',
      component: () => import('@/views/data_provision/AddressProvided.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '주소정보 다운로드',
        depth3: '주소정보 다운로드',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressLinkage",
      name: '/data_provision/AddressLinkage',
      component: () => import('@/views/data_provision/AddressLinkage.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '주소정보 데이터 연계',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/LinkageTerms",
      name: '/data_provision/LinkageTerms',
      component: () => import('@/views/data_provision/LinkageTerms.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '약관동의',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/ApplicationWrite",
      name: '/data_provision/ApplicationWrite',
      component: () => import('@/views/data_provision/ApplicationWrite.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '신청서 작성',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiList",
      name: '/data_provision/AddressApiList',
      component: () => import('@/views/data_provision/AddressApiList.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '목록',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiRoadNameiPc",
      name: '/data_provision/AddressApiRoadNameiPc',
      component: () => import('@/views/data_provision/AddressApiRoadNameiPc.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '상세 도로명주소',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiRoadNameiMo",
      name: '/data_provision/AddressApiRoadNameiMo',
      component: () => import('@/views/data_provision/AddressApiRoadNameiMo.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '상세 도로명주소',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiDetailePopdAddress",
      name: '/data_provision/AddressApiDetailePopdAddress',
      component: () => import('@/views/data_provision/AddressApiDetailePopdAddress.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '팝업 API',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiDetailedAddress",
      name: '/data_provision/AddressApiDetailedAddress',
      component: () => import('@/views/data_provision/AddressApiDetailedAddress.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '팝업 API',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },
    {
      path: "/data_provision/AddressApiMapdAddress",
      name: '/data_provision/AddressApiMapdAddress',
      component: () => import('@/views/data_provision/AddressApiMapdAddress.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '팝업 API',
        depth3: '주소정보 데이터 연계',
        depth2: '주소정보 자료제공'
      },
    },


    

    // 주소정보 소통창구 Address information communication window
    {
      path: "/communication/TechTipsList",
      name: '/communication/TechTipsList',
      component: () => import('@/views/communication/TechTipsList.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '목록',
        depth3: '주소정보 소통창구',
        depth2: '주소정보 소통창구',
        firstpage: true
      },
    },
    {
      path: "/communication/TechTipsDetails",
      name: '/communication/TechTipsDetails',
      component: () => import('@/views/communication/TechTipsDetails.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '상세',
        depth3: '주소정보 소통창구',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/TechTipsWrite",
      name: '/communication/TechTipsWrite',
      component: () => import('@/views/communication/TechTipsWrite.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '쓰기',
        depth3: '주소정보 소통창구',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/InquiryList",
      name: '/communication/InquiryList',
      component: () => import('@/views/communication/InquiryList.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '목록',
        depth3: '주소정보 문의하기',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/InquiryDetails",
      name: '/communication/InquiryDetails',
      component: () => import('@/views/communication/InquiryDetails.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '상세',
        depth3: '주소정보 문의하기',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/InquiryWrite",
      name: '/communication/InquiryWrite',
      component: () => import('@/views/communication/InquiryWrite.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '쓰기',
        depth3: '주소정보 문의하기',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/NoticeList",
      name: '/communication/NoticeList',
      component: () => import('@/views/communication/NoticeList.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '목록',
        depth3: '주소정보 공지사항',
        depth2: '주소정보 소통창구'
      },
    },
    {
      path: "/communication/NoticeDetails",
      name: '/communication/NoticeDetails',
      component: () => import('@/views/communication/NoticeDetails.vue'),
      meta: { 
        layout: 'DefaultLayout',
        title: '상세',
        depth3: '주소정보 공지사항',
        depth2: '주소정보 소통창구'
      },
    },

    //마이페이지
    {
      path: "/mypage/ShoppingCart",
      name: '/mypage/ShoppingCart',
      component: () => import('@/views/mypage/ShoppingCart.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: '장바구니',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ApplicationFormWrite",
      name: '/mypage/ApplicationFormWrite',
      component: () => import('@/views/mypage/ApplicationFormWrite.vue'),
      meta: { 
        layout: 'mypage',
        title: '신청서 작성',
        depth3: '장바구니',
        depth2: '마이페이지'
      },
    },


    {
      path: "/mypage/Favorites",
      name: '/mypage/Favorites',
      component: () => import('@/views/mypage/Favorites.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: '나의 즐겨찾기',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ApplicationHistory",
      name: '/mypage/ApplicationHistory',
      component: () => import('@/views/mypage/ApplicationHistory.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: '다운로드 신청내역',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ConnectionsList",
      name: '/mypage/ConnectionsList',
      component: () => import('@/views/mypage/ConnectionsList.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: '연계신청내역',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ConnectionsDetails",
      name: '/mypage/ConnectionsDetails',
      component: () => import('@/views/mypage/ConnectionsDetails.vue'),
      meta: { 
        layout: 'mypage',
        title: '상세',
        depth3: '연계신청내역',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ConnectionsModify",
      name: '/mypage/ConnectionsModify',
      component: () => import('@/views/mypage/ConnectionsModify.vue'),
      meta: { 
        layout: 'mypage',
        title: '수정',
        depth3: '연계신청내역',
        depth2: '마이페이지'
      },
    },

    {
      path: "/mypage/ApiList",
      name: '/mypage/ApiList',
      component: () => import('@/views/mypage/ApiList.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: 'API 인증키 관리',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ApiDetails",
      name: '/mypage/ApiDetails',
      component: () => import('@/views/mypage/ApiDetails.vue'),
      meta: { 
        layout: 'mypage',
        title: '상세',
        depth3: 'API 인증키 관리',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/ApiModify",
      name: '/mypage/ApiModify',
      component: () => import('@/views/mypage/ApiModify.vue'),
      meta: { 
        layout: 'mypage',
        title: '수정',
        depth3: 'API 인증키 관리',
        depth2: '마이페이지',
        firstpage: true
      },
    },
    {
      path: "/mypage/InquiryList",
      name: '/mypage/InquiryList',
      component: () => import('@/views/mypage/InquiryList.vue'),
      meta: { 
        layout: 'mypage',
        title: '목록',
        depth3: '나의 문의글',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/InquiryDetails",
      name: '/mypage/InquiryDetails',
      component: () => import('@/views/mypage/InquiryDetails.vue'),
      meta: { 
        layout: 'mypage',
        title: '상세',
        depth3: '나의 문의글',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/InquiryDetailsWaiting",
      name: '/mypage/InquiryDetailsWaiting',
      component: () => import('@/views/mypage/InquiryDetailsWaiting.vue'),
      meta: { 
        layout: 'mypage',
        title: '상세',
        depth3: '나의 문의글',
        depth2: '마이페이지'
      },
    },
    {
      path: "/mypage/InquiryModify",
      name: '/mypage/InquiryModify',
      component: () => import('@/views/mypage/InquiryModify.vue'),
      meta: { 
        layout: 'mypage',
        title: '수정',
        depth3: '나의 문의글',
        depth2: '마이페이지'
      },
    },




  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
  if(to.path !== '/' && document.getElementById('innorixjs') === null) {
    // injectScript('/assets/innorix/innorix.js', 'innorixjs', 'script');
    // injectScript('/assets/innorix/innorix.css', 'innorixcss', 'link');

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
