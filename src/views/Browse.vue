<template>
<div class="browseScreen">
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <ProductList :products="products" />
</div>
</template>

<style scoped>
.browseScreen {
  z-index: -1;
  position: absolute;
  top: 100px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 3px solid #000;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  background-color: rgba(0,0,0,.7);
  color: #FFF;
  display: table-cell;
  padding-left: 10px;
  padding-right: 10px;
  width: 1px;
}

input {
  background-color: rgba(0,0,0,.3);
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>

<script>
import ProductList from "../components/stockroom.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
    }
  },
}
</script>
