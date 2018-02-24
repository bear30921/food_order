var map;

// data 已經在main.js宣告過了
data = data.result.results;

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
	for (var i = 0; i < data.length; i++) {
		var box = {};
		var place = {};
		place.lat = Number(data[i].latitude);
		place.lng = Number(data[i].longitude);
		box.map = map;
		box.title = data[i].stitle;
		box.position = place;
		// console.log(box);
		new google.maps.Marker(box);
	}

}

console.log(data[0].file);

var area = document.querySelector('.area');
var placesList = document.querySelector('.places-list');

var str = '';
for (var i = 0; i < data.length; i++) {
	var place = '<div class="place"><div class="caption"><img src="'+  +'" alt=""><h3>標題</h3></div><div class="info"><p>地址</p><p>電話</p><p>時間</p><a href="javascript:;" class="btn">景點介紹</a></div></div>';
	str += place;

	// var s = '012345';
	// a = data[i].substring(0, data.indexOf('jpg'));
	
}
placesList.innerHTML = str;


