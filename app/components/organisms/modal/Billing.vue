<template lang="pug">
  el-dialog(title="Tips" :visible.sync="modalShow" width="30%" :before-close="closeModal")
    span いくら追加しますか？
    el-input-number(v-model="num" :step="10" :min="0" :max="10000" label="hoge")
    span 円
    span.dialog-footer(slot="footer")
      el-button(@click="closeModal") キャンセル
      el-button(type="primary" @click="addCash") 追加
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
      addMoney: "wallet/addMoney"
    }),
    closeModal() {
      this.$emit("close-modal");
    },

    addCash() {
      this.addMoney(this.num);
      this.closeModal();
    }
  }
};
</script>
