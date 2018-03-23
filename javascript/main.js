var vm = new Vue({
	el: '#app',
	data: {
		foods: foodData,
		cart: []
	},
	methods: {
		increase: function (index) {
			var currentFood = this.foods[index];
			if (currentFood.count === undefined || currentFood.count === 0) {
				this.$set(currentFood, 'count', 1);
				this.addCart(currentFood);
			} else {
				currentFood.count++;
			}
		},

		decrease: function (index) {
			var currentFood = this.foods[index];
			if (currentFood.count > 0) {
				currentFood.count--;
				if (currentFood.count === 0) {
					this.removeCart(currentFood);
				}
			}
		},
		addCart: function (goods) {
			this.cart.push(goods);
		},
		removeCart: function (goods) {
			var currentPosition = this.cart.indexOf(goods);
			this.cart.splice(currentPosition, 1);
		}
	},
	computed: {
		cartCount: function () {
			return this.cart.length;
		}
	}
});