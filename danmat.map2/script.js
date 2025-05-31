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
    
    // 태그 번역
    '한식': '韓国料理',
    '중식': '中華料理',
    '일식': '日本料理',
    '양식': '洋食',
    '아시안': 'アジア料理',
    '기타': 'その他',
    '카페': 'カフェ',
    '혼밥하기 좋은': '一人で食べるのに良い',
    '늦은 저녁 식사 가능': '遅い夕食可能',
    '이른 아침 식사 가능': '早朝食事可能',
    '단체 식사 가능': '団体食事可能',
    '단체 포장/예약 가능': '団体テイクアウト/予約可能',
    '가성비 좋은': 'コスパが良い',
    '주류도 판매하는': 'お酒も販売',
    '토요일 영업하는': '土曜営業',
    '일요일 영업하는': '日曜営業',
    '카공하기 좋은': '勉強に良い',
    '팀플하기 좋은': 'チームプロジェクトに良い',
    '단체 모임하기 좋은': '団体会合に良い',
    
    // 식당 이름
    '맛있는 한식당': '美味しい韓国料理店',
    '카페 단맛': 'カフェ甘味',
    '중화요리집': '中華料理店',
    '스시 명가': '寿司の名店',
    '카페 공부': '勉強カフェ'
  },
  
  // 중국어 번역
  zh: {
    // 페이지 요소
    '단맛지도': '丹麦地图',
    '식당이나 태그 검색...': '搜索餐厅或标签...',
    '카테고리 필터:': '类别筛选:',
    '태그 선택': '选择标签',
    '검색 결과가 없습니다': '没有搜索结果',
    
    // 태그 번역
    '한식': '韩国料理',
    '중식': '中国料理',
    '일식': '日本料理',
    '양식': '西餐',
    '아시안': '亚洲料理',
    '기타': '其他',
    '카페': '咖啡厅',
    '혼밥하기 좋은': '适合独自用餐',
    '늦은 저녁 식사 가능': '可晚餐',
    '이른 아침 식사 가능': '可早餐',
    '단체 식사 가능': '可团体用餐',
    '단체 포장/예약 가능': '可团体打包/预约',
    '가성비 좋은': '性价比高',
    '주류도 판매하는': '提供酒类',
    '토요일 영업하는': '周六营业',
    '일요일 영업하는': '周日营业',
    '카공하기 좋은': '适合学习',
    '팀플하기 좋은': '适合团队项目',
    '단체 모임하기 좋은': '适合团体聚会',
    
    // 식당 이름
    '맛있는 한식당': '美味韩国餐厅',
    '카페 단맛': '甜味咖啡厅',
    '중화요리집': '中华料理店',
    '스시 명가': '寿司名家',
    '카페 공부': '学习咖啡厅'
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
        status: restaurant.status
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

// REST API를 이용한 주소 -> 좌표 변환
async function geocodeAddress(address) {
  try {
    const response = await fetch(`https://dapi.kakao.com/v2/local/search/address.json?query=${encodeURIComponent(address)}`, {
      headers: {
        'Authorization': `KakaoAK ${KAKAO_API_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.documents && data.documents.length > 0) {
      // 첫 번째 결과 사용
      const location = data.documents[0].address || data.documents[0].road_address;
      if (location) {
        return {
          x: location.x,  // 경도 (longitude)
          y: location.y   // 위도 (latitude)
        };
      }
    }
    
    return null;
  } catch (error) {
    console.error('좌표 변환 API 오류:', error);
    return null;
  }
}

// 로딩 애니메이션 표시
function showLoading() {
  // 이미 로딩 요소가 있는지 확인
  let loadingEl = document.getElementById('loading-animation');
  
  // 없으면 생성
  if (!loadingEl) {
    loadingEl = document.createElement('div');
    loadingEl.id = 'loading-animation';
    loadingEl.innerHTML = `
      <div class="loading-spinner"></div>
      <p>데이터를 불러오는 중...</p>
    `;
    loadingEl.style.position = 'fixed';
    loadingEl.style.top = '0';
    loadingEl.style.left = '0';
    loadingEl.style.width = '100%';
    loadingEl.style.height = '100%';
    loadingEl.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    loadingEl.style.display = 'flex';
    loadingEl.style.flexDirection = 'column';
    loadingEl.style.alignItems = 'center';
    loadingEl.style.justifyContent = 'center';
    loadingEl.style.zIndex = '9999';
    
    // 스피너 스타일
    const style = document.createElement('style');
    style.textContent = `
      .loading-spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #f3f3f3;
        border-top: 5px solid #ff8a65;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 15px;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(loadingEl);
  } else {
    loadingEl.style.display = 'flex';
  }
}

// 로딩 애니메이션 숨기기
function hideLoading() {
  const loadingEl = document.getElementById('loading-animation');
  if (loadingEl) {
    loadingEl.style.display = 'none';
  }
}

// 지도 초기화
function initMap() {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.321877, 127.126899), // 단국대 죽전캠퍼스
    level: 3
  };

  map = new kakao.maps.Map(container, options);

  // 단국대 주변 범위 제한
  const bounds = new kakao.maps.LatLngBounds(
    new kakao.maps.LatLng(37.318, 127.122), // 남서
    new kakao.maps.LatLng(37.325, 127.131)  // 북동
  );
  map.setBounds(bounds);
  
  // 초기에 모든 항목 표시 (필터링 없이)
  restaurantData.forEach(place => {
    addMarker(place);
  });
}

// 카테고리 메뉴 초기화
function initCategoryMenu() {
  // 초기 카테고리 설정 (기본값: 음식점)
  setActiveCategory('restaurant');
  
  // 메인 카테고리 버튼 이벤트
  const mainCategoryBtns = document.querySelectorAll('.main-category-btn');
  mainCategoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const category = this.dataset.category;
      setActiveCategory(category);
      
      // 해당 카테고리의 모든 항목 표시
      clearMarkers();
      
      // 선택된 카테고리에 해당하는 장소만 필터링
      const filteredPlaces = restaurantData.filter(place => place.category === category);
      
      console.log(`${category} 카테고리 필터링:`, filteredPlaces);
      
      // 필터링된 장소에 마커 표시
      filteredPlaces.forEach(place => {
        addMarker(place);
      });
      
      // 지도 범위 재설정
      if (filteredPlaces.length > 0) {
        const bounds = new kakao.maps.LatLngBounds();
        filteredPlaces.forEach(place => bounds.extend(place.position));
        map.setBounds(bounds);
      }
    });
  });
  
  // 모든 카테고리 그룹 표시
  document.querySelectorAll('.category-group').forEach(group => {
    group.classList.add('active');
  });
  
  // 모든 카테고리 메뉴 표시
  document.querySelectorAll('.category-children').forEach(menu => {
    menu.classList.add('active');
  });
  
  // 카테고리 토글 버튼 이벤트
  const categoryToggle = document.querySelector('.category-toggle');
  const sidebar = document.querySelector('.category-sidebar');
  
  categoryToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
    
    // 백드롭 생성 및 이벤트 추가 (모바일)
    let backdrop = document.querySelector('.sidebar-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'sidebar-backdrop';
      document.body.appendChild(backdrop);
      
      backdrop.addEventListener('click', function() {
        sidebar.classList.remove('active');
        backdrop.classList.remove('active');
      });
    }
    
    if (sidebar.classList.contains('active')) {
      backdrop.classList.add('active');
    } else {
      backdrop.classList.remove('active');
    }
  });
  
  // 부모 카테고리 토글
  const categoryParents = document.querySelectorAll('.category-parent');
  categoryParents.forEach(parent => {
    parent.addEventListener('click', function() {
      const childrenId = this.dataset.category + '-menu';
      const children = document.getElementById(childrenId);
      
      // 토글 상태 변경
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      // 토글 아이콘 방향 변경
      const toggleIcon = this.querySelector('.toggle-icon');
      if (toggleIcon) {
        toggleIcon.textContent = isExpanded ? '▸' : '▾';
      }
      
      // 자식 요소 토글
      children.classList.toggle('active');
    });
    
    // 기본적으로 펼쳐놓기
    parent.setAttribute('aria-expanded', 'true');
    const childrenId = parent.dataset.category + '-menu';
    document.getElementById(childrenId).classList.add('active');
    
    // 토글 아이콘 추가 (없는 경우)
    if (!parent.querySelector('.toggle-icon')) {
      const toggleIcon = document.createElement('span');
      toggleIcon.className = 'toggle-icon';
      toggleIcon.textContent = '▾'; // 기본적으로 펼쳐진 상태
      toggleIcon.style.marginLeft = '5px';
      parent.appendChild(toggleIcon);
    }
  });
  
  // 서브카테고리 토글
  const subcategoryParents = document.querySelectorAll('.subcategory-parent');
  subcategoryParents.forEach(parent => {
    parent.addEventListener('click', function() {
      const childrenId = this.dataset.subcategory + '-menu';
      const children = document.getElementById(childrenId);
      
      // 토글 상태 변경
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      
      // 토글 아이콘 방향 변경
      const toggleIcon = this.querySelector('.toggle-icon');
      if (toggleIcon) {
        toggleIcon.textContent = isExpanded ? '▸' : '▾';
      }
      
      // 자식 요소 토글
      children.classList.toggle('active');
    });
    
    // 기본적으로 펼쳐놓기
    parent.setAttribute('aria-expanded', 'true');
    const childrenId = parent.dataset.subcategory + '-menu';
    document.getElementById(childrenId).classList.add('active');
    
    // 토글 아이콘 추가 (없는 경우)
    if (!parent.querySelector('.toggle-icon')) {
      const toggleIcon = document.createElement('span');
      toggleIcon.className = 'toggle-icon';
      toggleIcon.textContent = '▾'; // 기본적으로 펼쳐진 상태
      toggleIcon.style.marginLeft = '5px';
      parent.appendChild(toggleIcon);
    }
  });
  
  // 체크박스 필터 이벤트
  const checkboxes = document.querySelectorAll('.filter-item input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const tag = this.dataset.tag;
      
      if (this.checked) {
        // 체크된 경우 태그 추가
        if (!selectedTags.includes(tag)) {
          selectedTags.push(tag);
          tagify.addTags([tag]); // tagify에도 추가
        }
      } else {
        // 체크 해제된 경우 태그 제거
        const index = selectedTags.indexOf(tag);
        if (index > -1) {
          selectedTags.splice(index, 1);
          
          // tagify에서도 제거
          const tagifyValues = tagify.value.filter(tagObj => tagObj.value !== tag);
          tagify.loadOriginalValues(tagifyValues.map(tagObj => tagObj.value));
        }
      }
      
      // 선택된 태그로 필터링 (체크박스 변경 시에는 태그로 필터링하지 않음)
      // filterRestaurants(selectedTags);
    });
  });
}

