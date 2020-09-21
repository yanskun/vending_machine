
<template lang="pug">
  el-dialog(:visible.sync="modalShow" width="80%" :before-close="closeModal")
    span 新しい商品を追加します

    el-input(v-model="data.name" placeholder="商品名を入力してください" type='text')
    el-input-number(v-model="data.amount" :min="10" :step="10")
    el-input-number(v-model="data.stock" :min="1")
    el-select(v-model="data.type" placeholder="飲み物のタイプを決めてください")
      el-option(
        v-for="type in types"
        :label="type.label"
        :value="type.value"
      )
    el-select(v-model="data.container" placeholder="入れ物を決めてください")
      el-option(
        v-for="container in containers"
        :label="container.label"
        :value="container.value"
      )

    span.dialog-footer(slot="footer")
      el-button(@click="closeModal") キャンセル
      el-button(type="primary" @click="addProduct" :disabled="disable") 追加
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
      data: {
        name: "",
        amount: 10,
        stock: 1,
        type: "",
        container: ""
      },
      types: [
        { label: "冷たい", value: "cool" },
        { label: "温かい", value: "hot" }
      ],
      containers: [
        { label: "ボトル", value: "bottle" },
        { label: "カン", value: "can" }
      ]
    };
  },

  computed: {
    disable() {
      return !this.data.name || !this.data.type || !this.data.container;
    }
  },

  methods: {
    ...mapMutations({
      mutationAddProduct: "drink/addProduct"
    }),

    closeModal() {
      this.data = {
        name: "",
        amount: 10,
        stock: 1,
        type: "",
        container: ""
      };
      this.$emit("close-modal");
    },

    addProduct() {
      this.mutationAddProduct(this.data);
      this.closeModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.dialog-footer {
  text-align: center;
}
</style>
