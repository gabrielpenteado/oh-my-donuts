import { createStore } from 'vuex'

export default createStore({
    state: {
        orders: [],
        name: "",
        phone: null,
        donut1: {
            qty: 0,
            image: "/images/donut1"
        },
        donut2: {
            qty: 0,
            image: "/images/donut2"
        },
        donut3: {
            qty: 0,
            image: "/images/donut3"
        },
        donut4: {
            qty: 0,
            image: "/images/donut4"
        },
        donut5: {
            qty: 0,
            image: "/images/donut5"
        },
        donut6: {
            qty: 0,
            image: "/images/donut6"
        },
        donut7: {
            qty: 0,
            image: "/images/donut7"
        },
        donut8: {
            qty: 0,
            image: "/images/donut8"
        },

    },
    getters: {

    },
    mutation: {
        updateDonut1(state, data) {
            state.obj.donut1.qty = data
        }

    },
    actions: {

    }
})