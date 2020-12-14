import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//images
import background from '../images/background.jpg';
import webDesign from '../images/services1.svg';
import coding from '../images/services2.svg';
import seo from '../images/services3.svg';
import marketing from '../images/services4.svg';
import turacoon from '../images/turacoon.svg';
import createtolearn from '../images/createtolearn.svg';
import here from '../images/here.svg';
import motivation from '../images/motivation.png';
import besteditproof from '../images/besteditproof.png';
import wantYou from '../images/wantYou.svg';
import okulextra from '../images/okulextra.png';


//inline styles
const styles = {
  cardTop: {
    backgroundImage: `url(${background})`,
    backgroundSize : "cover",
    margin: "0px",
    borderTopRightRadius : "20px",
    borderTopLeftRadius : "20px",
    height: "300px"

  },
  card : {
    borderRadius : "20px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    marginBottom: "40px",
  },

  z_index : {
    zIndex : "30"
  }
};


//Styled Components

const StyledCardTop = styled(Row)`
  background-image: url(${background});
  background-size : cover;
  margin: 0px;
  border-top-right-radius : 20px;
  border-top-left-radius : 20px;
  height: 100px;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const CardCol = styled(Col)`
  margin-top: 25px;
  padding-left : 30px;
`;

const StyledH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  margin : auto;
`;

const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
  padding-left: 50px;
  margin-right:40px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fafafa;
  border-radius: 100px;
  margin: 0 auto;
  text-align: center;
  padding: 5px;
  padding-top: 15px;