// 버튼 이벤트 초기화
function initButtonEvents() {
  // 랜덤 가게 추천 버튼
  const randomBtn = document.getElementById('random-place-btn');
  const modal = document.getElementById('random-modal');
  const closeBtn = document.querySelector('.close-btn');
  const tryAnotherBtn = document.getElementById('try-another-btn');
  
  // 랜덤 가게 추천 버튼 클릭
  randomBtn.addEventListener('click', function() {
    showRandomPlace();
    modal.classList.add('active');
  });
  
  // 모달 닫기 버튼
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });
  
  // 다른 가게 추천받기 버튼
  tryAnotherBtn.addEventListener('click', function() {
    showRandomPlace();
  });
  
  // 모달 바깥 클릭 시 닫기
  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.remove('active');
    }
  });
  
  // 모두 보기 버튼
  const showAllBtn = document.getElementById('show-all-btn');
  showAllBtn.addEventListener('click', function() {
    // 현재 선택된 카테고리의 모든 항목 표시
    clearMarkers();
    
    // 선택된 카테고리에 해당하는 장소만 필터링
    const filteredPlaces = restaurantData.filter(place => place.category === currentCategory);
    
    // 필터링된 장소에 마커 표시
    filteredPlaces.forEach(place => {
      addMarker(place);
    });
    
    // 지도 범위 재설정
    if (filteredPlaces.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      filteredPlaces.forEach(place => bounds.extend(place.position));
      map.setBounds(bounds);
    }
  });
}

