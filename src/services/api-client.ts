import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io",
  params: {
    key: "9969a007784f446086a25f248468dd02",
  },
});
