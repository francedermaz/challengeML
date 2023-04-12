import axios from "axios";

async function searchHandler(searchTerm) {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}items?q=${searchTerm}`
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
      `${process.env.NEXT_PUBLIC_API_URL}items/${id}`
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