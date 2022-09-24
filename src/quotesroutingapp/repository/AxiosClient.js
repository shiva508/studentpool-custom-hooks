import axios from "axios";

const AxiosClient = axios.create({
  baseURL: `https://tasks-a49eb-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default AxiosClient;
