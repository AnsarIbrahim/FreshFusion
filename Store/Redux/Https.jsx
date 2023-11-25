import axios from "axios";
import BaseURL from "../BaseURL";

const storeProducts = async () => {
  const response = await axios.get(BaseURL);
  return response.data;
};

const storeProductsDetails = async (id) => {
  const response = await axios.get(`${BaseURL}/${id}`);
  return response.data;
};

export default { storeProducts, storeProductsDetails };
