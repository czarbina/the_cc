import axios from "axios";

export default {
  saveBio: function(userData) {
    return axios.post("/bio/createProfile", userData);
  },
  getArtists: function() {
  	return axios.get("/bio/artists");
  },
  searchArtists: function() {
    return axios.get("/bio/search");
  }
};
