$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass:true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
	});

	function initializeGoogleMaps() {
		var myLatlng = new google.maps.LatLng(48.6369607,22.2907366);
	  var mapProp = {
	    center: myLatlng,
	    zoom: 16,
	    panControl: false,
		  zoomControl: false,
		  mapTypeControl: false,
		  scaleControl: false,
		  scrollwheel: false,
		  streetViewControl: false,
		  overviewMapControl: false,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	  };

	  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Стоматологічна клініка'
		});
	};

	google.maps.event.addDomListener(window, 'load', initializeGoogleMaps);
});


var app = angular.module("app", []);