<template>
  <div class="container">
      <h4>Count Highlighter</h4>
      <input @input="setHilightIndexes" type="text" v-model="valueToHighlight">
  </div>
</template>

<script>
export default {
    props: [
        'countHistory'
    ],
    data() {
        return {
            valueToHighlight: '',
            indexesToHighlight: []
        }
    },
    methods: {
        setHilightIndexes() {
            console.log(this.countHistory);
            this.countHistory.forEach((element, index) => {
                if (element === parseInt(this.valueToHighlight)) {
                    this.indexesToHighlight.push(index);
                }
            });
            this.$emit('highlight', this.indexesToHighlight);
        }
    }
}
</script>

<style>

</style>