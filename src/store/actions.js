import shop from '@/api/shop';

export default { // = methods
	fetchProducts({ commit }) {
	return new Promise((resolve) => {
		shop.getProducts(products => {
			commit("setProducts", products);
			resolve()
		})
	})
},

}
