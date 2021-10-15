import axios from "axios";
// Create instance called instance
const instance = axios.create({
  baseURL: "https://bbdevapi.oje.guru/",
  headers: {
    "content-type": "application/octet-stream",
  },
});
export default {
  getSeasonsData: () =>
    instance({
      method: "GET",
      url: "/seasons/",
      // params: {
      //   query: "query",
      // },
    }),

  getEpisodesData: () =>
    instance({
      method: "GET",
      url: "/episodes/",
    }),

  getActorsData: () =>
    instance({
      method: "GET",
      url: "/actors/chars/",
    }),
};
