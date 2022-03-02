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
        <div class="col">{{ currentCount }}</div>
        <div class="col">
          <button @click="decrement" class="btn btn-primary">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
    <CounterHistory :history="countHistory" />
  </div>
</template>

<script>
import CounterHistory from './CounterHistory.vue';

export default {
    components: {
        CounterHistory
    },
    data() {
        return {
            currentCount: 0,
            countHistory: [],
        }
    },
    methods: {
        increment() {
            this.currentCount++;
            this.countHistory.push(this.currentCount);
        },
        decrement() {
            this.currentCount--;
            this.countHistory.push(this.currentCount);
        }
    }
};
</script>

<style>
</style>