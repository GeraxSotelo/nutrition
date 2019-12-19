<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-6 mx-auto">
        <form @submit.prevent="createLog">
          <div class="form-group">
            <label>Log Date</label>
            <input type="date" v-model="newLog.date" class="form-control" />
          </div>
          <button class="btn btn-success">Submit Log</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul>
          <li v-for="log in logs" :key="log._id">
            <router-link :to="{name: 'log', params: {id: log._id}}">
              <div class="card">
                <h5 class="card-header">{{log.date}}</h5>
                <div class="card-body">
                  <h5 class="card-title">Details...</h5>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getAllLogs");
  },
  data() {
    return {
      newLog: {
        date: "",
        food: []
      }
    };
  },
  methods: {
    createLog() {
      let log = { ...this.newLog };
      debugger;
      this.$store.dispatch("createLog", log);
      this.newLog = {
        date: "",
        food: []
      };
    }
  },
  computed: {
    logs() {
      return this.$store.state.logs;
    }
  },
  components: {}
};
</script>
