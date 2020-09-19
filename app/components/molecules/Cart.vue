<template lang="pug">
  .cart
    drink(
      v-for="drink in drinkList"
      :drink="drink"
    )
</template>

<script>
import Drink from "../atoms/Drink";

export default {
  components: {
    Drink
  },

  data() {
    return {
      drinks: []
    };
  },

  computed: {
    drinkList() {
      return this.$store.state.cart.drinkList;
    }
  }
};
</script>
