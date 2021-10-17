import axios from "axios";

const apiurl = "https://bbdevapi.oje.guru";

export default {
  getSeasonsData() {
    return axios.get(apiurl + "/seasons/");
  },

  getSeasonEpisodesData(id) {
    return axios.get(apiurl + "/seasons/" + id + "/episodes/");
  },

  getEpisodesData() {
    return axios.get(apiurl + "/episodes/");
  },

  getActorsData() {
    return axios.get(apiurl + "/actors/");
  },

  getActorsCharsData() {
    return axios.get(apiurl + "/actors/characters/");
  },

  getCharactersData(query) {
    return axios.get(apiurl + "/character/names/?firstname=" + query);
  },
};
