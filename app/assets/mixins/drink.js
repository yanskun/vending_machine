export default {
  computed: {
    drinkListData() {
      return [
        { container: "bottle", name: "コーラ", type: "cool", amount: 150 },
        { container: "can", name: "オレンジジュース", type: "cool", amount: 120 },
        { container: "can", name: "コーヒー", type: "hot", amount: 110 },
      ];
    },
  },
};
