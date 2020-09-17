export const state = () => ({
  havingMoney: 0,
});

export const mutations = {
  mutationAddMoney(state, payload) {
    state.havingMoney += payload;
  },
};
