<template lang="pug">
  .bottle
    img(:src="img")
</template>

<script>
import img from "@/assets/images/bottle.png";

export default {
  data() {
    return {
      img
    };
  }
};
</script>
