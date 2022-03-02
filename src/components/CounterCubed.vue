<template>
  The Current Counter value cubed is {{ cubedCount }}
</template>

<script>
export default {
    computed: {
        cubedCount() {
            return this.$store.getters.countCubed;
        }
    }
}
</script>

<style>

</style>