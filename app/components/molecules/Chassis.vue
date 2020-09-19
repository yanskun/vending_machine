<template lang="pug">
  .chassis
    table(border="1")
      tbody
        tr
          td(v-for="drink in drinkListData")
            product(
              :drink="drink"
            )
</template>

<script>
import Product from "./Product";

import drink from "@/assets/mixins/drink";

export default {
  components: {
    Product
  },

  mixins: [drink],

  data() {
    return {
      drinkList: []
    };
  },

  mounted() {
    this.drinkList = this.drinkListData;
  }
};
</script>
