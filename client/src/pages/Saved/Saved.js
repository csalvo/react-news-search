import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input, TextArea, FormBtn} from "../../components/Form";
import API from "../../utils/API.js"

class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  }

  // Add code here to get all books from the database and save them to this.state.books
  getBooks = query => {
    API.getBooks(query)
      .then(res => this.setState({books: res.data}))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {

    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.saveBook(this.state)
      .then(console.log(this.state))
      .catch(err => console.log(err));
    this.getBooks();
  };

  deleteBook = book => {
    API.deleteBook(book)
      .then(console.log("success"))
      .catch(err => console.log(err));
    this.getBooks();
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            {/*<form>*/}
              {/*<Input*/}
                {/*name="title"*/}
                {/*placeholder="Title (required)"*/}
                {/*onChange={this.handleInputChange}*/}
                {/*value={this.state.title}*/}
                {/*type="text"/>*/}
              {/*<Input*/}
                {/*name="author"*/}
                {/*placeholder="Author (required)"*/}
                {/*onChange={this.handleInputChange}*/}
                {/*value={this.state.author}*/}
                {/*type="text"/>*/}
              {/*<TextArea*/}
                {/*name="synopsis"*/}
                {/*placeholder="Synopsis (Optional)"*/}
                {/*onChange={this.handleInputChange}*/}
                {/*value={this.state.synopsis}*/}
                {/*type="text"/>*/}
              {/*<FormBtn onClick={this.handleFormSubmit}>Submit Book</FormBtn>*/}
            {/*</form>*/}
          {/*</Col>*/}
          {/*<Col size="md-6">*/}
            {/*<Jumbotron>*/}
              {/*<h1>Books On My List</h1>*/}
            {/*</Jumbotron>*/}
            {/*{this.state.books.length ? (*/}
              {/*<List>*/}
                {/*{this.state.books.map(book => (*/}
                  {/*<ListItem key={book._id}>*/}
                    {/*<a href={"/books/" + book._id}>*/}
                      {/*<strong>*/}
                        {/*{book.title} by {book.author}*/}
                      {/*</strong>*/}
                    {/*</a>*/}
                    {/*<DeleteBtn onClick={()=>this.deleteBook(book._id)}/>*/}
                  {/*</ListItem>*/}
                {/*))}*/}
              {/*</List>*/}
            {/*) : (*/}
              {/*<h3>No Results to Display</h3>*/}
            {/*)}*/}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
