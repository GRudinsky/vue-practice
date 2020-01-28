var app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    inventory: 0,
    details: ['80% cotton', '20% polyester', 'Gender natural'],
    image: './assets/vmSocks-green-onWhite.jpg',
    variants: [
      { variantId: 2234,
        variantColor: 'green',
        variantImage: './assets/vmSocks-green-onWhite.jpg' },
      {
        variantId: 2235,
        variantColor: 'blue',
        variantImage: 'https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg'
      }
    ],
    cart: 0
  }, methods: {
    addToCart(){
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})