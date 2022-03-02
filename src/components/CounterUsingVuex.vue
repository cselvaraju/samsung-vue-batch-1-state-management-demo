<template>
  <div class="container">
    <h1>Counter Demo</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <button @click="increment" class="btn btn-primary">
            <i class="fa fa-plus"></i>
          </button>
        </div>
        <div class="col">
          <button @click="incrementBy5" class="btn btn-primary">
            <i class="fa fa-plus"></i>
            5
          </button>
        </div>
        <div class="col">{{ currentCount }}</div>
        <div class="col">
          <button @click="decrement" class="btn btn-primary">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- <CounterHistory :history="countHistory" /> -->
    <CounterSquared />
    <div>
        <button @click="getPosts" class="btn btn-primary">Get Posts</button>
        <div v-if="postsList.length !== 0">
            <p v-for="post in postsList" :key="post.id">
                {{ post.title }}
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import CounterSquared from './CounterSquared.vue';

export default {
    components: {
        CounterSquared
    },
    data() {
        return {
            // currentCount: this.$store.state.currentCount
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        },
        incrementBy5() {
            this.$store.commit('increment', 5);
        },
        decrement() {
            this.$store.dispatch('decrement');
        },
        getPosts() {
            this.$store.dispatch('getPosts');
        }
    },
    computed: {
        currentCount() {
            return this.$store.state.currentCount;
        },
        postsList() {
            return this.$store.state.posts;
        }
    }
}
</script>

<style>

</style>