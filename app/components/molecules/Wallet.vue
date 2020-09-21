<template lang="pug">
  .wallet
    span 今入っているお金
    .the-money
      i.el-icon-wallet
      span {{ havingMoney }}円

    el-button(type='primary' @click="onClick") 追加
</template>

<script>
export default {
  computed: {
    havingMoney() {
      return this.$store.state.drink.havingMoney;
    }
  },

  methods: {
    onClick() {
      this.$emit("add-money");
    }
  }
};
</script>
