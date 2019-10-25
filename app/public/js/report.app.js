
var memberApp = new Vue({
  el: '#reportCert',
  data: {
    members: [],
    newmember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/members/index.php')
      .then(response => response.json())
      .then(json => { memberApp.members = json });
    },

    handleSubmit(event) {
      fetch('api/members/post.php', {
        method:'POST',
        body: JSON.stringify(this.newmember),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { memberApp.members.push(this.newmember) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.fetchMembers();
      this.handleReset();
  },
    handleReset() {
      this.newmember = {
        firstName: '',
        lastName: '',
        sexAtBirth: '',
        dob: '',
        phoneNumber: '',
        email: '',
        dateHired: '',
        position: '',
        isActive: '',
        radioNumber: '',
        stationNumber: ''
      }
    }
  },
  created() {
    this.handleReset();
    this.fetchMembers();
  }
});
