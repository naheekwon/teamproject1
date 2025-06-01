// 식당 데이터 (예시)
let restaurantData = []; // 서버에서 가져올 데이터로 변경

// 카카오맵 API 키
const KAKAO_API_KEY = 'e627fd1253b1591fc15b125faae850e3';

// 사용 가능한 모든 태그 (카테고리)
const allTags = [
  // 음식 종류
  { value: '한식', type: 'foodtype' },
  { value: '중식', type: 'foodtype' },
  { value: '일식', type: 'foodtype' },
  { value: '양식', type: 'foodtype' },
  { value: '아시안', type: 'foodtype' },
  { value: '기타', type: 'foodtype' },
  { value: '분식', type: 'foodtype' },
  
  // 특징
  { value: '혼밥하기 좋은', type: 'feature' },
  { value: '늦은 저녁 식사 가능', type: 'feature' },
  { value: '이른 아침 식사 가능', type: 'feature' },
  { value: '단체 식사 가능', type: 'feature' },
  { value: '단체 포장/예약 가능', type: 'feature' },
  { value: '가성비 좋은', type: 'feature' },
  { value: '주류도 판매하는', type: 'feature' },
  { value: '토요일 영업하는', type: 'feature' },
  { value: '일요일 영업하는', type: 'feature' },
  
  // 카페 태그
  { value: '카페', type: 'type' },
  { value: '카공하기 좋은', type: 'cafe' },
  { value: '팀플하기 좋은', type: 'cafe' },
  
  // 주점 태그
  { value: '단체 모임하기 좋은', type: 'bar' },
  { value: '안주가 맛있는', type: 'bar' }
];

