const urlLogin = "http://localhost:3000/api/v1/users/login";
const urlRegister = "http://localhost:3000/api/v1/users/register";
export default {
  async loginUser(context, data) {
    const response = await fetch(urlLogin, {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok === false) {
      throw new Error(
        "sorry!!! you may have entered an incorrect email or password and if you dont have an account sign up first"
      );
    }
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
  },
  async registerUser(context, data) {
    const response = await fetch(urlRegister, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok === false) {
      throw new Error("sorry something went wrong");
    }
    const user = await response.json();
    localStorage.setItem("user", JSON.stringify(user));
  },
};
