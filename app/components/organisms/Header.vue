<template lang="pug">
  el-header
    span 自動販売機

    wallet(
      @add-money="addMoney"
    )
</template>

<script>
import Wallet from "../molecules/Wallet";

export default {
  components: {
    Wallet
  },

  methods: {
    addMoney() {
      this.$emit("add-money");
    }
  }
};
</script>
