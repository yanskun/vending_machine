<template lang="pug">
  .drink
    .drink-img
      img(:src="img[drink.container]")
    .drink-title
      | {{ drink.name }}
</template>

<script>
import canImg from "@/assets/images/can.png";
import bottleImg from "@/assets/images/bottle.png";

export default {
  props: {
    drink: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      img: {
        can: canImg,
        bottle: bottleImg
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.drink-img {
  img {
    height: 5vh;
    margin: 0.5vh 1vw;
  }
}
.drink-title {
  height: 5vh;
}
</style>
