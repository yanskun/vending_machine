<template lang="pug">
  .wallet
    span 所持金
    .the-money
      i.el-icon-wallet
      span {{ habingMoney }}円

    el-button(type='primary' @click="onClick") 追加
</template>

<script>
export default {
  computed: {
    habingMoney() {
      return this.$store.state.money.havingMoney;
    }
  },

  methods: {
    onClick() {
      this.$emit("add-money");
    }
  }
};
</script>

<style lang="scss" scoped>
.wallet {
  display: flex;
}
</style>
