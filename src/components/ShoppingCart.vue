<template>
    <div>
        <h2>Shopping cart</h2>
        <ul>
            <li v-for="(product, index) in products" :key="index">
                {{product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total: {{total | currency}}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{checkoutStatus}}</p>
    </div>
</template>

<script>
	import { mapState, mapGetters, mapActions } from "vuex";

	export default {
		computed: {
			...mapState({
				checkoutStatus: state => state.cart.checkoutStatus
			}),
			...mapGetters({
				products: "cartProducts",
				total: "cartTotal"
			})
		},
		methods: {
			...mapActions([
				"checkout"
			])
		}
	}
</script>
