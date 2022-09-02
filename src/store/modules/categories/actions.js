const url = "http://localhost:3000/api/v1/products";

export default {
  async getProductCategory(context, query) {
    const response = await fetch(`${url}?query=${query}`);
    if (response.ok === false) {
      throw new Error("something went wrong");
    }
    const { products } = await response.json();

    context.commit("setProduct", products);
  },
};
