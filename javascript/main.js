var map;
// 地區座標位置
var areaLocation = [{
		area: "台北市",
		location: {      
			lat: 25.0369639,
			lng: 121.5361861
		}
	},
	{
		area: "中正區",
		location: {      
			lat: 25.0292998,
			lng: 121.5030736
		}
	},
	{
		area: "大同區",
		location: {      
			lat: 25.0645017,
			lng: 121.4958052
		}
	},
	{
		area: "中山區",
		location: {      
			lat: 25.0685018,
			lng: 121.5280918
		}
	},
	{
		area: "松山區",
		location: {      
			lat: 25.0601717,
			lng: 121.5417977
		}
	},
	{
		area: "大安區",
		location: {      
			lat: 25.0263064,
			lng: 121.5263363
		}
	},
	{
		area: "萬華區",
		location: {      
			lat: 25.0294925,
			lng: 121.4803742
		}
	},
	{
		area: "信義區",
		location: {      
			lat: 25.0287132,
			lng: 121.5548065
		}
	},
	{
		area: "士林區",
		location: {      
			lat: 25.1347637,
			lng: 121.462405
		}
	},
	{
		area: "北投區",
		location: {      
			lat: 25.1531443,
			lng: 121.4824091
		}
	},
	{
		area: "內湖區",
		location: {      
			lat: 25.0834976,
			lng: 121.5553559
		}
	},
	{
		area: "南港區",
		location: {      
			lat: 25.0383878,
			lng: 121.5869684
		}
	},
	{
		area: "文山區",
		location: {      
			lat: 24.9880031,
			lng: 121.540252
		}
	}
];
// 儲存地區區域經緯度位置
var areaLat;
var areaLng;

