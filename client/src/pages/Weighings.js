import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import api from '../http-common'
import WeighingList from "../components/WeighingList";
import WeighingPage from "../components/Pagination";
import SearchForm from "../components/SearchForm";

class Weighings extends Component {
  constructor() {
    super();

    this.state = {
      pageSize: 10,
      page: 0,
      data: [],
      count: 0,
      keyword: ''
    }

    this.getWeighings.bind(this);
    this.onPageChange.bind(this);
    this.onFormSubmit.bind(this);
  }

  componentDidMount() {
    const { page, keyword } = this.state;
    this.getWeighings(page, keyword)
  }

  getWeighings(page, keyword) {
    const { pageSize } = this.state;
    const offset = page * pageSize; 
    const limit = pageSize || 10;
    const params = { offset, limit, keyword }; 

    api.get('/weighings', { params })
      .then(({ data }) => {
        this.setState({ 
          count: data.count,
          data: data.data,
          page,
          keyword,
        });
      })
      .catch(err => console.log(err))
  }

  onPageChange(page) {
    const { keyword } = this.state
    this.getWeighings(page, keyword)
  }

  onFormSubmit(keyword) {
    const { page } = this.state
    this.getWeighings(page, keyword)
  }

  render() {
    const { count, data, pageSize, page, keyword } = this.state;
    
    return (
      <Container>
        <Row>
          <Col>
            <SearchForm 
              keyword={keyword}
              onFormSubmit={this.onFormSubmit.bind(this)}/>
            </Col>
        </Row>
        <Row>
          <Col>
            <WeighingPage 
              pageSize={pageSize}
              count={count}
              onPageChange={this.onPageChange.bind(this)}
              currentPage={page}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <WeighingList data={data}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Weighings;
