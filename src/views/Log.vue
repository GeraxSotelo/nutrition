<template>
  <div class="log container-fluid">
    <div class="row">
      <div class="col">{{log.date}}</div>
      <div class="col">
        <form @submit.prevent="search">
          <input type="text" v-model="query" />
          <button class="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>ie

<script>
export default {
  name: "log",
  mounted() {
    this.$store.dispatch("setActiveLog", this.$route.params.id);
  },
  data() {
    return {
      query: ""
    };
  },
  computed: {
    log() {
      return this.$store.state.activeLog;
    }
  }
};
</script>

<style>
</style>