// 다국어 지원을 위한 번역 데이터
const translations = {
  // 영어 번역
  en: {
    // 페이지 요소
    '단맛지도': 'DanMat Map',
    '식당이나 태그 검색...': 'Search restaurants or tags...',
    '카테고리 필터:': 'Category Filter:',
    '태그 선택': 'Select tags',
    '검색 결과가 없습니다': 'No search results',
    '카테고리 메뉴': 'Category Menu',
    '오늘의 추천 맛집': 'Today\'s Recommended Restaurant',
    '다른 가게 추천받기': 'Get Another Recommendation',
    
    // 카테고리 메뉴
    '음식점': 'Restaurants',
    '카페': 'Cafes',
    '주점': 'Bars',
    '전체보기': 'View All',
    '랜덤추천': 'Random',
    '태그 필터': 'Tag Filters',
    '태그로 찾기': 'Find by Tags',
    '식당': 'Restaurants',
    '식당 종류': 'Restaurant Types',
    '특징': 'Features',
    '음식 종류': 'Food Types',
    '가격대': 'Price Range',
    '편의시설': 'Amenities',
    '기타 필터': 'Other Filters',
    '좌석 타입': 'Seating Types',
    '모두 보기': 'Show All',
    '영업 시간': 'Business Hours',
    '다른 추천': 'Try Another',
    '랜덤 추천': 'Random Recommendation',
    '닫기': 'Close',
    '가게 추천': 'Recommend',
    
    // 태그 번역
    '한식': 'Korean Food',
    '중식': 'Chinese Food',
    '일식': 'Japanese Food',
    '양식': 'Western Food',
    '아시안': 'Asian Food',
    '기타': 'Others',
    '카페': 'Cafe',
    '혼밥하기 좋은': 'Good for Solo Dining',
    '늦은 저녁 식사 가능': 'Late Night Dining',
    '이른 아침 식사 가능': 'Early Morning Dining',
    '단체 식사 가능': 'Group Dining Available',
    '단체 포장/예약 가능': 'Group Take-out/Reservation',
    '가성비 좋은': 'Good Value',
    '주류도 판매하는': 'Serves Alcohol',
    '토요일 영업하는': 'Open on Saturday',
    '일요일 영업하는': 'Open on Sunday',
    '카공하기 좋은': 'Good for Study',
    '팀플하기 좋은': 'Good for Team Projects',
    '단체 모임하기 좋은': 'Good for Group Meetings',
    '안주가 맛있는': 'Good Snacks',
    '분식': 'Korean Snacks',
    
    // 식당 이름
    '맛있는 한식당': 'Delicious Korean Restaurant',
    '카페 단맛': 'Sweet Cafe',
    '중화요리집': 'Chinese Restaurant',
    '스시 명가': 'Sushi House',
    '카페 공부': 'Study Cafe'
  },
  
  // 일본어 번역
  ja: {
    // 페이지 요소
    '단맛지도': 'ダンマット地図',
    '식당이나 태그 검색...': 'レストランやタグを検索...',
    '카테고리 필터:': 'カテゴリフィルター:',
    '태그 선택': 'タグを選択',
    '검색 결과가 없습니다': '検索結果がありません',
    '카테고리 메뉴': 'カテゴリメニュー',
    '오늘のおすすめレストラン': '今日のおすすめレストラン',
    '別のお店を推薦': '別のお店を推薦',
    
    // 카테고리 메뉴
    '음식점': 'レストラン',
    '카페': 'カフェ',
    '주점': '居酒屋',
    '전체보기': '全て見る',
    '랜덤추천': 'ランダム',
    '태그 필터': 'タグフィルター',
    '태그로 찾기': 'タグで検索',
    '식당': 'レストラン',
    '식당 종류': 'レストランの種類',
    '특징': '特徴',
    '음식 종류': '料理の種類',
    '가격대': '価格帯',
    '편의시설': '施設',
    '기타 필터': 'その他のフィルター',
    '좌석 타입': '座席タイプ',
    '모두 보기': '全て表示',
    '영업 시간': '営業時間',
    '다른 추천': '別のおすすめ',
    'ランダムおすすめ': 'ランダムおすすめ',
    '閉じる': '閉じる',
    'おすすめ': 'おすすめ',
    
    // 태그 번역
    '한식': '韓国料理',
    '중식': '中華料理',
    '일식': '日本料理',
    '양식': '洋食',
    '아시안': 'アジア料理',
    '기타': 'その他',
    '카페': 'カフェ',
    '혼밥하기 좋은': '一人で食べるのに良い',
    '遅い夕食可能': '遅い夕食可能',
    '早朝食事可能': '早朝食事可能',
    '団体食事可能': '団体食事可能',
    '団体テイクアウト/予約可能': '団体テイクアウト/予約可能',
    'コスパが良い': 'コスパが良い',
    'お酒も販売': 'お酒も販売',
    '土曜営業': '土曜営業',
    '日曜営業': '日曜営業',
    '勉強に良い': '勉強に良い',
    'チームプロジェクトに良い': 'チームプロジェクトに良い',
    '団体会合に良い': '団体会合に良い',
    '美味しいおつまみ': '美味しいおつまみ',
    '韓国ファストフード': '韓国ファストフード',
    
    // 식당 이름
    '美味しい韓国料理店': '美味しい韓国料理店',
    'カフェ甘味': 'カフェ甘味',
    '中華料理店': '中華料理店',
    '寿司の名店': '寿司の名店',
    '勉強カフェ': '勉強カフェ'
  },
  
  // 중국어 번역
  zh: {
    // 페이지 요소
    '단맛지도': '丹麦地图',
    '식당이나 태그 검색...': '搜索餐厅或标签...',
    '카테고리 필터:': '类别筛选:',
    '태그 선택': '选择标签',
    '검색 결과가 없습니다': '没有搜索结果',
    '类别菜单': '类别菜单',
    '今日推荐餐厅': '今日推荐餐厅',
    '获取另一个推荐': '获取另一个推荐',
    
    // 카테고리 메뉴
    '음식점': '餐厅',
    '카페': '咖啡厅',
    '주점': '酒吧',
    '전체보기': '查看全部',
    '随机推荐': '随机推荐',
    '标签筛选': '标签筛选',
    '按标签查找': '按标签查找',
    '餐厅': '餐厅',
    '餐厅类型': '餐厅类型',
    '特点': '特点',
    '食物类型': '食物类型',
    '价格范围': '价格范围',
    '设施': '设施',
    '其他筛选': '其他筛选',
    '座位类型': '座位类型',
    '显示全部': '显示全部',
    '营业时间': '营业时间',
    '换一个推荐': '换一个推荐',
    '随机推荐': '随机推荐',
    '关闭': '关闭',
    '推荐': '推荐',
    
    // 태그 번역
    '韩国料理': '韩国料理',
    '中国料理': '中国料理',
    '日本料理': '日本料理',
    '西餐': '西餐',
    '亚洲料理': '亚洲料理',
    '其他': '其他',
    '咖啡厅': '咖啡厅',
    '适合独自用餐': '适合独自用餐',
    '可晚餐': '可晚餐',
    '可早餐': '可早餐',
    '可团体用餐': '可团体用餐',
    '可团体打包/预约': '可团体打包/预约',
    '性价比高': '性价比高',
    '提供酒类': '提供酒类',
    '周六营业': '周六营业',
    '周日营业': '周日营业',
    '适合学习': '适合学习',
    '适合团队项目': '适合团队项目',
    '适合团体聚会': '适合团体聚会',
    '小吃可口': '小吃可口',
    '韩式小吃': '韩式小吃',
    
    // 식당 이름
    '美味韩国餐厅': '美味韩国餐厅',
    '甜味咖啡厅': '甜味咖啡厅',
    '中华料理店': '中华料理店',
    '寿司名家': '寿司名家',
    '学习咖啡厅': '学习咖啡厅'
  }
};

