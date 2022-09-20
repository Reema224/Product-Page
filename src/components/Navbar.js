import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Menu(){
    return(
        <>
         <Navbar style={{backgroundColor:"#293A4B",width:"100%"}}>
      <Container fluid >
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav style={{letterSpacing:".14rem",fontWeight:"bold",display:"block"}} className='m-auto'>
            <Nav.Link href=".home" style={{color:"#F68B21",letterSpacing:".14rem"}}>HOME</Nav.Link>
      
            <Nav.Link href="#products" style={{color:"#F68B21",letterSpacing:".14rem"}}>PRODUCTS</Nav.Link>
            <Nav.Link href="#contact" style={{color:"#F68B21",marginBottom:"50px",letterSpacing:".14rem"}}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
      <Container fluid className="bottom">

</Container>
      </Container>
    </Navbar>
        </>

    )
}