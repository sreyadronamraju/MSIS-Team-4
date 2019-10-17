var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: []
  },
  methods: {
    fetchMembers() {
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => { memberApp.members = json })
    }
  },
  created() {
    this.fetchMembers();
  }
});
