<template lang="pug">
  .cart
    .cart-drink(v-for="drink in drinkList" @click="onClick(drink)")
      drink(:drink="drink")
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
      return this.$store.state.drink.drinkList;
    }
  },

  methods: {
    onClick(drink) {
      window.alert(drink.name + "を飲みますか？");
    }
  }
};
</script>
