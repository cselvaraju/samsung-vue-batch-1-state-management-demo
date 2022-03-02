<template>
  <div class="container">
      <h3>Counter History</h3>
      <table class="tbl">
          <tr v-for="(value, index) in history" :key="index">
              <td :class="{highlight: 'highlightFlag(index)'}">{{ value }}</td>
          </tr>
      </table>
  </div>
  <CountHighlighter :countHistory="history" @highlight="setHighlightIndexes($event)" />
</template>

<script>
import CountHighlighter from './CountHighlighter.vue';
export default {
    props: [
        'history'
    ],
    components: {
        CountHighlighter
    },
    data() {
        return {
            highlightedIndexes: []
        }
    },
    methods: {
        setHighlightIndexes(event) {
            console.log('event');
            console.log(event);
            // console.log(typeof(event));
            // console.log(Array(event));
            this.highlightedIndexes = [];
            event.forEach((value, key) => console.log('key' + key + 'value' + value));
            //console.log(this.highlightedIndexes);
        }
    },
    computed: {
        highlightFlag(index) {
            return this.highlightedIndexes.includes(index);
        } 
    }
}
</script>

<style>
    .highlight {
        font-weight: bold;
    }
</style>