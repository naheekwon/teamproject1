window.onload = function () {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(37.321877, 127.126899), // 단국대 죽전캠퍼스
    level: 3
  };

  const map = new kakao.maps.Map(container, options);

  // 단국대 주변 범위 제한 (선택)
  const bounds = new kakao.maps.LatLngBounds(
    new kakao.maps.LatLng(37.318, 127.122), // 남서
    new kakao.maps.LatLng(37.325, 127.131)  // 북동
  );
  map.setBounds(bounds);
};
