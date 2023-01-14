import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import data from "./utils/data";
import "./App.css";

function App() {
  return (
    <>
      <Header title="Galería de Imágenes con React" />
      <Container fluid>
        <Row>
          {data.map(item => (
            <Col key={item.id} sm="6" lg="4" xl="3" xxl="2">
              <MyCard title={item.title} description={item.description} src={item.src} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default App;