`;

const ServiceCard = styled.div`
  margin-top : 1em;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  padding: 2em 1.5em;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 6px;
  margin-bottom : 2em;
  height: 250px;
  &:hover {
    background-color: #fff;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  }
`;

const ClientCard = styled.div`
  margin-top : 1em;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 50%;
  margin-bottom : 2em;
  height: 125px;
  &:hover {
    background-color: #fff;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  }
`;

const ClientImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10px;
`;

const StyledH4 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  margin-top : 1em;
  text-align: center;
`;

const StyledH3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top : 1em;
  text-align: center;
`;

const NonStyledA = styled.a`
  text-decoration: none;
  color:black;

  &:hover {
    text-decoration: none;
    color:gray;
  }
`;

const ContactItemKey = styled.span`
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  display: inline-block;
  min-width: 75px;
  text-align: left;
  margin-bottom : 16px;
`;

const ContactItemValue = styled.span`
  display: inline-block;
  color: #9e9e9e;
  text-align: left;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  min-width: 190px;
`;

const ContactItemIcon = styled.span`
  font-size: 15px;
  line-height: 1.6em;
  margin-right:10px;
  color: gray;
  border-radius: 24px;

  &:hover {
    color: pink;
  }
`;

const StyledA = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: rgb(255, 255, 255);
  color: rgb(158, 158, 158);
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 24px;
  margin: 0px 4px;
  padding-top: 7px;

  &:hover {
    color: pink;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 4px 9px 1px;
  }
`;

const animation = ["fadeIn","fadeInDown","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export class Service extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modal1: false,
          modal2: false,
          modal3: false,
          modal4: false,
          modal5: false,
          modal6: false
        };

        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
      }

      toggle1() {
        this.setState({
          modal1: !this.state.modal1
        });
      }

      toggle2() {
        this.setState({
          modal2: !this.state.modal2
        });
      }

      toggle3() {
        this.setState({
          modal3: !this.state.modal3
        });
      }

      toggle4() {
        this.setState({
          modal4: !this.state.modal4
        });
      }

      toggle5() {
        this.setState({
          modal5: !this.state.modal5
        });
      }

      toggle6() {
        this.setState({
          modal6: !this.state.modal6
        });
      }

  render() {
  return (
      <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Services</StyledH2>
            </StyledCardTop>
            <StyledCardTitle><span style={{ color:"gray" }}>My</span> <span>Services</span></StyledCardTitle>
            <Row style={{ paddingRight:"20px" }}>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard onClick={this.toggle1}>
                  <ImageContainer>
                    <img src={ webDesign } alt="Web Design"/>
                  </ImageContainer>
                  <StyledH3>Web Design</StyledH3>
                  <StyledH4 style={{ color:"gray" }}>Not Available</StyledH4>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard onClick={this.toggle2}>
                  <ImageContainer>
                    <img src={ coding } alt="Coding"/>
                  </ImageContainer>
                  <StyledH3>Programming</StyledH3>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard onClick={this.toggle3}>
                  <ImageContainer>
                    <img src={ seo } alt="Seo"/>
                  </ImageContainer>
                  <StyledH3>Seo</StyledH3>
                  <StyledH4 style={{ color:"gray" }}>Not Available</StyledH4>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard onClick={this.toggle4}>
                  <ImageContainer>
                    <img src={ marketing } alt="Digital Marketing"/>
                  </ImageContainer>
                  <StyledH3>Digital Marketing</StyledH3>
                  <StyledH4 style={{ color:"gray" }}>Not Available</StyledH4>
                </ServiceCard>
              </CardCol>
            </Row>
            <StyledCardTitle><span style={{ color:"gray" }}>Who hired</span> me?</StyledCardTitle>
            <Row style={{ paddingLeft:"65px" }}>
                <ul>
                    <a href="https://turacoon.com"><li>Turacoon</li></a>
                    <a href="https://okulextra.com"><li>OkulExtra</li></a>
                    <a href="https://birebirci.com"><li>Birebirci</li></a>
                    <a href="https://besteditproof.com"><li>Best Edit Proof</li></a>
                    <a href="https://araguru.com"><li>Araguru</li></a>
                    <a href="https://setyourmotivation.com"><li>SetYourMotivation</li></a>
                    <a href="https://createtolearn.online"><li>CreateToLearn</li></a>
                    <a href="https://myfundaction.org.nz"><li>MyFundAction</li></a>
                    <a href="https://ekotify.com"><li>Ekotify</li></a>
                </ul>
            </Row>
          </Card>
        </Container>

        <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className} style={{  marginTop:"10%" }}>
            <ModalHeader toggle={this.toggle5}>Contact Form</ModalHeader>
            <ModalBody>
                <article>
                    You can communicate with me via the following communication channels or contact form on my website and you can be my employer.
                <ul style={{ padding:"40px", marginTop:"50px"}}>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="mailto:hayreddintuzel@gmail.com?"><i className="far fa-envelope"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Email</ContactItemKey>
                  <ContactItemValue>hayreddintuzel@gmail.com</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://api.whatsapp.com/send?phone=905317908874" target="_blank" ><i className="fab fa-whatsapp"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Phone</ContactItemKey>
                  <ContactItemValue>+90 531 790 88 74</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://goo.gl/maps/ob23pSAaMTK2" target="_blank" ><i className="fas fa-map-marked"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Adress</ContactItemKey><ContactItemValue>Çanakkale / Turkey</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA onClick={this.toggle6}><i className="far fa-handshake"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Status</ContactItemKey><ContactItemValue>Available for Hiring</ContactItemValue>
                </li>
              </ul>
                </article>
            </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}  style={{  marginTop:"10%" }}>
            <ModalHeader toggle={this.toggle1}>How Do I Serve You?</ModalHeader>
            <ModalBody>
                <article style={{  padding:"15px" }}>
                    First of all I listen carefully to your needs. Turn your needs into projects and present them to you. Then I draw the wireframes of the web site to be made through profesional drawing programs. I will continue to update the wireframes until you are satisfied. Finally, I deliver the site design to you as an illustrator file or HTML / Javascript code.
                </article>
            </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}  style={{  marginTop:"10%" }}>
            <ModalHeader toggle={this.toggle2}>How Do I Serve You?</ModalHeader>
            <ModalBody>
                <article style={{  padding:"15px" }}>
                    First of all I listen carefully to your needs. I analyze your needs. Turn your needs into projects and present them to you. Then I draw the wireframes of the web site to be made through profesional drawing programs. I will continue to update the wireframes until you are satisfied. Finally, I deploy the project to the server you want. I will carry out project maintenance and repair work free of charge for the next 3 months.
                </article>
            </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}  style={{  marginTop:"10%" }}>
            <ModalHeader toggle={this.toggle3}>How Do I Serve You?</ModalHeader>
            <ModalBody>
                <article style={{  padding:"15px" }}>
                    I can work with you in 3 different ways. First, I can give SEO consultancy service or I can train you about SEO. Secondly, I can do your site's SEO analysis and give you specific SEO advices for your site. Third, I can run all your SEO business and I can provide content, advertising and link support to you or your organization.
                </article>
            </ModalBody>
        </Modal>

        <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}  style={{  marginTop:"10%" }}>
            <ModalHeader toggle={this.toggle4}>How Do I Serve You?</ModalHeader>
            <ModalBody>
                <article style={{  padding:"15px" }}>
                    We can work with you on digital marketing in two different ways. First, I can advise you or your organization about digital marketing (Google Adwords, Google Analytics, Google Tags, Social Media ads) and I can train you or your organization about these topics. Secondly, I can analyze your datas with Google Analytics and, I can run social media and Google Adwords ad campaigns on your behalf.
                </article>
            </ModalBody>
        </Modal>
        <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}  style={{  marginTop:"10%" }}>
      <ModalHeader toggle={this.toggle6}>Contact Form</ModalHeader>
      <ModalBody>
      <Form>
        <FormGroup>
          <Label for="name_">Name</Label>
          <Input type="text" name="name" id="name_" placeholder="Your name.." />
        </FormGroup>
        <FormGroup>
          <Label for="email_">Email</Label>
          <Input type="email" name="email" id="email_" placeholder="Your email adress.." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          If your file is over 2MB in size, you can send your file to hayreddintuzel@gmail.com.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="description_">Job Description</Label>
          <Input type="textarea" name="description" id="description_" />
        </FormGroup>
      </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggle}>Send</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
      </Animated>
  );
}
}
