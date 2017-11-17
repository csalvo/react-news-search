import React, {Component} from "react";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListHeading, ListItem} from "../../components/List";
import API from "../../utils/API.js"
import {ListGroup} from "../../components/List/ListGroup";
import {SaveBtn, ViewBtn} from "../../components/Buttons/";


class Saved extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: [],
  };

  componentDidMount() {
    this.getArticles();
  };

  getArticles = () => {
    API.getArticles()
      .then(res => this.setState({articles: res.data}))
      .catch(err => console.log(err));
  };


  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => console.log(res.data));
    this.getArticles();
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-2"/>
          <Col size="md-8">
            <Jumbotron>
              <h1><i className="fa fa-newspaper-o" aria-hidden="true"></i></h1>
              <h2>New York Times Search</h2>
              <p>Search for and save articles from the NYT!</p>
            </Jumbotron>
            <List>
              <ListHeading>
                Saved Articles
              </ListHeading>
              {this.state.articles.length ? (
                <ListGroup>
                  {this.state.articles.map(articles => (
                    <ListItem key={articles.url}>
                      <SaveBtn onClick={() => this.deleteArticle(articles._id)}><i className="fa fa-trash-o" aria-hidden="true"></i> Delete</SaveBtn>
                      <ViewBtn link={articles.url}><i className="fa fa-eye" aria-hidden="true"></i> View</ViewBtn>
                      <h3>
                        {articles.title}
                      </h3>
                      <p>Published on: {articles.date}</p>
                    </ListItem>
                  ))}
                </ListGroup>
              ) : (
                <h4 style={{marginLeft: "15px"}}>{this.state.message}
                </h4>)}
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
