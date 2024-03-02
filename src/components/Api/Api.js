import axios from "axios";

const BASE_URL = "https://656b9056dac3630cf7283941.mockapi.io/drugs";

export async function fetchDrugs() {
  try {
    const { data } = await axios.get(`${BASE_URL}`);
       return data;
  } catch (error) {
    return error.message;
  }
}
