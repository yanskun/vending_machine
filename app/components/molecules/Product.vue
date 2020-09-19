<template lang="pug">
  .product(:class="drink.container")
    drink(:drink="drink")
    el-button(round @click="onClick" :disabled="disable")
      | {{ drink.amount }}円
</template>

<script>
import { mapMutations } from "vuex";

import Drink from "../atoms/Drink";

export default {
  components: {
    Drink
  },

  props: {
    drink: {
      type: Object,
      required: true
    }
  },

  computed: {
    disable() {
      return this.$store.state.wallet.havingMoney < this.drink.amount;
    }
  },

  methods: {
    ...mapMutations({
      mutationPurchase: "wallet/mutationPurchase",
      addDrinkInCart: "cart/addDrinkInCart"
    }),

    onClick() {
      this.mutationPurchase(this.drink.amount);
      this.addDrinkInCart(this.drink);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  width: 7vw;
}
</style>
