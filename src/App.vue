<template>
  <div class="container">
    <h1>Vuex Demo</h1>
    <CounterUsingVuex />
  </div>
</template>

<script>
import CounterUsingVuex from './components/CounterUsingVuex.vue';

export default {
  name: 'App',
  components: {
    CounterUsingVuex
  }
}
</script>

<style>
</style>
