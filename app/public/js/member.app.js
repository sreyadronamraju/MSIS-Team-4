var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/members/')
      .then(response => response.json())
      .then(json => { waitingApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
