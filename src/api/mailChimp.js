import axios from "axios";

export default async function contact(email, firstname, lastname) {
  console.log(email, firstname, lastname);
  const request = await axios
    .post("http://localhost:9000/mailchimp/", {
      params: { email: email, firstname: firstname, lastname: lastname },
    })
    .then((res) => {
      console.log(res);
    });
}