// 현재 선택된 언어 (기본값: 한국어)
let currentLang = 'ko';

// 검색을 위한 데이터 소스 생성
const searchData = [
  // 식당 이름을 데이터 소스에 추가
  ...restaurantData.map(place => ({
    value: place.name,
    type: 'restaurant',
    id: place.id
  })),
  
  // 태그를 데이터 소스에 추가
  ...allTags.map(tag => ({
    value: tag.value,
    type: 'tag',
    tagType: tag.type
  }))
];

// 전역 변수
let map;
let markers = [];
let tagify;
let autoCompleteJS;
let selectedTags = []; // 선택된 태그 저장 배열
let currentCategory = 'restaurant'; // 현재 선택된 카테고리 (기본값: 음식점)

window.onload = function () {
  // 서버에서 식당 데이터 가져오기
  fetchRestaurantData();
  // 다른 초기화 함수들은 fetchRestaurantData 내부에서 호출됩니다.
};

// 서버에서 식당 데이터 가져오기
async function fetchRestaurantData() {
  try {
    // 로딩 애니메이션 표시
    showLoading();
    
    const response = await fetch('http://localhost:8080/restaurants');
    const data = await response.json();
    
    // 모든 주소를 좌표로 변환하는 Promise 배열 생성
    const geocodePromises = data.map((restaurant) => {
      return new Promise((resolve) => {
        if (!restaurant.address || restaurant.address.trim() === '') {
          // 주소가 없는 경우 기본 좌표 사용
          console.warn(`주소 정보 없음: ${restaurant.title}`);
          resolve({
            ...restaurant,
            latitude: "37.321877",
            longitude: "127.126899"
          });
          return;
        }
        
        // REST API로 주소 검색
        geocodeAddress(restaurant.address)
          .then(result => {
            if (result) {
              resolve({
                ...restaurant,
                latitude: result.y,
                longitude: result.x
              });
            } else {
              // 좌표 변환 실패 시 기본 좌표 사용
              console.warn(`주소 변환 실패: ${restaurant.address}`);
              resolve({
                ...restaurant,
                latitude: "37.321877",
                longitude: "127.126899"
              });
            }
          })
          .catch(error => {
            console.error(`주소 변환 중 오류: ${restaurant.address}`, error);
            resolve({
              ...restaurant,
              latitude: "37.321877",
              longitude: "127.126899"
            });
          });
      });
    });
    
    // 모든 주소 변환이 완료될 때까지 기다림
    const geocodedData = await Promise.all(geocodePromises);
    
    // 받아온 데이터를 마커 표시에 적합한 형태로 변환
    restaurantData = geocodedData.map(restaurant => {
      // 서버에서 받은 카테고리 값을 영문 카테고리로 매핑
      let category = 'restaurant'; // 기본값
      
      // restaurant.category 값에 따라 적절한 영문 카테고리 설정
      if (restaurant.category) {
        switch(restaurant.category) {
          case '음식점':
            category = 'restaurant';
            break;
          case '카페':
            category = 'cafe';
            break;
          case '주점':
            category = 'bar';
            break;
          case '기타':
            category = 'other';
            break;
          default:
            category = 'restaurant';
        }
      }
      
      return {
        id: restaurant.id,
        name: restaurant.title,
        position: new kakao.maps.LatLng(parseFloat(restaurant.latitude), parseFloat(restaurant.longitude)),
        tags: restaurant.tags,
        category: category,
        menu: restaurant.menu,
        address: restaurant.address,
        imageUrl: restaurant.imageUrl,
        status: restaurant.status,
        // 다국어 번역 필드 추가
        titleEn: restaurant.titleEn,
        titleJa: restaurant.titleJa, 
        titleZh: restaurant.titleZh,
        menuEn: restaurant.menuEn,
        menuJa: restaurant.menuJa,
        menuZh: restaurant.menuZh
      };
    });
    
    console.log('변환된 식당 데이터:', restaurantData);
    
    // 데이터를 가져온 후 지도 초기화 및 기타 초기화 작업 수행
    initMap();
    initTagify();
    initAutoComplete();
    initLanguageSelector();
    initCategoryMenu();
    initButtonEvents();
    
    // 로딩 애니메이션 숨기기
    hideLoading();
  } catch (error) {
    console.error('데이터를 가져오는 중 오류 발생:', error);
    alert('서버에서 데이터를 가져오는데 실패했습니다.');
    hideLoading();
  }
}
