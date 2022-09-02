const URL = "http://localhost:3000/api/v1/payments/pay";
export default {
  async checkOut(context, data) {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      throw new Error("please Login or create an account");
    }
    const token = user.token;

    const response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: `Bearer ${token}`,
      },
    });

    if (response.ok === false) {
      throw new Error("something went wrong with your payment");
    }
    const link = await response.json();
    context.commit("setLink", link);
  },

  addItemToCart(context, payload) {
    const item = {
      name: payload.name,
      id: payload.id,
      imgUrl: payload.imgUrl,
      desc: payload.desc,
      price: payload.price,
      quantity: 1,
    };

    if (!JSON.parse(localStorage.getItem("cart"))) {
      const items = [];
      localStorage.setItem("cart", JSON.stringify(items));
    }

    const cart = JSON.parse(localStorage.getItem("cart"));

    const alreadyExsit = cart.find((item) => item.id === payload.id);

    if (alreadyExsit) return;
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    context.commit("addItemToCart", cart);
    context.commit("setCartLength", cart.length);
  },

  retriveCartInfo(context) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) return;
    context.commit("setCartLength", cart.length);
  },
  reintializeCart(context) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    context.commit("addItemToCart", cart);
  },
  setCartTotal(context) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (cart.length === 0) {
      context.commit("setCartTotal", null);
      return;
    }
    const total = cart
      .map((item) => {
        const sum = item.quantity * item.price;
        return sum;
      })
      .reduce((total, amount) => total + amount);

    context.commit("setCartTotal", total);
  },
};
