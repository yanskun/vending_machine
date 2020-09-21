<template lang="pug">
  .product(:class="drink.container")
    drink(:drink="drink")
    el-button(v-if="inStock" round @click="onClick" :disabled="littleMoney")
      | {{ drink.amount }}円
    el-button(v-else round disabled type="danger" style="font-size: 1.2vh")
      | 品切れ

    el-tag(v-if="isCool" effect="light")
      | つめた〜い
    el-tag(v-else effect="light" type="danger")
      | あったか〜い
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
    },

    isCool() {
      return this.drink.type === "cool";
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
  .el-tag {
    margin-top: 0.5vh;
  }
}
</style>
