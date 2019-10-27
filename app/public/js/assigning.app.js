var assigningApp = new Vue({
    el: '#assigningApp',
    data: {
      members: [],
      certifs: [],
      pcerts: [],
      personCert: {},
      editPersonCert: {},
      deletePersonCert: {},
      filter: {
        pc: '',
        cp: ''
      }
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
        .then(json => { assigningApp.pcerts = json });
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
        .then( json => { assigningApp.pcerts.push(this.personCert) })
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
        this.fetchMembers();
        this.fetchCertifs();
        this.fetchPersonCertifs();
        this.handleReset();
    },

    handleEdit(event) {
      fetch('api/assigning/postEdit.php', {
        method:'POST',
        body: JSON.stringify(this.editPersonCert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      // this.fetchMembers();
      // this.fetchCertifs();
      // this.fetchPersonCertifs();
      // this.handleReset();
  },

  handleDelete(event){
    fetch('api/assigning/postDelete.php',{
      method: 'POST',
      body: JSON.stringify(this.deletePersonCert),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
     this.fetchPersonCertifs();
     this.handleReset();
  },
  
      handleReset() {
        this.personCert = {
            personID:'',
            certID:'',
            certDate:'',
            renewDate:''
        }
      }
    },

    created() {
      this.handleReset();
      this.fetchMembers();
      this.fetchCertifs();
      this.fetchPersonCertifs();
    }
  });
  