// 활성 카테고리 설정
function setActiveCategory(category) {
  currentCategory = category;
  
  // 모든 메인 카테고리 버튼 비활성화
  document.querySelectorAll('.main-category-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // 선택된 메인 카테고리 버튼 활성화
  document.querySelector(`.main-category-btn[data-category="${category}"]`).classList.add('active');
  
  // 모든 카테고리 그룹 표시
  document.querySelectorAll('.category-group').forEach(group => {
    group.classList.add('active');
  });
}

// 카테고리별 필터링
function filterByCategory(category) {
  clearMarkers();
  
  // 전체 목록 표시
  restaurantData.forEach(place => {
    addMarker(place);
  });
  
  // 지도 범위 재설정
  const bounds = new kakao.maps.LatLngBounds();
  restaurantData.forEach(place => bounds.extend(place.position));
  map.setBounds(bounds);
}

// 랜덤 가게 추천 표시
function showRandomPlace() {
  // 현재 카테고리와 선택된 태그를 기반으로 필터링
  let filteredPlaces = restaurantData.filter(place => place.category === currentCategory);
  
  // 선택된 태그가 있으면 추가 필터링
  if (selectedTags.length > 0) {
    filteredPlaces = filteredPlaces.filter(place => {
      return place.tags.some(tag => selectedTags.includes(tag));
    });
  }
  
  // 필터링된 결과가 없으면 해당 카테고리의 모든 가게 중에서 선택
  if (filteredPlaces.length === 0) {
    filteredPlaces = restaurantData.filter(place => place.category === currentCategory);
  }
  
  // 필터링된 가게가 없으면 메시지 표시
  if (filteredPlaces.length === 0) {
    const randomPlaceInfo = document.getElementById('random-place-info');
    randomPlaceInfo.innerHTML = `
      <p style="text-align: center; color: #888;">해당 카테고리에 가게가 없습니다.</p>
    `;
    return;
  }
  
  // 랜덤으로 하나 선택
  const randomIndex = Math.floor(Math.random() * filteredPlaces.length);
  const randomPlace = filteredPlaces[randomIndex];
  
  // 랜덤 가게 정보 표시
  displayRandomPlace(randomPlace);
  
  // 지도에서 해당 가게 표시
  map.setCenter(randomPlace.position);
  map.setLevel(2);  // 확대 레벨 설정
  
  // 이전 마커 모두 제거
  clearMarkers();
  
  // 선택된 가게만 마커 표시
  addMarker(randomPlace);
  
  // 마커 클릭 효과 (인포윈도우 표시)
  const targetMarker = markers[0]; // 현재는 마커가 하나만 있으므로 첫 번째 마커
  if (targetMarker) {
    kakao.maps.event.trigger(targetMarker, 'click');
  }
}

// 랜덤 가게 정보 표시
function displayRandomPlace(place) {
  const randomPlaceInfo = document.getElementById('random-place-info');
  
  // 가게 정보 HTML 생성
  const translatedName = translate(place.name);
  const translatedTags = place.tags.map(tag => translate(tag));
  const categoryEmoji = 
    place.category === 'restaurant' ? '🍴' : 
    place.category === 'cafe' ? '☕' : '🍺';
  
  randomPlaceInfo.innerHTML = `
    <div style="text-align: center; margin-bottom: 15px;">
      <span style="font-size: 24px; margin-bottom: 10px; display: block;">${categoryEmoji}</span>
      <h3 style="font-size: 20px; color: var(--primary-color); margin-bottom: 10px;">${translatedName}</h3>
    </div>
    <div style="display: flex; flex-wrap: wrap; gap: 5px; justify-content: center;">
      ${translatedTags.map(tag => `<span style="background: var(--tag-bg); color: white; font-size: 12px; padding: 3px 8px; border-radius: 12px; display: inline-block;">${tag}</span>`).join('')}
    </div>
  `;
}

// Tagify 초기화
function initTagify() {
  const input = document.getElementById('tags-input');
  
  tagify = new Tagify(input, {
    whitelist: allTags.map(tag => tag.value),
    dropdown: {
      maxItems: 20,
      classname: "tags-dropdown",
      enabled: 0,
      closeOnSelect: false
    }
  });
  
  // 태그 선택 시 이벤트
  tagify.on('add', function(e) {
    const tag = e.detail.data.value;
    
    // 선택된 태그 배열에 추가
    if (!selectedTags.includes(tag)) {
      selectedTags.push(tag);
      
      // 체크박스도 체크
      const checkbox = document.querySelector(`.filter-item input[data-tag="${tag}"]`);
      if (checkbox) checkbox.checked = true;
    }
    
    // 태그 기반 필터링
    filterRestaurants(selectedTags);
  });
  
  // 태그 제거 시 이벤트
  tagify.on('remove', function(e) {
    const tag = e.detail.data.value;
    
    // 선택된 태그 배열에서 제거
    const index = selectedTags.indexOf(tag);
    if (index > -1) {
      selectedTags.splice(index, 1);
      
      // 체크박스도 체크 해제
      const checkbox = document.querySelector(`.filter-item input[data-tag="${tag}"]`);
      if (checkbox) checkbox.checked = false;
    }
    
    // 태그 기반 필터링
    filterRestaurants(selectedTags);
  });
}

// AutoComplete.js 초기화
function initAutoComplete() {
  autoCompleteJS = new autoComplete({
    selector: "#autoComplete",
    placeHolder: "식당이나 태그 검색...",
    data: {
      src: searchData,
      keys: ["value"],
      cache: true
    },
    resultsList: {
      element: (list, data) => {
        if (!data.results.length) {
          // 결과가 없을 때 메시지 추가
          const message = document.createElement("div");
          message.setAttribute("class", "no_result");
          message.innerHTML = `<span>${translate("검색 결과가 없습니다")}: "${data.query}"</span>`;
          list.prepend(message);
        }
      },
      noResults: true,
      maxResults: 15,
      tabSelect: true
    },
    resultItem: {
      highlight: true
    },
    events: {
      input: {
        selection: (event) => {
          const selection = event.detail.selection.value;
          autoCompleteJS.input.value = selection.value;
          
          // 선택한 항목이 태그인 경우
          if (selection.type === 'tag') {
            // 태그 필터링 적용
            if (!selectedTags.includes(selection.value)) {
              selectedTags.push(selection.value);
              
              // 체크박스도 체크
              const checkbox = document.querySelector(`.filter-item input[data-tag="${selection.value}"]`);
              if (checkbox) checkbox.checked = true;
              
              // tagify에 태그 추가
              tagify.addTags([selection.value]);
            }
            
            filterRestaurants(selectedTags);
          } 
          // 선택한 항목이 식당인 경우
          else if (selection.type === 'restaurant') {
            // 해당 식당으로 지도 이동 및 인포윈도우 표시
            const restaurant = restaurantData.find(place => place.id === selection.id);
            if (restaurant) {
              // 지도 이동
              map.setCenter(restaurant.position);
              map.setLevel(2);  // 확대 레벨 설정
              
              // 마커 클릭 효과 (해당 식당 마커 찾기)
              clearMarkers();
              addMarker(restaurant);
              
              // 마커 클릭 이벤트 트리거 (첫 번째 마커)
              if (markers.length > 0) {
                kakao.maps.event.trigger(markers[0], 'click');
              }
            }
          }
        }
      }
    }
  });
}

// 언어 선택기 초기화
function initLanguageSelector() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (lang !== currentLang) {
        // 현재 활성화된 버튼 비활성화
        document.querySelector('.lang-btn.active').classList.remove('active');
        // 선택한 버튼 활성화
        btn.classList.add('active');
        // 언어 변경 적용
        changeLanguage(lang);
      }
    });
  });
}

