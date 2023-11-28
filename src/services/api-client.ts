import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c59f79e39715434daa817aa228203970",
  },
});
