var map;

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 25.0369639,
			lng: 121.5361861
		},
		zoom: 14
	});

	getData();
}


function getData() {
	for (var i = 0; i < data.result.results.length; i++) {
		var box = {};
		var place = {};
		place.lat = Number(data.result.results[i].latitude);
		place.lng = Number(data.result.results[i].longitude);
		box.map = map;
		box.title = data.result.results[i].stitle;
		box.position = place;
		// console.log(box);
		new google.maps.Marker(box);
	}

}


var area = document.querySelector('.area');

