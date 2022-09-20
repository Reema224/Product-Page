import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import prod1 from '../images/product1.PNG';
import prod2 from '../images/product2.PNG';
import Button from 'react-bootstrap/Button';
import Typewriter from "typewriter-effect";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../images/rocket-logo.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import img2 from '../images/responsive-design.jpg';
import img3 from '../images/easy-to-customize.jpg';
import img4 from '../images/multi-purpose-websites.jpg';
import cart from '../images/cart.png';
import Menu from '../components/Navbar';
import divider from '../images/divider5.png';
import phone from '../images/IPhone-7.jpg';
import paint from '../images/paint.png';
import page from '../images/page.png';
import like from '../images/like.png';
import {useState} from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Products(){
  const [open,setOpen]=useState(false);
  function handleClick(){
    setOpen(curr=>!curr);
  }
    return(
        <div fluid className="home">
  
      <Container fluid className="top">

      </Container>
      {open && (
  <Menu/>
  
)}
       <Container className="logo">
        <Image src={img1}/>
       </Container>
       <Container className="title" >
        
       <a href="#products"> <Image src={cart}/> </a>
      
       <Container className="part1">
       
        <h1 style={{color:"#293A4B"}}>Resume Builder</h1>
        <p style={{color:"gray",letterSpacing:".14rem",fontWeight:"bold"}}>TEMPLATES, EXTENSIONS & MORE</p>

       </Container>
       <h3 onClick={handleClick} style={{cursor:"pointer",color:"#293A4B",borderTop:"2px solid #293A4B",borderBottom:"2px solid #293A4B",width:"90px"}}>MENU</h3>
       </Container>
   
   <Carousel  style={{width:"100%",marginTop:"50px",borderTop:"10px solid #293A4B"}} className="slide" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
        <Carousel.Caption style={{position:"absolute",left:"60%",top:"50%",width:"100%",transform: "translate(-50%, -50%)"}}>
          <h3 class="animate__animated animate__bounceInDown" style={{color:"#F68B21",backgroundColor:"white",fontWeight:"normal",maxWidth:"300px"}}>RESPONSIVE DESIGN</h3>
          <p class="animate__animated animate__backInLeft" style={{color:"white",backgroundColor:"#293A4B",fontWeight:"normal",maxWidth:"550px"}}>ALL OF OUR TEMPLATES ARE DESIGNED TO LOOK GOOD ON ANY DEVICE</p>
        </Carousel.Caption>
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Second slide"
        />
          <Carousel.Caption style={{position:"absolute",left:"60%",top:"50%",width:"100%",transform: "translate(-50%, -50%)"}}>
          <h3 className="txt" class="animate__animated animate__backInLeft" style={{color:"#F68B21",backgroundColor:"white",fontWeight:"normal",maxWidth:"500px"}}>FULLY CUSTOMIZEABLE WITH WB</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
   <Container>
   <AnimationOnScroll animateIn='animate__flipInX'>
    <h2 style={{color:"#F68B21",marginTop:"80px",letterSpacing:".14rem"}} >WHAT'S NEW?</h2>
    </AnimationOnScroll>
     <AnimationOnScroll animateIn="animate__backInRight">
    <p style={{color:"gray",letterSpacing:".14rem"}}>CHECK OUT OUR MOST RECENT CREATIONS</p>
    </AnimationOnScroll>
    <hr style={{color:"gray",marginTop:"50px"}}></hr>
   </Container>
   <Container>
   <AnimationOnScroll animateIn="animate__lightSpeedInRight">
    <h2 style={{color:"#293A4B",letterSpacing:".14rem",marginTop:"80px",fontWeight:"normal"}}>FEATURED TEMPLATES</h2>
    </AnimationOnScroll>
   </Container>
   <Container id="products">
   <Row xs={1} md={2} className="g-4">
     
        <Col>
       
        <AnimationOnScroll animateIn='animate__fadeInTopLeft'>
          <Card style={{marginTop:"50px",height:"340px"}} className="card1">
            <Card.Img variant="top" src={prod1} />
            <Card.Body>
              <Card.Title>Graphic Design</Card.Title>
              <Card.Text>
                75 USD
              </Card.Text>
              <Container style={{marginTop:"30px"}}>
              <Button  style={{backgroundColor:"#F68B21",letterSpacing:".14rem",color:"white",border:"none"}}>Add to Cart</Button>{' '}
              <Button style={{backgroundColor:"#418fe0",letterSpacing:".14rem",color:"white",border:"none"}}>Live Preview</Button>{' '}
              </Container>
            </Card.Body>
          </Card>
          </AnimationOnScroll>
        </Col>
        <Col>
        <AnimationOnScroll animateIn='animate__fadeInTopRight'>
          <Card style={{marginTop:"50px",height:"340px"}} className="card1">
            <Card.Img variant="top" src={prod2} />
            <Card.Body>
              <Card.Title>Web Developer</Card.Title>
              <Card.Text>
                100 USD
              </Card.Text>
              
              <Button  style={{backgroundColor:"#F68B21",letterSpacing:".14rem",color:"white",border:"none"}}>Add to Cart</Button>{' '}
              <Button style={{backgroundColor:"#418fe0",letterSpacing:".14rem",color:"white",border:"none"}}>Live Preview</Button>{' '}
            </Card.Body>
          </Card>
          </AnimationOnScroll>
        </Col>
    </Row>
   </Container>
   <Container style={{marginTop:"100px"}}>
   <Container>
<Image src={divider} style={{marginTop:"150px",marginBottom:"70px"}}/>
<AnimationOnScroll animateIn="animate__rollIn">
<h2 style={{color:"#418fe0"}}>WHY CHOOSE US?</h2>
</AnimationOnScroll>
<AnimationOnScroll animateIn="animate__rubberBand">
<p style={{color:"gray",letterSpacing:".14rem",marginTop:"50px"}}>WE CREATE EASY-TO-USE, HIGH QUALITY RESUMES</p>
</AnimationOnScroll>
   </Container>
   <Container style={{marginTop:"150px",textAlign:"justify",textJustify:"inter-word"}}>
   <Row xs={1} md={2} >
    <Col>
    <AnimationOnScroll animateIn="animate__backInLeft">
    <Image src={phone}/>
    </AnimationOnScroll>
    </Col>
  
    <Col >
    <AnimationOnScroll animateIn="animate__backInDown">
    <h5 style={{color:"#418fe0"}}><Image src={paint} style={{marginRight:"5px"}}/>EASY TO CUSTOMIZE</h5>
    <p style={{color:"gray",letterSpacing:".14rem",marginTop:"30px",marginBottom:"50px"}}>All of our templates are easy to customize and make changes to fit your website.</p>
    </AnimationOnScroll>
    
    <AnimationOnScroll animateIn="animate__backInLeft">
<h5 style={{color:"#418fe0"}}><Image src={page} style={{marginRight:"5px"}}/>MULTIPAGE & ONE PAGE TEMPLATES</h5>
<p style={{color:"gray",letterSpacing:".14rem",marginTop:"30px",marginBottom:"50px"}}>We offer both Multipage and One Page website templates. In both cases, these are full websites!</p>

</AnimationOnScroll>
<AnimationOnScroll animateIn="animate__backInRight">
<h5 style={{color:"#418fe0"}}><Image src={like} style={{marginRight:"5px"}}/>
100% TESTED</h5>
<p style={{color:"gray",letterSpacing:".14rem",marginTop:"30px",marginBottom:"50px"}}>All of our templates are extensively tested to function and look consistent on different size devices.</p>
</AnimationOnScroll>
</Col>
   </Row>
   </Container>
  
   <Image src={divider} style={{marginTop:"200px"}}/>
   </Container>
   <Container fluid id="contact">
   <AnimationOnScroll animateIn="animate__bounceIn">
<h2 style={{color:"#418fe0",marginTop:"70px"}}>CONTACT US </h2>
</AnimationOnScroll>
<Form  className="form">
<Form.Group className='mb-3'>
         
          <Form.Control type="text" 
                        placeholder="Name" />
        </Form.Group>
        <Form.Group className='mb-3'>
         
          <Form.Control type="email" 
                        placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" rows={3}  placeholder="Message" />
      </Form.Group>
      <Button  type="submit" className="submit">
        Submit
      </Button>
     
      </Form>
      <p>Resume Builder © 2022 | All Rights Reserved </p>
  </Container>
   
      </div>
        
    )

}