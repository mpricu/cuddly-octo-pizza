const state = {

    cartItems: []
};

const actions = {
    addToOrder({ commit, dispatch }, payload) {

        let cartItem = {
            id: payload.item.id,
            name:payload.item.name,
            description:payload.item.description,
            vegan:payload.item.vegan,
            price:payload.option.price,
            size:payload.option.size,
            quantity:1
        }

        commit('addPizzaToOrder', cartItem);

        dispatch(
            'snackbarModule/showSuccess',
            {
                message: 'Pizza added to the cart'
            },
            { root: true }
        );
    }
};
const mutations = {
    addPizzaToOrder(state, payload) {
        const pizzaId = payload.id;
        const pizzaSize = payload.size;

      let existingPizzas = [...state.cartItems];

      const alreadyInCartPizza = existingPizzas.find(
        pizza => pizza.id == pizzaId && pizza.size == pizzaSize);

      if (alreadyInCartPizza) {
        existingPizzas = existingPizzas.map(pizza => {
          if (pizza.id == pizzaId && pizza.size == pizzaSize) {
            return { ...pizza, quantity: pizza.quantity + 1 };
          } else {
            return pizza;
          }
        });
      } else {
        existingPizzas.push(payload);
      }

    state.cartItems = existingPizzas;

    }
};
const getters = {
    getAllCartItems(state) {

        return state.cartItems;
    }
};

export const menuModule = {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
};
