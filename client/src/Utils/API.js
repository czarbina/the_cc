import axios from "axios";

export default {
  // Saves a book to the database
  saveBio: function(userData) {
    return axios.post("/bio/createProfile", userData);
  }
};
