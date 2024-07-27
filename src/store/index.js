import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {   // define your state here (define the variables)
        orderList: [],

    },
    getters: {  // to get the store variable or hit api also (get state variables)
        orderList(state) {
            return state.orderList
        }
    },
    mutations: {  // changes will be done here in state variable (update state variables)
        addOrder(state, data) { // you can call data or payload
            state.orderList.push(data)
        },

        getOrders(state, data) {
            state.orderList = data
        },

        removeOrder(state, id) {
            const orderId = state.orderList.findIndex(order => order.id === id)
            state.orderList.splice(orderId, 1)
        }

        // SET_ORDER_LIST(state, payload) {
        //     state.orderList = payload
        // }
    },
    actions: {  // will call mutation to update store variable
        createOrder({ commit }, data) {
            commit('addOrder', data);
        },

        getOrderList({ commit }) {
            commit('getOrders')
        }

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