<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.iupac}}</p>
        <h2>{{product.formula}}</h2>
      </div>
      <div class="price">
        <button v-on:click="addToCart(product)" class="auto">Add</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      this.$root.$data.cart.push(product);
    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 250px;
}

.info {
  background: rgba(0,0,0,.7);
  color: #FFF;
  padding: 10px 30px;
  height: 150px;
}

.info h1 {
  font-size: 24px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 12px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
