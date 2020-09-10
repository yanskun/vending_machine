<template lang="pug">
  .can
    img(:src="img")
</template>

<script>
import img from "@/assets/images/can.png";

export default {
  data() {
    return {
      img
    };
  }
};
</script>
