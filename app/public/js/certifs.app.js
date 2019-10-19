var certifsApp = new Vue({
  el: '#certifsApp',
  data: {
    certifs: [],
    newcertifs: {},
    deletecertifs:{}
  },
  methods: {
    fetchCertifs() {
      fetch('api/certifs/index.php')
      .then(response => response.json())
      .then(json => { certifsApp.certifs = json });
    },
    handleDelete(event){
      fetch('api/certifs/postDelete.php',{
        method: 'POST',
        body: JSON.stringify(this.deletecertifs),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }

      })
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
      .then( json => { certifsApp.certifs.push(this.newcertifs) })
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
