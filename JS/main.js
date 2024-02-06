const { createApp } = Vue;

createApp({
  data() {
    return {
      mailList: [],
    };
  },
  methods: {
    getEmailsList() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((response) => {
            this.mailList.push(response.data.response);
            console.log(response.data.response);
          });
      }
    },
    created() {
      this.getEmailsList();
    },
  },
}).mount("#app");