// 언어 변경 함수
function changeLanguage(lang) {
  currentLang = lang;
  
  // 페이지 요소 번역
  translatePageElements();
  
  // 태그 입력 필드의 placeholder 변경
  document.getElementById('tags-input').placeholder = translate('태그 선택');
  
  // 검색 입력 필드의 placeholder 변경
  document.getElementById('autoComplete').placeholder = translate('식당이나 태그 검색...');
  
  // Tagify 태그 업데이트
  updateTagifyTags();
  
  // 마커와 인포윈도우 업데이트
  updateMarkersAndInfoWindows();
  
  // 검색 데이터 업데이트
  updateSearchData();
}

// 페이지 요소 번역
function translatePageElements() {
  // 제목 번역
  document.querySelector('.title').textContent = translate('단맛지도');
  
  // 필터 타이틀 번역
  document.querySelector('.filter-title').textContent = translate('카테고리 필터:');
}

// 번역 함수
function translate(text) {
  // 한국어인 경우 그대로 반환
  if (currentLang === 'ko') {
    return text;
  }
  
  // 번역 데이터에서 해당 언어의 번역 찾기
  const translatedText = translations[currentLang][text];
  
  // 번역이 있으면 번역된 텍스트 반환, 없으면 원본 텍스트 반환
  return translatedText !== undefined ? translatedText : text;
}

