<template lang="pug">
  el-dialog(:visible.sync="modalShow" width="80%" :before-close="closeModal" @open="onOpen")
    span 在庫情報
      el-table(:data='tableData' style='width: 100%')
        el-table-column(prop='name' label='名称')
        el-table-column(prop='amount' label='金額')
        el-table-column(prop='stock' label='在庫')
        el-table-column(label='在庫追加')
          template(slot-scope="scope")
            el-input-number(v-model="values[scope.$index]" :min="1" :max="10")
            el-button(
              @click='addStock(scope.$index)'
              type="info"
              size='small'
            ) 在庫追加

      el-button(@click="addProduct" type="success") 商品を追加
      el-button(@click="closeModal") 閉じる
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
      values: {}
    };
  },

  watch: {
    "tableData.length": {
      handler() {
        this.onOpen();
      }
    }
  },

  computed: {
    tableData() {
      return this.$store.state.drink.stocks;
    }
  },

  methods: {
    ...mapMutations({
      mutationAddStock: "drink/addStock"
    }),

    closeModal() {
      this.$emit("close-modal");
    },

    addStock(index) {
      const param = {
        name: this.tableData[index].name,
        count: this.values[index]
      };

      this.mutationAddStock(param);
    },

    onOpen() {
      this.tableData.forEach((data, index) => {
        this.values[index] = 1;
      });
    },

    addProduct() {
      this.$emit("add-product");
    }
  }
};
</script>
