import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";
import API from "../../utils/API.js"

class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    title: "",
    date: "",
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
    API.searchArticles(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res => console.log(res));

  };

  saveArticle = article => {

  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"/>
          <Col size="md-6">
            <Jumbotron>
              <h1>New York Times Search</h1>
              <p>Search for and save articles from the NYT!</p>
            </Jumbotron>
            <form>
              <Input
                name="topic"
                placeholder="Topic"
                onChange={this.handleInputChange}
                value={this.state.topic}
                type="text"/>
              <Input
                name="startDate"
                placeholder="Start Year"
                onChange={this.handleInputChange}
                value={this.state.startDate}
                type="text"/>
              <Input
                name="endDate"
                placeholder="End Year"
                onChange={this.handleInputChange}
                value={this.state.endDate}
                type="text"/>
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