// Tagify 태그 업데이트
function updateTagifyTags() {
  if (tagify && tagify.value && tagify.value.length > 0) {
    // 현재 선택된 태그들 가져오기
    const currentTags = tagify.value.map(tag => tag.value);
    
    // 태그 제거
    tagify.removeAllTags();
    
    // 번역된 태그 추가
    if (currentLang === 'ko') {
      // 한국어인 경우 원래 태그 다시 추가
      tagify.addTags(currentTags);
    } else {
      // 다른 언어인 경우 번역된 태그 추가
      const translatedTags = currentTags.map(tag => translate(tag));
      tagify.addTags(translatedTags);
    }
  }
}

// 마커와 인포윈도우 업데이트
function updateMarkersAndInfoWindows() {
  // 모든 마커 삭제 후 다시 표시
  clearMarkers();
  
  // 현재 카테고리에 맞는 마커만 표시
  if (currentCategory === 'all') {
    displayAllMarkers();
  } else {
    const filteredPlaces = restaurantData.filter(place => place.category === currentCategory);
    filteredPlaces.forEach(place => {
      addMarker(place);
    });
  }
}

// 검색 데이터 업데이트
function updateSearchData() {
  // 최신 restaurantData로 검색 데이터 재생성
  const restaurantSearchData = restaurantData.map(place => ({
    value: place.name,
    type: 'restaurant',
    id: place.id
  }));
  
  // 현재 언어에 맞게 검색 데이터 업데이트
  if (currentLang === 'ko') {
    // 한국어인 경우 원래 데이터 사용
    autoCompleteJS.data = {
      src: [...restaurantSearchData, ...allTags.map(tag => ({
        value: tag.value,
        type: 'tag',
        tagType: tag.type
      }))],
      keys: ["value"],
      cache: true
    };
  } else {
    // 다른 언어인 경우 번역된 데이터 사용
    const translatedSearchData = [
      // 식당 이름 번역
      ...restaurantData.map(place => ({
        value: translate(place.name),
        type: 'restaurant',
        id: place.id,
        originalValue: place.name
      })),
      
      // 태그 번역
      ...allTags.map(tag => ({
        value: translate(tag.value),
        type: 'tag',
        tagType: tag.type,
        originalValue: tag.value
      }))
    ];
    
    autoCompleteJS.data = {
      src: translatedSearchData,
      keys: ["value"],
      cache: true
    };
  }
}

