import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    currentCount: 100,
    posts: []
  },
  getters: {
    countCubed(state) {
      const count = state.currentCount;
      return count*count*count;
    }
  },
  mutations: {
    increment(state, payload) {
      console.log('Increment mutation');
      console.log(state);
      console.log(payload);
      state.currentCount = state.currentCount + ((payload) ? payload : 1);
    },
    decrement(state) {
      state.currentCount = state.currentCount - 1;
    },
    setPosts(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    decrement(state) {
      console.log('decrement');
      console.log(state);
      setTimeout(() => state.commit('decrement'),
      2000);
    },
    getPosts(state) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(
        response => state.commit('setPosts', response.data)
      )
    }
  },
  modules: {
  }
})
