let mailList = [];

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      mailList = response.data.response;
      console.log(mailList);
    });
}
