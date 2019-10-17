var certifsApp = new Vue({
  el: '#certifsApp',
  data: {
    certifs: []
  },
  methods: {
    fetchCertifs() {
      fetch('api/certifs/')
      .then(response => response.json())
      .then(json => { certifsApp.certifs = json })
    },

  },
  created() {
    this.fetchCertifs();
  }
});
