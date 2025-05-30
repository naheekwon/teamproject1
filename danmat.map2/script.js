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

// 전역 변수
let map;
let markers = [];
let tagify;

window.onload = function () {
  initMap();
  initTagify();
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

// 태그 변경 시 식당 필터링
function onTagChange() {
  const selectedTags = tagify.value.map(tag => tag.value);
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
  const content = `
    <div class="info-window">
      <h3>${place.name}</h3>
      <div class="tags">
        ${place.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
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
