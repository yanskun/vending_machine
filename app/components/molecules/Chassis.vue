<template lang="pug">
  .chassis
    table(border="1")
      tbody
        tr
          td(v-for="drink in drinkList")
            bottle(v-if="drink.type === 'bottle'")
            can(v-else="drink.type === 'can'")
</template>

<script>
import Bottle from "../atoms/Bottle";
import Can from "../atoms/Can";

import drink from "@/assets/mixins/drink";

export default {
  components: {
    Bottle,
    Can
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
