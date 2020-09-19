<template lang="pug">
  .container
    chassis

    cart
</template>

<script>
import Chassis from "@/components/molecules/Chassis";
import Cart from "@/components/molecules/Cart";

export default {
  components: {
    Chassis,
    Cart
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
}
</style>
