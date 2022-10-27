import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { Container, Row, Col } from "reactstrap";
import Weighings from './pages/Weighings';

function App() {
  return (
    <div className="App" align="center" style={{
      display: "block",
      width: 900,
      padding: 30
    }}>
      <h4>Weighing Data</h4>
      <Container>
        <Row>
          <Col>
            <Weighings />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
