import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {Input, FormBtn} from "../../components/Form";
import {List, ListHeading, ListItem} from "../../components/List";
import API from "../../utils/API.js"
import {ListGroup} from "../../components/List/ListGroup";
import {SaveBtn, ViewBtn} from "../../components/Buttons/";


class Search extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
    topic: "",
    startDate: "",
    endDate: "",
    message: "",
    search: false
  };

  componentDidMount(){
    this.setStatusMessage();
  };

  setStatusMessage = () => {
    if (!this.state.search) {
      this.setState({message: "Enter a search to begin!"})
    } else if (!this.state.articles.length){
      this.setState({message: "No results, try a different search", topic: "", startDate: "", endDate: ""})
    }
  }

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
      .then(res =>
        this.setState({articles: res.data.response.docs, search: true})
      )
      .catch(err => console.log(err));
    this.setStatusMessage();
  };

  saveArticle = article => {
    API.saveArticle({
      title: article.headline.main,
      datePublished: article.pub_date,
      url: article.web_url
    }).then(res => console.log(res.data));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"/>
          <Col size="md-8">
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
            <List>
              <ListHeading>
                Search Results
              </ListHeading>
              {this.state.search && this.state.articles.length ? (
                <ListGroup>
                  {this.state.articles.map(articles => (
                    <ListItem key={articles.web_url}>
                      <SaveBtn onClick={() => this.saveArticle(articles)}>Save</SaveBtn>
                      <ViewBtn link={articles.web_url}>View</ViewBtn>
                      <h3>
                        {articles.headline.main}
                      </h3>
                      <p>Published on: {articles.pub_date}</p>
                    </ListItem>
                  ))}
                  </ListGroup>
                ) : (
                  <h3>{this.state.message}
                  </h3>)}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
