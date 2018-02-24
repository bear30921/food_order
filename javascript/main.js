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


var areaList = document.querySelector('.area-list');
var placesList = document.querySelector('.places-list');
var str = '';

for (var i = 0; i < 10; i++) {
	// 景點名稱
	var notAvailable = '尚未提供';
	var placeImg;
	var placeTitle = data[i].stitle || notAvailable;
	var placeArea = data[i].address.substr(5, 3) || notAvailable;
	var placeType = data[i].CAT2 || notAvailable;
	var placeAddress = data[i].address || notAvailable;
	var placeTel = data[i].MEMO_TEL || notAvailable;

	if (data[i].file.img.length === undefined) {
		placeImg = data[i].file.img['#text'] || '';
	} else {
		placeImg = data[i].file.img[0]['#text'] || '';
	}
	var place = '<li class="place" data-index="' + [i] + '"><div class="caption"><img src="' + placeImg + '" alt=""><h3 class="title">' + placeTitle + '</h3><div class="area">' + placeArea + '</div></div><div class="info"><p class="type">類型：' + placeType + '</p><p>地址：' + placeAddress + '</p><p>電話：' + placeTel + '</p><a href="javascript:;" class="btn">景點介紹</a></div></li>';
	str += place;

	// var s = '012345';
	// a = data[i].substring(0, data.indexOf('jpg'));

}
placesList.innerHTML = str;