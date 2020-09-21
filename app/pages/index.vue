<template lang="pug">
  .container
    chassis

    wallet(
      @add-money="addMoney"
    )

    cart

    billing-modal(
      :modal-show="billingShow"
      @close-modal="closeModal"
    )
</template>

<script>
import Chassis from "@/components/molecules/Chassis";
import Cart from "@/components/molecules/Cart";
import Wallet from "@/components/molecules/Wallet";
import BillingModal from "@/components/organisms/modal/Billing";

export default {
  components: {
    Chassis,
    Cart,
    Wallet,
    BillingModal
  },

  data() {
    return {
      billingShow: false
    };
  },

  methods: {
    addMoney() {
      this.$emit("add-money");
    },

    addMoney() {
      this.billingShow = true;
    },

    closeModal() {
      this.billingShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
