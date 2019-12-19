<template>
  <div class="log container-fluid">
    <div class="row">
      <div class="col-12">{{log.date}}</div>
      <div class="col-12">
        <form @submit.prevent="search">
          <input type="text" v-model="query" />
          <button class="btn btn-primary">Search</button>
        </form>
      </div>
      <div class="col-12">
        <p v-for="result in results" :key="result.food_name">{{result.food_name}}</p>
      </div>
    </div>
  </div>
</template>

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
  methods: {
    search() {
      this.$store.dispatch("search", this.query);
      this.query = "";
    }
  },
  computed: {
    log() {
      return this.$store.state.activeLog;
    },
    results() {
      return this.$store.state.results.foods;
    }
  }
};
</script>

<style>
</style>