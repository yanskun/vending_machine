<template lang="pug">
  .product(:class="drink.container")
    drink(:drink="drink")
    el-button(v-if="inStock" round @click="onClick" :disabled="littleMoney")
      | {{ drink.amount }}円
    el-button(v-else round disabled type="danger" style="font-size: 1.2vh")
      | 品切れ
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
    littleMoney() {
      return this.$store.state.drink.havingMoney < this.drink.amount;
    },

    inStock() {
      return this.drink.stock > 0;
    }
  },

  methods: {
    ...mapMutations({
      mutationPurchase: "drink/purchase",
      addDrinkInCart: "drink/addDrinkInCart"
    }),

    onClick() {
      this.mutationPurchase(this.drink);
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
