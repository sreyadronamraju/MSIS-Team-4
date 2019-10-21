var assigningApp = new Vue({
    el: '#assigningApp',
    data: {
      personCert: {}
    },
    methods: {
      handleSubmit() {
        fetch('api/waiting/post.php', {
          method:'POST',
          body: JSON.stringify(this.personCert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then(response => response.json())
        .then(json => { memberApp.members = json })
  
        this.handleReset();
      },
      handleReset() {
        this.personCert = {
            personID='',
            certID='',
            certDate=''
        }
      }
    },
    created() {
      this.handleReset();
    }
  });
  