<template lang="pug">
  el-container
    el-header
      span 自動販売機
      el-button(type="info" @click="adminClick") 管理

    .container
      chassis

      wallet(
        @add-money="addMoney"
      )

      cart

      billing-modal(
        :modal-show="billingShow"
        @close-modal="closeBillingModal"
      )

      admin-modal(
        :modal-show="adminShow"
        @close-modal="closeAdminModal"
      )
</template>

<script>
import Chassis from "@/components/molecules/Chassis";
import Cart from "@/components/molecules/Cart";
import Wallet from "@/components/molecules/Wallet";
import AdminModal from "@/components/organisms/modal/Admin";
import BillingModal from "@/components/organisms/modal/Billing";

export default {
  components: {
    Chassis,
    Cart,
    Wallet,
    AdminModal,
    BillingModal
  },

  data() {
    return {
      billingShow: false,
      adminShow: false
    };
  },

  methods: {
    addMoney() {
      this.billingShow = true;
    },

    closeBillingModal() {
      this.billingShow = false;
    },

    adminClick() {
      this.adminShow = true;
    },

    closeAdminModal() {
      this.adminShow = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
}
</style>
