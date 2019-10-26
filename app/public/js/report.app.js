var reportApp = new Vue({
  el: '#reportApp',
  data: {
    members: [],
    membercert: {},
    certs:{}
  },
  methods: {
    fetchCerts() {
      fetch('api/report/index.php')
      .then(response => response.json())
      .then(json => { reportApp.certs = json });
    },
    fetchMemberCerts() {
      fetch('api/report/indexPersonCert.php')
      .then(response => response.json())
      .then(json => { reportApp.membercert = json });
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
    this.fetchCerts();
    this.handleReset();
    this.fetchMemberCerts();
  }
});
