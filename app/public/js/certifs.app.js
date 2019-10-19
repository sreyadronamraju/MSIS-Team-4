var certifsApp = new Vue({
  el: '#certifsApp',
  data: {
    members: [],
    newmember: {}
  },
  methods: {
    fetchMembers() {
      fetch('api/certifs/index.php')
      .then(response => response.json())
      .then(json => { certifsApp.certifs = json });
    },

    handleSubmit(event) {
      fetch('api/certifs/post.php', {
        method:'POST',
        body: JSON.stringify(this.newcertifs),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { memberApp.certifs.push(this.newcertifs) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });
      this.fetchCertifs();
      this.handleReset();
  },
    handleReset() {
      this.newcertifs = {
        certfName: '',
        certAgency: '',
        expPeriod: '',
      }
    }
  },
  created() {
    this.handleReset();
    this.fetchCertifs();
  }
});
