import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';

import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//Images
import profilePic from '../images/profile.jpg';
import background from '../images/background.jpg';

//Loader
import LoadingScreen from 'react-loading-screen';

//inline styles
const styles = {
  cardTop: {
    backgroundImage: `url(${profilePic})`,
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

  cardImage : {
    height: "180px"
  }


};

//Styled Components

const StyledCardTop = styled(Row)`
  background-image: url(${background});
  background-size : cover;
  margin: 0px;
  border-top-right-radius : 20px;
  border-top-left-radius : 20px;
  height: 300px;

  @media only screen and (max-width: 768px) {
    height: 400px;
  }
`;

const StyledName = styled.h1`
  margin-top : 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top : 10px;
    font-size: 2em;
  }
`;

const SocialIconsDiv = styled.div`
  margin-top:20px;
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

const StyledJob = styled.h2`
  margin-top : 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1em;
  text-align: center;
`;

const StyledSocialIconsCol = styled(Col)`
  padding-left : 37.5%;


  @media only screen and (max-width: 768px) {
    padding-left : 30%;
  }

    @media only screen and (max-width: 493px) and (max-width: 767px) {
    padding-left : 20%;
  }

    @media only screen and (max-width: 992px) and (min-width: 769px) {
    padding-left : 29%;
  }
`;


const StyledCardImage = styled(CardImg)`

  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  -webkit-transition: top 0.3s, box-shadow 0.3s; /* For Safari 3.1 to 6.0 */
  transition: top 0.3s, box-shadow 0.3s;
  background-position:center;
  background-size:cover;
  height: 80%;
  width: 120px;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
  width: 60%;
  height: 180px;
  position : relative;
  left: 20%;
  top: 30px;


  }

  @media only screen and (min-width: 768px) and (max-width: 981px) {
    position : relative;
    top : 70px;
    left: 30px;
    width: 100%;
    height: 150px;

      &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 4px 25px 40px, rgba(0, 0, 0, 0.5) 5px 17px 19px;
    top: 35px;
    }
  }

    @media only screen and (min-width: 982px) {
    position : relative;
    top : 50px;
    left: 80px;
    width: 100%;
    height: 230px;

      &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 4px 25px 40px, rgba(0, 0, 0, 0.5) 5px 17px 19px;
    top: 35px;
    }
  }
`;

const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
`;

