<template lang="pug">
  el-container
    Header(
      @add-money="addMoney"
    )
    nuxt
    Footer

    billing-modal(
      :modal-show="billingShow"
      @close-modal="closeModal"
    )
</template>

<script>
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

import BillingModal from "@/components/organisms/modal/Billing";

export default {
  components: {
    Header,
    Footer,
    BillingModal
  },

  data() {
    return {
      billingShow: false
    };
  },

  methods: {
    addMoney() {
      this.billingShow = true;
    },

    closeModal() {
      this.billingShow = false;
    }
  }
};
</script>
