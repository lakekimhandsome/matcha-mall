const IMAGE_URLS = [
  'https://plus.unsplash.com/premium_photo-1694825173868-ed003c071068?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1627308592814-f88b68f7b4a1?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1759324351433-c5a1063f8ac6?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1663853491469-786911ac70b8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1717398804998-ad2d48822518?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const PRODUCTS = [
  {
    id: 1,
    name: '유지녹차 말차 파우더',
    price: 32000,
    category: 'powder',
    best: true,
    imageUrl: IMAGE_URLS[0],
    description: '일본 우지 지역의 유지녹차를 100% 사용한 프리미엄 말차 파우더입니다. 진한 녹색과 깊은 풍미, 은은한 단맛이 특징입니다.',
    details: ['원산지: 일본 우지', '용량: 100g', '보관: 냉장 보관 권장', '유통기한: 제조일로부터 12개월']
  },
  {
    id: 2,
    name: '세레모니얼 말차 세트',
    price: 58000,
    category: 'powder',
    best: true,
    imageUrl: IMAGE_URLS[1],
    description: '차도구와 프리미엄 세레모니얼 말차가 함께 들어있는 선물용 세트입니다. 말차 입문자에게도 추천합니다.',
    details: ['세레모니얼 말차 50g', '차도구 4종 포함', '선물 포장 가능', '유통기한: 제조일로부터 12개월']
  },
  {
    id: 3,
    name: '말차 라떼 드립백 10입',
    price: 18000,
    category: 'drink',
    best: true,
    imageUrl: IMAGE_URLS[2],
    description: '뜨거운 물만 부으면 완성되는 말차 라떼 드립백. 집에서도 카페 퀄리티의 말차 라떼를 즐기세요.',
    details: ['10입 개별 포장', '우유 또는 물 사용 가능', '카페인: 중간', '유통기한: 제조일로부터 18개월']
  },
  {
    id: 4,
    name: '말차 티백 20입',
    price: 15000,
    category: 'drink',
    best: false,
    imageUrl: IMAGE_URLS[3],
    description: '간편하게 우려 마시는 말차 티백. 출근 전이나 오후 티타임에 부담 없이 즐길 수 있습니다.',
    details: ['20입', '무첨가 말차', '뜨거운·찬물 모두 가능', '유통기한: 제조일로부터 18개월']
  },
  {
    id: 5,
    name: '말차 초콜릿 바',
    price: 8500,
    category: 'snack',
    best: false,
    imageUrl: IMAGE_URLS[4],
    description: '고급 다크 초콜릿과 말차의 조화. 쌉싸름한 말차 향과 초콜릿의 달콤함이 어우러진 간식입니다.',
    details: ['개당 40g', '카카오 55%', '말차 8% 포함', '유통기한: 제조일로부터 6개월']
  },
  {
    id: 6,
    name: '말차 쿠키',
    price: 12000,
    category: 'snack',
    best: false,
    imageUrl: IMAGE_URLS[0],
    description: '버터 풍미 가득한 말차 쿠키. 바삭한 식감과 진한 말차 향이 커피·차와 잘 맞습니다.',
    details: ['8개입', '천연 말차 사용', '개별 포장', '유통기한: 제조일로부터 3개월']
  },
  {
    id: 7,
    name: '말차 아이스크림',
    price: 9800,
    category: 'snack',
    best: false,
    imageUrl: IMAGE_URLS[1],
    description: '부드러운 크림 베이스에 말차를 듬뿍 넣은 프리미엄 아이스크림. 진한 말차의 쌉싸름함이 살아 있습니다.',
    details: ['용량: 500ml', '말차 12% 포함', '냉동 보관', '유통기한: 제조일로부터 12개월']
  },
  {
    id: 8,
    name: '말차 그라놀라',
    price: 14000,
    category: 'snack',
    best: false,
    imageUrl: IMAGE_URLS[2],
    description: '말차 파우더를 넣어 구운 그라놀라. 요거트나 우유에 넣어 아침 식사나 간식으로 즐기세요.',
    details: ['용량: 300g', '견과류·건과일 포함', '무첨가 설탕', '유통기한: 제조일로부터 6개월']
  }
];

const CATEGORY_LABELS = {
  powder: '파우더',
  drink: '음료',
  snack: '간식'
};
