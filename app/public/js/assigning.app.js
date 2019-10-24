var assigningApp = new Vue({
    el: '#assigningApp',
    data: {
      members: [],
      certifs: [],
      pCert: [],
      personCert: {}
    },
    methods: {

      fetchMembers() {
        fetch('api/members/index.php')
        .then(response => response.json())
        .then(json => { assigningApp.members = json });
      },

      fetchCertifs() {
        fetch('api/certifs/index.php')
        .then(response => response.json())
        .then(json => { assigningApp.certifs = json });
      },

      fetchPersonCertifs() {
        fetch('api/assigning/index.php')
        .then(response => response.json())
        .then(json => { assigningApp.pCert = json });
      },

      
      handleSubmit(event) {
        fetch('api/assigning/post.php', {
          method:'POST',
          body: JSON.stringify(this.personCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { assigningApp.pCert.push(this.personCert) })
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
        this.fetchMembers();
        this.fetchCertifs();
        this.fetchPersonCertifs();
        this.handleReset();
    },
  
      handleReset() {
        this.personCert = {
            personID:'',
            certID:'',
            certDate:''
        }
      }
    },

    handleRowClick(member) {
      assignApp.member = member;
    },

    created() {
      this.handleReset();
      this.fetchMembers();
      this.fetchCertifs();
      this.fetchPersonCertifs();
    }
  });
  