// 初始化google地圖
function initMap() {  
	map = new google.maps.Map(document.getElementById('map'), {    
		center: {      
			lat: areaLat || 25.0369639,
			lng: areaLng ||  121.5361861   
		},
		zoom: 14,
		styles: [{
				"featureType": "landscape",
				"stylers": [{
						"hue": "#FFBB00"
					},
					{
						"saturation": 43.400000000000006
					},
					{
						"lightness": 37.599999999999994
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "road.highway",
				"stylers": [{
						"hue": "#FFC200"
					},
					{
						"saturation": -61.8
					},
					{
						"lightness": 45.599999999999994
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "road.arterial",
				"stylers": [{
						"hue": "#FF0300"
					},
					{
						"saturation": -100
					},
					{
						"lightness": 51.19999999999999
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "road.local",
				"stylers": [{
						"hue": "#FF0300"
					},
					{
						"saturation": -100
					},
					{
						"lightness": 52
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "water",
				"stylers": [{
						"hue": "#0078FF"
					},
					{
						"saturation": -13.200000000000003
					},
					{
						"lightness": 2.4000000000000057
					},
					{
						"gamma": 1
					}
				]
			},
			{
				"featureType": "poi",
				"stylers": [{
						"hue": "#00FF6A"
					},
					{
						"saturation": -1.0989010989011234
					},
					{
						"lightness": 11.200000000000017
					},
					{
						"gamma": 1
					}
				]
			}
		]
	});
	getData();
}

// 初始化地圖標記
function getData() {  
	for (var i = 0; i < data.length; i++) {    
		var box = {};    
		var place = {};    
		place.lat = Number(data[i].latitude);    
		place.lng = Number(data[i].longitude);    
		box.map = map;    
		box.title = data[i].stitle;    
		box.position = place;        
		new google.maps.Marker(box);  
	}
}
// 一開始進入瀏覽器宣染資料
function renderData() {
	var str = ''; 
	var placesList = document.querySelector('.places-list');  
	placesList.innerHTML = '';
	for (var i = 0; i < data.length; i++) {

		var notAvailable = '尚未提供';      
		var placeImg;      
		var placeTitle = data[i].stitle || notAvailable;      
		var placeArea = data[i].address.substr(5, 3) || notAvailable;      
		var placeType = data[i].CAT2 || notAvailable;      
		var placeAddress = data[i].address || notAvailable;      
		var placeTel = data[i].MEMO_TEL || notAvailable;       // 防止有些圖片不是以陣列排序
		      
		if (data[i].file.img.length === undefined) {        
			placeImg = data[i].file.img['#text'] || '';      
		} else {        
			placeImg = data[i].file.img[0]['#text'] || '';      
		}

		var place = '<li class="place" data-index="' + (i + 1) + '"><div class="caption"><img src="' + placeImg + '" alt=""><h3 class="title">' + placeTitle + '</h3><div class="area">' + placeArea + '</div></div><div class="info"><p class="type">類型：' + placeType + '</p><p>電話：' + placeTel + '</p><p>地址：' + placeAddress + '</p><a href="javascript:;" class="detail">景點介紹</a></div></li>';      
		str += place;  
	}  
	placesList.innerHTML = str;
}

// 篩選資料
function filterData(area) {  
	var str = ''; 
	var placesList = document.querySelector('.places-list');  
	placesList.innerHTML = '';
	for (var i = 0; i < data.length; i++) {
		if (area === data[i].address.substr(5, 3)) {

			var notAvailable = '尚未提供';      
			var placeImg;      
			var placeTitle = data[i].stitle || notAvailable;      
			var placeArea = data[i].address.substr(5, 3) || notAvailable;      
			var placeType = data[i].CAT2 || notAvailable;      
			var placeAddress = data[i].address || notAvailable;      
			var placeTel = data[i].MEMO_TEL || notAvailable;
			// 防止有些圖片不是以陣列排序
			if (data[i].file.img.length === undefined) {        
				placeImg = data[i].file.img['#text'] || '';      
			} else {        
				placeImg = data[i].file.img[0]['#text'] || '';      
			}

			var place = '<li class="place" data-index="' + (i + 1) + '"><div class="caption"><img src="' + placeImg + '" alt=""><h3 class="title">' + placeTitle + '</h3><div class="area">' + placeArea + '</div></div><div class="info"><p class="type">類型：' + placeType + '</p><p>地址：' + placeAddress + '</p><p>電話：' + placeTel + '</p><a href="javascript:;" class="detail">景點介紹</a></div></li>';

			str += place;  
		}

	}  
	placesList.innerHTML = str;
}


// 下拉選單地區切換
var areaList = document.querySelector('.area-list');
areaList.addEventListener('change', function (e) { 
	var currentValue = e.target.value;

	for (var i in areaLocation) {
		if (currentValue === "台北市") {
			// 更新地圖位置
			areaLat = 25.0369639;
			areaLng = 121.5361861;
			renderData();
			initMap();
		} else if (currentValue === areaLocation[i].area) {
			// 更新地圖位置
			areaLat = areaLocation[i].location.lat;
			areaLng = areaLocation[i].location.lng;
			filterData(currentValue);
			initMap();
		}
	}

});

// 打開景點介紹
var viewDetail = document.querySelector('.places-list');
viewDetail.addEventListener('click', function (e) {
	var currentView = e.target;
	var currentHTML = document.querySelector("html");
	currentHTML.classList.add("stop-scrolling");
	if (currentView.getAttribute('class') === 'detail') {
		document.querySelector('.screen').style.display = 'block';
		var currentDom = currentView.parentElement.parentElement;
		for (var i in data) {
			if (currentDom.dataset.index === data[i].RowNumber) {
				var notAvailable = '尚未提供'; 
				var placeImg;      
				var placeTitle = data[i].stitle || notAvailable; 
				var placeArea = data[i].address.substr(5, 3) || notAvailable;      
				var placeType = data[i].CAT2 || notAvailable;   
				var placeTel = data[i].MEMO_TEL || notAvailable;    
				var placeAddress = data[i].address || notAvailable;   
				var placeMrt = data[i].MRT || notAvailable;   
				var placeTime = data[i].MEMO_TIME || notAvailable; 
				var placeDetail = data[i].xbody || notAvailable; 
				if (data[i].file.img.length === undefined) {        
					placeImg = data[i].file.img['#text'] || '';      
				} else {        
					placeImg = data[i].file.img[0]['#text'] || '';      
				} 
				document.querySelector('.view-picture').setAttribute("src", placeImg);
				document.querySelector('.view-title').textContent = placeTitle;
				document.querySelector('.view-area').textContent = placeArea;
				document.querySelector('.view-type').textContent = placeType;
				document.querySelector('.view-tel').textContent = placeTel;
				document.querySelector('.view-address').textContent = placeAddress;
				document.querySelector('.view-mrt').textContent = placeMrt;
				document.querySelector('.view-time').textContent = placeTime;
				document.querySelector('.view-detail').textContent = placeDetail;
			}
		}
	}
}, false);


// 關閉景點介紹
var screen = document.querySelector('.screen');
screen.addEventListener('click', function (e) {
	var cancelBtn = e.target;
	var currentHTML = document.querySelector("html");
	currentHTML.classList.remove("stop-scrolling");
	if (cancelBtn.getAttribute('class') === 'screen' || cancelBtn.getAttribute('class') === 'cancel') {
		document.querySelector('.screen').style.display = 'none';
	}
}, false);

//  回到最頂層
$('#top').on('click', function (e) {
	e.preventDefault();
	$('html, body').stop().animate({
		scrollTop: 0
	}, 1000);
});

// goTop 動畫樣式
$(window).on('scroll', function () {
	var $scroll = $(window).scrollTop();
	if ($scroll >= 600) {
		$('#top').addClass('active');
	} else {
		$('#top').removeClass('active');
	}
});

// 載入資料
window.onload = renderData();









// 尚未完成頁碼
// var number = 10;
// var total = data.length + 1;
// var totalPage = Math.ceil(total / number);
// console.log(totalPage);
// var ul_list = document.createElement('ul');
// ul_list.setAttribute('class', 'pages');
//
// var str = '';
// for (var i = 0; i < totalPage; i++){
// 	var pageNo = '<li><a href="javascript:;" class="pageNo" data-page="' + (i+1) + '">'+ (i+1) +'</a></li>';
// 	str += pageNo;
// }
// ul_list.innerHTML = str;
//
// document.querySelector('.views .container').appendChild(ul_list);


// $('#pagination-demo').twbsPagination({
// 	totalPages: 32,
// 	visiblePages: 5,
// 	onPageClick: function (event, page) {
// 			$('#page-content').text('Page ' + page);
// 	}
// });