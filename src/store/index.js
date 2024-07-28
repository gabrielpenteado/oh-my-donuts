import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {   // define your state here (define the variables)
        orderList: [],
        order: {
            name: "",
            phone: "",
            chocoluxe: "0",
            berrilicious: "0",
            twixie: "0",
            frostique: "0",
            mochavibe: "0",
            cinnabreeze: "0",
            totalPrice: "0",
        },

    },
    getters: {  // to get the store variable or hit api also (get state variables)
        orderList(state) {
            return state.orderList
        }
    },
    mutations: {  // changes will be done here in state variable (update state variables)
        addOrder(state) { // you can call data or payload
            const stringsArray = [
                state.order.chocoluxe,
                state.order.berrilicious,
                state.order.twixie,
                state.order.frostique,
                state.order.mochavibe,
                state.order.cinnabreeze,
            ]

            const numbersArray = stringsArray.map(Number);

            const total = numbersArray.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            );

            state.order.totalPrice = total.toString();


            state.orderList.push(state.order);
        },

        clearOrderInputs(state) {
            state.order = {
                name: "",
                phone: "",
                chocoluxe: "0",
                berrilicious: "0",
                twixie: "0",
                frostique: "0",
                mochavibe: "0",
                cinnabreeze: "0",
                totalPrice: "0",
            }
        },

        removeOrder(state, id) {
            state.orderList.splice(id, 1)
        },

        setName(state, data) {
            state.order.name = data;
        },

        setPhone(state, data) {
            state.order.phone = data;
        },

        setChocoluxe(state, data) {
            state.order.chocoluxe = data;
        },

        setBerrilicious(state, data) {
            state.order.berrilicious = data;
        },

        setTwixie(state, data) {
            state.order.twixie = data;
        },

        setFrostique(state, data) {
            state.order.frostique = data;
        },

        setMochavibe(state, data) {
            state.order.mochavibe = data;
        },

        setCinnabreeze(state, data) {
            state.order.cinnabreeze = data;
        },

        // SET_ORDER_LIST(state, payload) {
        //     state.orderList = payload
        // }
    },
    actions: {  // will call mutation to update store variable
        createOrder({ commit }) {
            commit('addOrder');

            setTimeout(() => {
                commit('clearOrderInputs');
            }, 1300)
        },

        deleteOrder({ commit }, id) {
            commit('removeOrder', id)
        },

        getOrderList({ commit }) {
            commit('getOrders')
        },

        updateName({ commit }, data) {
            commit('setName', data)
        },

        updatePhone({ commit }, data) {
            commit('setPhone', data)
        },

        updateChocoluxe({ commit }, data) {
            commit('setChocoluxe', data)
        },

        updateBerrilicious({ commit }, data) {
            commit('setBerrilicious', data)
        },

        updateTwixie({ commit }, data) {
            commit('setTwixie', data)
        },

        updateFrostique({ commit }, data) {
            commit('setFrostique', data)
        },

        updateMochavibe({ commit }, data) {
            commit('setMochavibe', data)
        },

        updateCinnabreeze({ commit }, data) {
            commit('setCinnabreeze', data)
        },

        //   createOrder({commit}, payload) {
        // console.log(commit, payload)

        // axios.post('backend_url or api_url', payload).then((res) =>{
        //     console.log('order created')
        // }).catch((err) => {
        //     console.log('error')
        // })
        //    },
        //   getOrderList({ commit }) {
        // axios.get('backend_url or api_url', payload).then((res) =>{
        //     console.log('got user list')
        //     console.log(res.data.data)
        //     //call mutation
        //     commit('SET_ORDER_LIST', res.data.data)

        // }).catch((err) => {
        //     console.log('error')
        // })
        //    }
    },
    plugins: [createPersistedState()],
})