export const state = () => ({
  havingMoney: 0,
});

export const mutations = {
  addMoney(state, payload) {
    state.havingMoney += payload;
  },
};
