<template>
    <div>
      <div class="a">pagea {{ $store.state.money.money}}</div>
      <button @click='add'>增加</button>
      <button @click='reduce'>删减</button>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
    export default {
      methods: mapActions('money',['add','reduce'])
    }
</script>

<style scoped>

</style>
