// 식당 데이터 (예시)
const restaurantData = [
  {
    id: 1,
    name: '맛있는 한식당',
    position: new kakao.maps.LatLng(37.322877, 127.126899),
    tags: ['한식', '혼밥하기 좋은', '가성비 좋은'],
    type: 'restaurant',
  },
  {
    id: 2,
    name: '카페 단맛',
    position: new kakao.maps.LatLng(37.321877, 127.127899),
    tags: ['카페', '카공하기 좋은', '팀플하기 좋은'],
    type: 'cafe',
  },
  {
    id: 3,
    name: '중화요리집',
    position: new kakao.maps.LatLng(37.323877, 127.125899),
    tags: ['중식', '단체 식사 가능', '토요일 영업하는', '주류도 판매하는'],
    type: 'restaurant',
  },
  {
    id: 4,
    name: '스시 명가',
    position: new kakao.maps.LatLng(37.320877, 127.124899),
    tags: ['일식', '가성비 좋은', '늦은 저녁 식사 가능'],
    type: 'restaurant',
  },
  {
    id: 5,
    name: '카페 공부',
    position: new kakao.maps.LatLng(37.319877, 127.128899),
    tags: ['카페', '카공하기 좋은', '일요일 영업하는'],
    type: 'cafe',
  }
];

// 사용 가능한 모든 태그 (카테고리)
const allTags = [
  // 음식 종류
  { value: '한식', type: 'foodtype' },
  { value: '중식', type: 'foodtype' },
  { value: '일식', type: 'foodtype' },
  { value: '양식', type: 'foodtype' },
  { value: '아시안', type: 'foodtype' },
  { value: '기타', type: 'foodtype' },
  
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
  { value: '단체 모임하기 좋은', type: 'cafe' }
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

window.onload = function () {
  initMap();
  initTagify();
  initAutoComplete();
  initLanguageSelector();
};

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
  
  // 처음에 모든 식당 마커 표시
  displayAllMarkers();
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
  tagify.on('add', onTagChange);
  tagify.on('remove', onTagChange);
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
            const selectedTags = [selection.value];
            filterRestaurants(selectedTags);
            
            // tagify에 태그 추가
            tagify.addTags([selection.value]);
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
              const targetMarker = markers.find(marker => marker.getTitle() === restaurant.name);
              if (targetMarker) {
                // 마커 클릭 이벤트 트리거
                kakao.maps.event.trigger(targetMarker, 'click');
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
  displayAllMarkers();
}

// 검색 데이터 업데이트
function updateSearchData() {
  // 현재 언어에 맞게 검색 데이터 업데이트
  if (currentLang === 'ko') {
    // 한국어인 경우 원래 데이터 사용
    autoCompleteJS.data = {
      src: searchData,
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

// 태그 변경 시 식당 필터링
function onTagChange() {
  const selectedTags = tagify.value.map(tag => {
    // 현재 언어가 한국어가 아닌 경우, 원래 한국어 태그로 변환해서 필터링
    if (currentLang !== 'ko') {
      // 번역된 태그 값을 원래 한국어 태그로 찾기
      for (const [koTag, translatedTag] of Object.entries(translations[currentLang])) {
        if (translatedTag === tag.value) {
          return koTag;
        }
      }
    }
    return tag.value;
  });
  
  filterRestaurants(selectedTags);
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
function filterRestaurants(selectedTags) {
  clearMarkers();
  
  if (selectedTags.length === 0) {
    // 선택된 태그가 없으면 모든 식당 표시
    displayAllMarkers();
    return;
  }
  
  // 태그가 하나라도 일치하는 식당 필터링 (OR 조건)
  const filteredPlaces = restaurantData.filter(place => {
    return place.tags.some(tag => selectedTags.includes(tag));
  });
  
  // 필터링된 식당에 마커 표시
  filteredPlaces.forEach(place => {
    addMarker(place);
  });
  
  // 필터링된 결과가 있으면 지도 범위 재설정
  if (filteredPlaces.length > 0) {
    const bounds = new kakao.maps.LatLngBounds();
    filteredPlaces.forEach(place => bounds.extend(place.position));
    map.setBounds(bounds);
  }
}

// 마커 추가 함수
function addMarker(place) {
  // 마커 이미지 설정
  const markerImageSrc = place.type === 'restaurant' ? 'image/restaurant.png' : 'image/cafe.png';
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
  
  const content = `
    <div class="info-window">
      <h3>${translatedName}</h3>
      <div class="tags">
        ${translatedTags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </div>
  `;
  
  // 인포윈도우 생성
  const infoWindow = new kakao.maps.InfoWindow({
    content: content,
    removable: true
  });
  
  // 마커 클릭 시 인포윈도우 표시
  kakao.maps.event.addListener(marker, 'click', function() {
    infoWindow.open(map, marker);
  });
  
  markers.push(marker);
}
