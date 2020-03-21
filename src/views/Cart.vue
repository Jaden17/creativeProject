<template>
<div>
  <h2 id="cartHeader">Request Form</h2>
  <div id="form">
  <ul>
    <li v-for="item in this.$root.$data.cart" :key="item.id">
      <div class="info">
        <h1>{{item.name}}</h1>
        <p id="iupac">IUPAC name: {{item.iupac}}</p>
        <h2>Formula: {{item.formula}}</h2>
        <button v-on:click="removeFromCart(item)"  class="auto">Remove</button>
      </div>
      <hr>
    </li>
  </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'Items',
  components: {
  },
  methods: {
    removeFromCart(item){
      var index = this.$root.$data.cart.indexOf(item);
      if (index > -1)
        this.$root.$data.cart.splice(index,1);
    },
  },
}
</script>

<style scoped>

#cartHeader {
  z-index: 0;
  color: #FFF;
  background-color: rgba(0,0,0,.7);
  font-size: 50px;
  position: relative;
  top: 50px;
  width: 100%;
  text-align: center;
}

#form {
  background-color: #FFF;
}

li {
  padding: 10px;
}
</style>
