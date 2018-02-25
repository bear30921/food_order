var map;
// 初始化google地圖
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

// 景點資料
function getData() {  
	for (var i = 0; i < data.length; i++) {    
		var box = {};    
		var place = {};    
		place.lat = Number(data[i].latitude);    
		place.lng = Number(data[i].longitude);    
		box.map = map;    
		box.title = data[i].stitle;    
		box.position = place;     // console.log(box);
		    
		new google.maps.Marker(box);  
	}
}

function renderData(param) {
	var str = ''; 
	var placesList = document.querySelector('.places-list');  
	placesList.innerHTML = '';
	for (var i = 0; i < 10; i++) {
		console.log('hello');

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

		      
		var place = '<li class="place" data-index="' + i + '"><div class="caption"><img src="' + placeImg + '" alt=""><h3 class="title">' + placeTitle + '</h3><div class="area">' + placeArea + '</div></div><div class="info"><p class="type">類型：' + placeType + '</p><p>地址：' + placeAddress + '</p><p>電話：' + placeTel + '</p><a href="javascript:;" class="btn">景點介紹</a></div></li>';

		      
		str += place;  


	}  
	placesList.innerHTML = str;
}


function filterData(area) {  
	var str = ''; 
	var placesList = document.querySelector('.places-list');  
	placesList.innerHTML = '';
	for (var i = 0; i < 10; i++) {
		if (area === data[i].address.substr(5, 3)) {
			console.log('hello');

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

			      
			var place = '<li class="place" data-index="' + i + '"><div class="caption"><img src="' + placeImg + '" alt=""><h3 class="title">' + placeTitle + '</h3><div class="area">' + placeArea + '</div></div><div class="info"><p class="type">類型：' + placeType + '</p><p>地址：' + placeAddress + '</p><p>電話：' + placeTel + '</p><a href="javascript:;" class="btn">景點介紹</a></div></li>';

			      
			str += place;  
		}

	}  
	placesList.innerHTML = str;
}

// renderData();


var areaList = document.querySelector('.area-list');
areaList.addEventListener('change', function (e) {  
	var currentValue = e.target.value;  
	if (currentValue === "全部") {
		renderData();
	} else {
		filterData(currentValue);
	}
});


// var number = 10;
// var total = data.length + 1;
// var totalPage = Math.ceil(total / number);
// var ul_list = document.createElement('ul');
// ul_list.setAttribute('class', 'pages');

// var str = '';
// for (var i = 0; i < totalPage; i++){
// 	var pageNo = '<li><a href="javascript:;" class="pageNo" data-page="' + (i+1) + '">'+ (i+1) +'</a></li>';
// 	str += pageNo;
// }
// ul_list.innerHTML = str;

// document.querySelector('.views .container').appendChild(ul_list);


window.onload = renderData();