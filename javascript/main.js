var vm = new Vue({
	el: '#app',
	data: {
		foods: foodData
	},
	methods: {
		increase: function (index) {
			var currentFood = this.foods[index];
			if (currentFood.count === undefined) {
				Vue.set(currentFood, 'count', 1);
			} else {
				currentFood.count++;
			}
		}
	}
});