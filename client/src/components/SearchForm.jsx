import React from 'react';
import { Container, Row, Col, Input, Button } from 'reactstrap';

export default class WeighingPage extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      keyword: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }
  
  handleChange(e) {
    e.preventDefault();
    this.setState({
      keyword: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { keyword } = this.state;
    this.props.onFormSubmit(keyword);
  }

  render() {
    const { keyword } = this.state;

    return (
      <Container style={{ padding: 10}}>
        <Row>
          <Col>
            <Input type="text" value={keyword} onChange={this.handleChange}/>
          </Col>
          <Col>
            <Button color="primary" onClick={this.handleSubmit}>Search </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}