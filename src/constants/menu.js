export const menus = [
  {
    title:'주소정책소개',
    subtitle:'국민생활 편의 및 안전을 위한<br />정부가 추진하고 있는 주소정책을<br />확인 할 수 있어요.',
    submenus: [
      {
        type:'link',
        label:'도로명주소?',
        action: () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          window.open('/introduction/GuideBook', 'popup', `width=${width},height=${height},scrollbars=yes`);
        },
        subtext: '도로명,기초번호,건물번호 등 건물에 주소를<br />표기하는 방식을 확인할 수 있어요.',
        new: true
      },
      {
        type:'link', 
        label:'사물주소', 
        href:'/common/sample',
        subtext:'주소부여가 어려운 곳에도 안전 사고 발생시<br />신속 대응 지원을 위한 사물주소 보여체계를<br />확인해 보세요.',
        new: false
      },
      {
        type:'link', 
        label:'입체주소', 
        href:'/common/sample',
        subtext:'도로명 부여 대상 도로가 지상도로에서<br />입체도로(고가,지하),내부도로(건물,통로)로<br /> 확대됩니다.'
      },
      {
        type:'link', 
        label:'장소지능', 
        href:'/common/sample',
        subtext:'기존 주출입고 뿐만 아니라 차량,교통약자,<br />로봇 등 다양한 이동체별 출입구 정보를<br />확인할 수 있어요.'
      },
      {
        type:'link', 
        label:'BI 소개', 
        href:'/common/sample',
        subtext:'도로명 주소 로고 BI(Brand Identity)를<br />확인할 수 있어요.'
      },
    ],
  },
  {
    title:'주소정보활용',
    subtitle:'편리한 도로명 주소를<br />지도에서 확인하고<br />지번주소를 도로명주소로<br />전환해 보세요!',
    submenus: [
      {
        type:'link', 
        label:'통합지도', 
        action: () => {
          const width = window.innerWidth;
          const height = window.innerHeight;
          window.open('/utilization/IntegratedMap', 'popup', `width=${width},height=${height},scrollbars=yes`);
        },
        subtext:'도로, 건물 등 도로명주소에 대한<br />위치정보를 확인할 수 있어요.'
      },
      {
        type:'link',
        label:'주소전환',
        href:'/utilization/AddressConvert',
        subtext:'지번주소를 도로명주소로 전환하여<br />다운로드 받을 수 있어요.'
      },
    ]
  },
  {
    title:'주소정보조회',
    subtitle:'상세설명필요',
    submenus: [
      {
        type:'link',
        label:'도로명 주소 조회',
        href:'/inquiry/RoadNameAddress',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'도로명 정보 조회',
        href:'/inquiry/RoadNameDataList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'사물 주소 조회',
        href:'/inquiry/AddressObject',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'우편 번호 조회',
        href:'/inquiry/PostalCode',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'지점 번호 조회',
        href:'/inquiry/BranchNumber',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'입체주소',
        href:'/common/sample',
        subtext:'기획중'
      },
    ]
  },
  {
    title:'주소이야기',
    subtitle:'상세설명필요',
    submenus: [
      {
        type:'link',
        label:'아름다운 길',
        href:'/story/BackgroundBoardList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'홍보자료',
        href:'/story/ReferenceBoardList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'우리 집 주소는?',
        href:'/story/InfoMyArea',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'주소통계',
        href:'/story/StatisMain',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'인포그래픽',
        href:'/story/Infographic',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'지자체 안내도',
        href:'/story/GuideMapSidoList',
        subtext:'상세설명필요'
      },
    ]
  },
  {
    title:'주소소통마당',
    subtitle:'상세설명필요',
    submenus: [
      {
        type:'link',
        label:'공지사항',
        href:'/forum/NoticeBoardList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'자주묻는질문(FAQ)',
        href:'/forum/FAQBoardList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'주소동일성 영문증명서 발급',
        href:'/forum/AddrIdentityMain',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'언론보도',
        href:'/forum/NewsBoardList',
        subtext:'상세설명필요'
      },
      {
        type:'link',
        label:'불편신고',
        href:'/forum/QABoardList',
        subtext:'상세설명필요'
      },
    ]
  },
] 