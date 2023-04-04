import axios from "axios";

export default async function searchHandler(searchTerm) {
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
