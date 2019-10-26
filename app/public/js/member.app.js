var memberApp = new Vue({
  el: '#memberApp',
  data: {
    members: [],
    newmember: {},
    deletemembers: {},
    editmembers: {}
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
      })
      this.fetchMembers();
      this.handleReset();
  },

  handleEdit(event){
    fetch('api/members/postEdit.php',{
      method: 'POST',
      body: JSON.stringify(this.editmembers),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    this.fetchMembers();
    this.handleReset();
  },

  handleDelete(event){
    fetch('api/members/postDelete.php',{
      method: 'POST',
      body: JSON.stringify(this.deletemembers),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })
    this.fetchMembers();
    this.handleReset();
  },
  
  handleRowClick(editmembers) {
    memberApp.editmembers = editmembers;
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
