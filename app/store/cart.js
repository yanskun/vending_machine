export const state = () => ({
  drinkList: [],
});

export const mutations = {
  addDrinkInCart(state, payload) {
    state.drinkList.push(payload);
  },

  drinking(state, payload) {
    const index = state.drinkList.findIndex((item) =>
      item.name === payload.name
    );
    state.drinkList.splice(index, 1);
  },
};
