<template>
  The Current Counter value squared is {{ squaredCount }}
  <div>
    <CounterCubed />
  </div>
</template>

<script>
import CounterCubed from './CounterCubed.vue';

export default {
    components: {
      CounterCubed
    },
    computed: {
        squaredCount() {
            const count = this.$store.state.currentCount;
            return count*count;
        }
    }
}
</script>

<style>

</style>