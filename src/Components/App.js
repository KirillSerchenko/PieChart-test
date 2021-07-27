import React, {Component} from 'react';
import {Row, Col, Button, Container, Spinner} from 'react-bootstrap';
import PieChart from './Chart';
import IlsDataView from '../Views/Ils';
import CoinsApi from '../Api/CoingeckoApi'

export default class App extends Component {

  state = {
    isShowChart: false,
    disabled: false,
    ils: {}
  }

  toogleChart = (event) => {
    event && event.type === 'click' &&
      CoinsApi.getIlsInfo().then(data => this.setState(()=>({ils: data, disabled: true})));  
    this.setState((prevState) => ({ isShowChart: !prevState.isShowChart, disabled: false }))
  }
  
  render() {
    const { isShowChart, ils, disabled } = this.state;
    return (
      <Container>
        <Row>
          <Col md="4">
            <Button variant="primary" disabled={disabled} onClick={this.toogleChart}>Show Chart</Button>
          </Col>
          <Col md="4">
          {isShowChart ? <PieChart toogleChart={this.toogleChart} /> : <Spinner animation="grow" variant="warning"/>}
          </Col>
          <Col md="4">
            <IlsDataView data={ils} />
          </Col>
        </Row>
      </Container>
  );  
  }
}
