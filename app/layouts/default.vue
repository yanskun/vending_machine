<template lang="pug">
  el-container
    Header
    nuxt(
      @add-money="addMoney"
    )
    Footer
</template>

<script>
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