// 모든 마커 삭제
function clearMarkers() {
  markers.forEach(marker => marker.setMap(null));
  markers = [];
}

// 모든 식당 마커 표시
function displayAllMarkers() {
  clearMarkers();
  restaurantData.forEach(place => {
    addMarker(place);
  });
}

// 선택된 태그에 맞는 식당 필터링 및 마커 표시
async function filterRestaurants(selectedTags) {
  clearMarkers();
  
  // 선택된 태그가 없으면
  if (selectedTags.length === 0) {
    // 현재 선택된 카테고리의 모든 가게 표시
    const filteredPlaces = restaurantData.filter(place => place.category === currentCategory);
    filteredPlaces.forEach(place => {
      addMarker(place);
    });
    
    // 지도 범위 재설정
    if (filteredPlaces.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      filteredPlaces.forEach(place => bounds.extend(place.position));
      map.setBounds(bounds);
    }
    return;
  }
  
  try {
    // 로딩 애니메이션 표시
    showLoading();
    
    // 각 태그에 대해 API 호출하여 결과 병합
    let allResults = [];
    
    for (const tag of selectedTags) {
      const results = await getRestaurantsByTag(tag);
      
      // 중복 제거하며 결과 병합
      results.forEach(restaurant => {
        if (!allResults.some(r => r.id === restaurant.id)) {
          allResults.push(restaurant);
        }
      });
    }
    
    console.log('태그 검색 결과:', allResults);
    
    // 결과가 없는 경우
    if (allResults.length === 0) {
      // 결과가 없는 경우 alert로 알림
      alert('선택한 태그에 해당하는 식당이 없습니다.');
      hideLoading();
      return;
    }
    
    // 좌표 변환 및 마커 표시
    const geocodePromises = allResults.map((restaurant) => {
      return new Promise((resolve) => {
        if (!restaurant.latitude || !restaurant.longitude) {
          // 좌표가 없는 경우 주소로 변환
          if (restaurant.address && restaurant.address.trim() !== '') {
            geocodeAddress(restaurant.address)
              .then(result => {
                if (result) {
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
                  
                  const place = {
                    id: restaurant.id,
                    name: restaurant.title,
                    position: new kakao.maps.LatLng(parseFloat(result.y), parseFloat(result.x)),
                    tags: restaurant.tags,
                    category: category,
                    menu: restaurant.menu,
                    address: restaurant.address,
                    imageUrl: restaurant.imageUrl,
                    status: restaurant.status
                  };
                  
                  addMarker(place);
                  resolve(place);
                } else {
                  console.warn(`주소 변환 실패: ${restaurant.address}`);
                  resolve(null);
                }
              })
              .catch(error => {
                console.error('좌표 변환 중 오류:', error);
                resolve(null);
              });
          } else {
            console.warn('주소 정보 없음:', restaurant.title);
            resolve(null);
          }
        } else {
          // 이미 좌표가 있는 경우
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
          
          const place = {
            id: restaurant.id,
            name: restaurant.title,
            position: new kakao.maps.LatLng(parseFloat(restaurant.latitude), parseFloat(restaurant.longitude)),
            tags: restaurant.tags,
            category: category,
            menu: restaurant.menu,
            address: restaurant.address,
            imageUrl: restaurant.imageUrl,
            status: restaurant.status
          };
          
          addMarker(place);
          resolve(place);
        }
      });
    });
    
    // 모든 좌표 변환 완료 기다림
    const places = await Promise.all(geocodePromises);
    const validPlaces = places.filter(place => place !== null);
    
    // 지도 범위 재설정
    if (validPlaces.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      validPlaces.forEach(place => bounds.extend(place.position));
      map.setBounds(bounds);
    } else {
      // 변환된 유효한 좌표가 없는 경우에도 alert 사용
      alert('좌표 변환에 실패했습니다. 식당 위치를 표시할 수 없습니다.');
    }
    
    hideLoading();
  } catch (error) {
    console.error('태그 필터링 중 오류 발생:', error);
    alert('태그로 검색 중 오류가 발생했습니다.');
    hideLoading();
  }
}

