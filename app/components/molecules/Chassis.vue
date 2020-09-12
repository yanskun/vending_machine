<template lang="pug">
  .chassis
    table(border="1")
      tbody
        tr
          td(v-for="drink in drinkList")
            drink(
              :drink="drink"
            )
</template>

<script>
import Drink from "./Drink";

import drink from "@/assets/mixins/drink";

export default {
  components: {
    Drink
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
