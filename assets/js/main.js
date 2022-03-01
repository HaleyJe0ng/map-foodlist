"use strict";

const mapContainer = document.getElementById("map");
const options = {
  center: new kakao.maps.LatLng(33.450701, 126.570667),
  level: 3,
};
const map = new kakao.maps.Map(mapContainer, options);
