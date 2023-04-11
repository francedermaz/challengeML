const { default: axios } = require("axios");

const { API_BASE_URL } = process.env;

async function getSearchResult(query) {
  const response = await axios.get(
    `${API_BASE_URL}sites/MLA/search?q=${query}`
  );
  const categories = response.data.filters
    .flatMap((category) => category.values.map((val) => val.name))
    .filter((category, index, arr) => arr.indexOf(category) === index);

  return {
    author: {
      name: "",
      lastname: "",
    },
    categories: categories,
    items: response.data.results.map((item) => {
      const amountString = item.price.toString();
      const decimalIndex = amountString.indexOf(".");
      const decimals =
        decimalIndex === -1
          ? 0
          : amountString.substring(decimalIndex + 1).length;

      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: decimals,
        },
        picture: item.thumbnail,
        condition: item.condition,
        location: item.address.state_name,
        free_shipping: item.shipping.free_shipping,
      };
    }),
  };
}

async function getItemById(id) {
  const [itemResponse, descriptionResponse] = await Promise.all([
    axios.get(`${API_BASE_URL}items/${id}`),
    axios.get(`${API_BASE_URL}items/${id}/description`),
  ]);

  return {
    author: {
      name: "",
      lastname: "",
    },
    item: {
      id: itemResponse.data.id,
      title: itemResponse.data.title,
      price: {
        currency: itemResponse.data.currency_id,
        amount: itemResponse.data.price,
        decimals: itemResponse.data.price.toString().split(".")[1]?.length || 0,
      },
      picture: itemResponse.data.pictures[0]?.url || "",
      condition: itemResponse.data.condition,
      free_shipping: itemResponse.data.shipping.free_shipping,
      sold_quantity: itemResponse.data.sold_quantity,
      description: descriptionResponse.data.plain_text,
    },
  };
}

module.exports = {
  getSearchResult,
  getItemById,
};
