import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import filterProducts from '../products/filter-products';

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      user: null,
      products: null,
    };
  },
  getters: {
    getFilteredProducts(state) {
      return filter => filterProducts(filter, state.products);
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      axios.get('/api/products')
        .then(result => commit('setProducts', result.data));
    },
    registerUser({ commit }, user) {
      return axios.post('/api/register', user)
        .then(result => commit('setUser', result.data));
    },
    signIn({ commit }, userLogin) {
      return axios.post('/api/sign-in', userLogin)
        .then(result => commit('setUser', result.data));
    },
    signOut({ commit }, userLogin) {
      return axios.post('/api/sign-out', userLogin)
        .then(() => commit('setUser', null));
    },
  },
});
