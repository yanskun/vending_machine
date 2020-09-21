<template lang="pug">
  .chassis
    table(border="1")
      tbody
        tr
          td(v-for="drink in drinkListData")
            product(
              :drink="drink"
            )
</template>

<script>
import Product from "./Product";

export default {
  components: {
    Product
  },

  computed: {
    drinkListData() {
      return this.$store.state.drink.stocks;
    }
  }
};
</script>
