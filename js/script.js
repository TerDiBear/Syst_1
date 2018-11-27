$(document).ready(function(){
  $(".slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    center: true,
  });

  $(".btn-nav").on("click",function() {
    var target = $(this).data("target");
    $(target).toggleClass("nav__list--open");
  })

});
function initMap() {
	// Координаты центра на карте. Широта: 56.2928515, Долгота: 43.7866641
	var centerLatLng = new google.maps.LatLng(50.078854, 14.442171);
	// Обязательные опции с которыми будет проинициализированна карта
	var mapOptions = {
		center: centerLatLng, // Координаты центра мы берем из переменной centerLatLng
		zoom: 16               // Зум по умолчанию. Возможные значения от 0 до 21
	};
	// Создаем карту внутри элемента #map
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var marker = new google.maps.Marker({
		position: centerLatLng,               // Координаты расположения маркера. В данном случае координаты нашего маркера совпадают с центром карты, но разумеется нам никто не мешает создать отдельную переменную и туда поместить другие координаты.
		map: map,                             // Карта на которую нужно добавить маркер
		title: "Systema Prague RMA", // (Необязательно) Текст выводимый в момент наведения на маркер,
		icon: "images/marker.png"             // (Необязательно) Путь до изображения, которое будет выводится на карте вместо стандартного маркера
	});
}
// Ждем полной загрузки страницы, после этого запускаем initMap()
google.maps.event.addDomListener(window, "load", initMap);