const StyledCardText = styled(CardTitle)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height : 24px;
`;

const DownloadButton = styled(Button)`
  margin-top : 25px;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  padding: 0px 1.5em;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px;

  &:hover {
    background-color: #fff;
    color: pink;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
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

const CardCol = styled(Col)`

  margin-top: 25px;
  padding-left : 30px;
`;

const NonStyledA = styled.a`
  text-decoration: none;
  color:black;

  &:hover {
    text-decoration: none;
    color:pink;
  }
`;


const animation = ["fadeIn","fadeInDown","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: false,
      name: false,
      description: false,
      mailing:false
    };

    this.toggle = this.toggle.bind(this);
    this.handleInvalidSubmit = this.handleInvalidSubmit.bind(this);
    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.mailing = this.mailing.bind(this);

  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  fileChangedHandler(event) {
    console.log(event.target.files[0]);
    this.setState({file: event.target.files[0]})

  }

  descriptionChange(event) {
    this.setState({description: event.target.value})
  }

  mailing() {
      this.setState({mailing: !this.state.mailing})
  }


  handleValidSubmit(event, values) {
    this.mailing();
    var self = this;
    const data = new FormData(event.target);
    const formData = new FormData();
        formData.append( 'image', this.state.file );
        formData.append( 'name', values.name );
        formData.append( 'email', values.email );
        formData.append( 'description', this.state.description);
        axios.post('/contact-form',
        formData
      )
      .then(function (response) {
        console.log(response);
        self.setState({mailing: !self.state.mailing})
        swal("Message Sended!", "I will return to you as soon as possible.", "success");
      })
      .catch(function (error) {
        console.log(error);
        self.setState({mailing: !self.state.mailing})
        swal("Message Not Sended!", "There are an error! Please try again!", "error");
      })
  }

  handleInvalidSubmit(event, errors, values) {
    this.setState({email: values.email, error: true, mailing:false});
  }

  render() {
  return (
  <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
    <Container fluid={true}>
      <Card style={styles.card}>
        <StyledCardTop>
          <Col xs="12" sm="12" md="3">
            <StyledCardImage top src={profilePic} alt="Card image cap"/>
          </Col>
          <Col xs="12" sm="12" md="9">
            <StyledName>Hayreddin Tüzel</StyledName>
            <StyledJob>Full-Stack Web Developer</StyledJob>
            <SocialIconsDiv>
              <Row>
                <StyledSocialIconsCol>
                <StyledA target="_blank" href="https://github.com/htuzel"><i className="fab fa-github"></i></StyledA>
                <StyledA target="_blank" href="https://twitter.com/devneeddev"><i className="fab fa-twitter"></i></StyledA>
                <StyledA target="_blank" href="https://www.instagram.com/hayreddin.tuzel/"><i className="fab fa-instagram"></i></StyledA>
                <StyledA target="_blank" href="https://www.linkedin.com/in/hayreddin-tüzel-58a759125"><i className="fab fa-linkedin"></i></StyledA>
                </StyledSocialIconsCol>
              </Row>
            </SocialIconsDiv>
          </Col>
        </StyledCardTop>
        <CardBody style={{ marginTop:"60px" }}>
          <Row>
            <CardCol xs="12" sm="12" md="6">
              <StyledCardTitle><span style={{ color:"gray" }}>Hayreddin</span> <span>Tüzel</span></StyledCardTitle>
              <StyledCardText>
                  <p>I have been working in different areas of computer science since 2010. In this process, I completed my undergraduate with a first degree (Computer Engineering Department) in 2013. Since 2016, I have developed myself in web / mobile programming. </p>
                  <p> In this process, I have been involved in the developing of many websites and web/mobile apps as a freelancer. And now I am working as a Commerce Cloud Developer for more than 3 years</p>
              </StyledCardText>
              <DownloadButton><NonStyledA href="hayreddintuzelcv.pdf" download>Download Resume</NonStyledA></DownloadButton>
            </CardCol>
            <CardCol xs="12" sm="12" md="6" >
              <ul style={{ paddingLeft:"0px", paddingTop:"30px" }}>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="mailto:hayreddintuzel@gmail.com?"><i className="far fa-envelope"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Email</ContactItemKey>
                  <ContactItemValue>hayreddintuzel@gmail.com</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://api.whatsapp.com/send?phone=905317908874" target="_blank" ><i className="fab fa-whatsapp"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Phone</ContactItemKey>
                  <ContactItemValue>+49 162 818 7308 / +90 531 790 8874</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://goo.gl/maps/ob23pSAaMTK2" target="_blank" ><i className="fas fa-map-marked"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Adress</ContactItemKey><ContactItemValue>Stuttgart / Germany</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA onClick={this.toggle}><i className="far fa-handshake"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Status</ContactItemKey><ContactItemValue>Contact </ContactItemValue>
                </li>
              </ul>
            </CardCol>
          </Row>
        </CardBody>
      </Card>
    </Container>
    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      <ModalHeader toggle={this.toggle}>Contact Form</ModalHeader>
      <AvForm onValidSubmit={this.handleValidSubmit} onInvalidSubmit={this.handleInvalidSubmit}>
      <ModalBody>
          <AvField name="name" label="Name" required />
          <AvField name="email" label="Email Address" type="email" required />
          <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" onChange={this.fileChangedHandler}/>
          <FormText color="muted">
          * Only .pdf, .docx, .doc files.  If your file is is different format or over 2MB in size, you can send your file to hayreddintuzel@gmail.com.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="description_">Job Description</Label>
          <Input type="textarea" name="description" id="description_" onChange={this.descriptionChange}/>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <LoadingScreen
        loading={this.state.mailing}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        >
        <Button color="primary">Send</Button>{' '}
        </LoadingScreen>
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
      </AvForm>
    </Modal>

  </Animated>
  );}
};


