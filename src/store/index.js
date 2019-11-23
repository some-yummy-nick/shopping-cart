import Vuex from 'vuex';
import Vue from 'vue';
import actions from "./actions";
import cart from "./modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
	modules:{
		cart
	},
	state: { // = data
		products: [],
	},
	getters: { // = computed
		availableProducts(state) {
			return state.products.filter(product => product.inventory > 0)
		},

		productIsInStock() {
			return (product) => {
				return product.inventory > 0
			}
		}

	},
	actions,
	mutations: {
		setProducts(state, products) {
			state.products = products
		},

		decrementProductInventory(state, product) {
			product.inventory--;
		},
	}
});
