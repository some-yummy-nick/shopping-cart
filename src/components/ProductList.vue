<template>
    <div>
        <h2>Products list</h2>
        <img v-if="loading" src="https://imgur.com/JfPpwOA.gif" alt="">
        <ul v-else>
            <li v-for="(product,index) in products" :key="index">{{product.title}} - {{product.price | currency}} -
                {{product.inventory}}
                <button :disabled="!productIsInStock(product)" @click="addProductToCart(product)">Add to cart</button>
            </li>

        </ul>
    </div>
</template>

<script>
	import { mapState, mapGetters , mapActions} from "vuex";

	export default {
		data() {
			return {
				loading: false
			}
		},
		computed: {
			...mapState([
				'products',
			]),
			...mapGetters([
				"productIsInStock"
			])
		},
		methods: {
			...mapActions([
				"addProductToCart",
                "fetchProducts"
            ])
		},
		created() {
			this.loading = true;
			this.fetchProducts()
				.then(() => this.loading = false)
		}
	}
</script>
