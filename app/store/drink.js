export const state = () => ({
  PurchasedDrinks: [],
  havingMoney: 0,
  stocks: [
    { container: "bottle", name: "コーラ", type: "cool", amount: 150, stock: 2 },
    {
      container: "can",
      name: "オレンジジュース",
      type: "cool",
      amount: 120,
      stock: 0,
    },
    { container: "can", name: "コーヒー", type: "hot", amount: 110, stock: 1 },
  ],
});

export const mutations = {
  /**
   * 買った飲み物を手に入れる
   *
   * @param {object} state ステート
   * @param {object} payload 購入した飲み物
   */
  addDrinkInCart(state, payload) {
    state.PurchasedDrinks.push(payload);
  },

  /**
   * 買った飲み物を飲む
   *
   * @param {object} state ステート
   * @param {object} payload 対象の飲み物
   */
  consumptionDrinking(state, payload) {
    const index = state.PurchasedDrinks.findIndex((item) =>
      item.name === payload.name
    );
    state.PurchasedDrinks.splice(index, 1);
  },

  /**
   * お金をいれる
   *
   * @param {object} state ステート
   * @param {number} payload 入金額
   */
  addMoney(state, payload) {
    state.havingMoney += payload;
  },

  /**
   * 商品を購入する
   *
   * @param {object} state ステート
   * @param {object} payload 購入する飲み物
   */
  purchase(state, payload) {
    state.havingMoney -= payload.amount;
    const targetDrink = state.stocks.find((drink) =>
      drink.name === payload.name
    );
    targetDrink.stock--;
  },
};
