import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';



function App() {
  return (

    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        
        <h3>Mon premier application avec React</h3>

          <div className="d-flex">
            <Card style={{ width: '18rem', marginRight: '10px' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/image1.jfif'} />
              <Card.Body>
                <Card.Title>Belle cité</Card.Title>
                <Card.Text>
                  Tout ceci réprésente un magnique paysage d'une cité
                  nous aimerons tant visité!  
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem', marginRight: '10px' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/image2.jfif'} />
              <Card.Body>
                <Card.Title>L'hiver</Card.Title>
                <Card.Text>
                  L'hiver est une saison de combat qui nous apprend à bien
                  charbonner malgré la fraicheur!
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/image3.jfif'} />
              <Card.Body>
                <Card.Title>La montagne et la mer</Card.Title>
                <Card.Text>
                  La montagne et la mer répresntent tout ce que le monde 
                  a de plus solide, de plus géant, et donc nous donnes 
                  la fois à encroire à des grands choses! 
                </Card.Text>
              </Card.Body>
            </Card>
        </div>
      </Container>
    </div>
  );
}

export default App;
