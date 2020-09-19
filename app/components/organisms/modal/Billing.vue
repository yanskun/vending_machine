<template lang="pug">
  el-dialog(:visible.sync="modalShow" width="30%" :before-close="closeModal")
    span いくら入れますか？
    br
    el-input-number(v-model="num" :step="10" :min="0" :max="10000" label="hoge")
    span 円
    span.dialog-footer(slot="footer")
      el-button(@click="closeModal") キャンセル
      el-button(type="primary" @click="addMoney") 追加
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    modalShow: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      num: 0
    };
  },

  methods: {
    ...mapMutations({
      mutationAddMoney: "wallet/mutationAddMoney"
    }),

    closeModal() {
      this.num = 0;
      this.$emit("close-modal");
    },

    addMoney() {
      this.mutationAddMoney(this.num);
      this.closeModal();
    }
  }
};
</script>