// 마커 추가 함수
function addMarker(place) {
  // 마커 이미지 설정 (카테고리에 따라 다른 이미지 사용)
  let markerImageSrc;
  
  switch(place.category) {
    case 'cafe':
      markerImageSrc = 'image/cafe.png';
      break;
    case 'bar':
      markerImageSrc = 'image/cafe.png';
      break;
    case 'other':
      markerImageSrc = 'image/cafe.png';
      break;
    case 'restaurant':
    default:
      markerImageSrc = 'image/restaurant.png';
      break;
  }
  
  const markerImage = new kakao.maps.MarkerImage(
    markerImageSrc,
    new kakao.maps.Size(30, 30)
  );
  
  // 마커 생성
  const marker = new kakao.maps.Marker({
    position: place.position,
    map: map,
    title: place.name,
    image: markerImage
  });
  
  // 인포윈도우 내용
  const translatedName = translate(place.name);
  const translatedTags = place.tags.map(tag => translate(tag));
  
  // 이미지 URL 설정 (기본 이미지 또는 제공된 이미지)
  const imageUrl = place.imageUrl && place.imageUrl.trim() !== '' ? 
    place.imageUrl : 'image/default-restaurant.jpg';
  
  const content = `
    <div class="info-window" style="padding: 12px; width: 220px; font-family: 'Orbit', sans-serif; border-radius: 10px; background-color: white; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
      <div style="text-align: center; margin-bottom: 10px;">
        <img src="${imageUrl}" alt="${translatedName}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px; margin-bottom: 8px;">
        <h3 style="margin: 0; font-size: 16px; color: #ff8a65; font-weight: 700;">${translatedName}</h3>
      </div>
      <p style="margin-bottom: 8px; font-size: 14px;">🍽️ ${place.menu}</p>
      <p style="margin-bottom: 8px; font-size: 14px;">📍 ${place.address}</p>
      <div style="display: flex; flex-wrap: wrap; gap: 5px;">
        ${translatedTags.map(tag => `<span style="background: #ff8a65; color: white; font-size: 12px; padding: 3px 8px; border-radius: 12px; display: inline-block;">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // 인포윈도우 생성
  const infoWindow = new kakao.maps.InfoWindow({
    content: content,
    removable: true
  });
  
  // 현재 열려있는 인포윈도우 추적을 위한 변수
  marker.infoWindow = infoWindow;
  marker.isInfoWindowOpen = false;
  
  // 마커 클릭 시 인포윈도우 토글 (열기/닫기)
  kakao.maps.event.addListener(marker, 'click', function() {
    if (marker.isInfoWindowOpen) {
      // 이미 열려있으면 닫기
      infoWindow.close();
      marker.isInfoWindowOpen = false;
    } else {
      // 닫혀있으면 열기
      infoWindow.open(map, marker);
      marker.isInfoWindowOpen = true;
      
      // 다른 마커의 인포윈도우 닫기
      markers.forEach(m => {
        if (m !== marker && m.isInfoWindowOpen) {
          m.infoWindow.close();
          m.isInfoWindowOpen = false;
        }
      });
    }
  });
  
  markers.push(marker);
}

