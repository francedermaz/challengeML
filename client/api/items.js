import axios from "axios";

async function searchHandler(searchTerm) {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/items?q=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: "Error fetching search results" };
  }
}

async function getItemDetails(id) {
  try {
    const response = await axios.get(
      `http://localhost:3001/api/items/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return { message: "Error fetching item details" };
  }
}

module.exports = {
  searchHandler,
  getItemDetails
}