<template lang="pug">
  el-dialog(title="Tips" :visible.sync="modalShow" width="30%" :before-close="closeModal")
    span This is a message
    span.dialog-footer(slot="footer")
      el-button(@click="closeModal") Cancel
      el-button(type="primary" @click="closeModal") Confirm
</template>

<script>
export default {
  props: {
    modalShow: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>
