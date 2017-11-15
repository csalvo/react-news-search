import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  //searches for articles
  searchArticles: function(searchTerm) {
    return axios.get("")
  }

};
