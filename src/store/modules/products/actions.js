const url = "http://localhost:3000/api/v1/products";

const dataFomatter = function (object) {
  return {
    id: object._id,
    name: object.name,
    price: object.price,
    numProduct: object.numberOfProduct,
    imgUrl: object.productImgUrl,
    desc: object.productDescription,
  };
};
export default {
  async getProducts(context) {
    try {
      const response = await fetch(url);

      const result = await response.json();
      const products = result.products.map((prod) => {
        return dataFomatter(prod);
      });
      context.commit("getProducts", products);
    } catch (error) {
      throw new Error("please check your internet connection");
    }
  },

  async querySearch(context, query) {
    const response = await fetch(`${url}?query=${query}`);
    if (!response.ok) {
      throw new Error("sorry we could not find the product you searched for");
    }

    const result = await response.json();

    const products = result.products.map((prod) => {
      return dataFomatter(prod);
    });

    context.commit("displayQuerySerch", products);
  },

  async getSelectedProduct(context, payLoad) {
    try {
      const response = await fetch(`${url}/${payLoad}`);
      const result = await response.json();

      const product = dataFomatter(result.product);

      context.commit("setSelectedProduct", product);
    } catch (error) {
      throw new Error("please check your internet connection");
    }
  },
};
