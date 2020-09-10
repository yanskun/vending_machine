<template lang="pug">
  .container
    chassis
</template>

<script>
import Chassis from "@/components/molecules/Chassis";

export default {
  components: {
    Chassis
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