// 창 크기 변경 시 지도 크기 조정
window.addEventListener('resize', function() {
  // 지도 영역 크기가 변경되면 지도 다시 렌더링
  if (map) {
    setTimeout(function() {
      map.relayout();
    }, 100);
  }
});

// 페이지 로드 완료 후 처리
window.addEventListener('load', function() {
  // 지도 다시 렌더링
  if (map) {
    setTimeout(function() {
      map.relayout();
    }, 100);
  }
});

// 식당 상세 정보 가져오기
async function getRestaurantDetails(restaurantId) {
  try {
    const response = await fetch(`http://localhost:8080/restaurants/${restaurantId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('식당 상세 정보를 가져오는 중 오류 발생:', error);
    return null;
  }
}

// 태그로 식당 검색하기
async function getRestaurantsByTag(tagName) {
  try {
    const response = await fetch(`http://localhost:8080/restaurants/by-tag?tagName=${encodeURIComponent(tagName)}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('태그로 식당을 검색하는 중 오류 발생:', error);
    return [];
  }
}

// 식당에 태그 추가하기
async function addTagToRestaurant(restaurantId, tagName) {
  try {
    const response = await fetch(`http://localhost:8080/restaurants/${restaurantId}/tags`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagName })
    });
    
    if (response.ok) {
      // 태그 추가 성공 시 식당 데이터 다시 가져오기
      await fetchRestaurantData();
      return true;
    } else {
      console.error('태그 추가 실패:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('태그 추가 중 오류 발생:', error);
    return false;
  }
}

// 알림 표시 함수 (alert 대신 사용)
function showNotification(message) {
  console.log('알림 표시:', message);
  
  // 이미 있는 알림이 있다면 제거
  const existingNotification = document.getElementById('notification');
  if (existingNotification) {
    document.body.removeChild(existingNotification);
  }
  
  // 알림 요소 생성
  const notification = document.createElement('div');
  notification.id = 'notification';
  notification.textContent = message;
  
  // 스타일 설정
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = '#ff8a65';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  notification.style.zIndex = '10000';
  notification.style.fontFamily = "'Orbit', sans-serif";
  
  // 문서에 추가
  document.body.appendChild(notification);
  console.log('알림 요소 추가됨');
  
  // 3초 후 자동으로 사라지게 함
  setTimeout(() => {
    if (notification.parentNode) {
      document.body.removeChild(notification);
      console.log('알림 요소 제거됨');
    }
  }, 3000);
}
