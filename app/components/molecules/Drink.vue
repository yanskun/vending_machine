<template lang="pug">
  .drink(
    :class="drink.container"
  )
    .drink-img
      img(:src="img[drink.container]")
    .drink-title
      | {{ drink.name }}
    el-button(round @click="onClick" :disabled="disable")
      | {{ drink.amount }}円
</template>

<script>
import { mapMutations } from "vuex";

import canImg from "@/assets/images/can.png";
import bottleImg from "@/assets/images/bottle.png";

export default {
  props: {
    drink: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      img: {
        can: canImg,
        bottle: bottleImg
      }
    };
  },

  computed: {
    disable() {
      return this.$store.state.wallet.havingMoney < this.drink.amount;
    }
  },

  methods: {
    ...mapMutations({
      mutationPurchase: "wallet/mutationPurchase"
    }),

    onClick() {
      this.mutationPurchase(this.drink.amount);
    }
  }
};
</script>

<style lang="scss" scoped>
.drink {
  width: 7vw;
  .drink-img {
    img {
      height: 5vh;
      margin: 0.5vh 1vw;
    }
  }
  .drink-title {
    height: 5vh;
  }
}
</style>
