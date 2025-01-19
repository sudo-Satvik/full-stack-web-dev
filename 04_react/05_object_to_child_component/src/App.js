import './App.css';
import CardTable from './components/CardTable';
import { Container, Row } from 'react-bootstrap';
import products from './data/productData';
function App() {
  
  
    return (
      <div className="container text-center">
        <h1>How to Pass Object to Child Component</h1>
        <Container style={{marginTop: "40px"}}>
          <Row className="g-4"> {/* Added Bootstrap's gap class */}
            {
              products.map((val, idx) => {
                return(
                  <CardTable products={ val } key={ idx }/>
                )
              })
            }
          </Row>
        </Container>
      </div>
    );
}

export default App;
