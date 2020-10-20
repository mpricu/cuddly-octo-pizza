const state = {
    cartItems: []
};

const actions = {
    addToOrder({ commit, dispatch }, payload) {
        let cartItem = {
            // id: payload.item.id,
            name: payload.item.name,
            description: payload.item.description,
            vegan: payload.item.vegan,
            price: payload.option.price,
            size: payload.option.size,
            quantity: 1
        };

        commit('addPizzaToOrder', cartItem);

        dispatch(
            'snackbarModule/showSuccess',
            {
                message: 'Pizza added to the cart'
            },
            { root: true }
        );
    },
    deleteFromOrder({ commit, dispatch }, payload) {
        let cartItem = {
            // id: payload.item.id,
            name: payload.item.name,
            description: payload.item.description,
            vegan: payload.item.vegan,
            price: payload.option.price,
            size: payload.option.size,
            quantity: 1
        };

        commit('deletePizzaFromOrder', cartItem);

        dispatch(
            'snackbarModule/showSuccess',
            {
                message: 'Pizza deleted from order'
            },
            { root: true }
        );
    },
    increaseQuantity({ commit, dispatch }, payload) {
        let cartItem = {
            // id: payload.item.id,
            name: payload.name,
            description: payload.description,
            vegan: payload.vegan,
            price: payload.price,
            size: payload.size,
            quantity: 1
        };

        commit('addPizzaToOrder', cartItem);

        dispatch(
            'snackbarModule/showSuccess',
            {
                message: 'Pizza added to the cart'
            },
            { root: true }
        );
    },
    decreaseQuantity({ commit, dispatch }, payload) {
        let cartItem = {
            // id: payload.item.id,
            name: payload.item.name,
            description: payload.item.description,
            vegan: payload.item.vegan,
            price: payload.item.price,
            size: payload.item.size,
            quantity: 1
        };

        commit('deletePizzaFromOrder', cartItem);

        dispatch(
            'snackbarModule/showSuccess',
            {
                message: 'Pizza deleted from order'
            },
            { root: true }
        );
    }
};
const mutations = {
    addPizzaToOrder(state, payload) {
        const pizzaName = payload.name;
        const pizzaSize = payload.size;

        let existingPizzas = [...state.cartItems];

        const alreadyInCartPizza = existingPizzas.find(
            pizza => pizza.name == pizzaName && pizza.size == pizzaSize
        );

        if (alreadyInCartPizza) {
            existingPizzas = existingPizzas.map(pizza => {
                if (pizza.name == pizzaName && pizza.size == pizzaSize) {
                    return { ...pizza, quantity: pizza.quantity + 1 };
                } else {
                    return pizza;
                }
            });
        } else {
            existingPizzas.push(payload);
        }

        state.cartItems = existingPizzas;
    },

    deletePizzaFromOrder(state, payload) {
        const pizzaName = payload.name;
        const pizzaSize = payload.size;

        let existingPizzas = [...state.cartItems];

        const alreadyInCartPizza = existingPizzas.find(
            pizza => pizza.name == pizzaName && pizza.size == pizzaSize
        );

        if (alreadyInCartPizza) {
            existingPizzas = existingPizzas.map(pizza => {
                if (pizza.name == pizzaName && pizza.size == pizzaSize) {
                    return { ...pizza, quantity: pizza.quantity - 1 };
                } else {
                    return pizza;
                }
            });
        }

        let remainingPizzas = existingPizzas.filter(
            pizza => pizza.quantity !== 0
        );

        state.cartItems = remainingPizzas;
    }
};
const getters = {
    getAllCartItems(state) {
        return state.cartItems;
    },
    getCartItemsNumber(state) {
        const cartItemsNumber = state.cartItems.reduce(
            (a, b) => a + b.quantity,
            0
        );
        return cartItemsNumber;
    }
};

export const menuModule = {
    state,
    actions,
    mutations,
    getters,
    namespaced: true
};
