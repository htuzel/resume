import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//images
import background from '../images/background.jpg';
import laravel from '../images/laravel.png';
import simple from '../images/simple.jpg'

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

const StyledH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  margin : auto;
`;

const CardCol = styled(Col)`
  margin-top: 5px;
  padding : 2em;
`;

const NonStyledA = styled.a`
  text-decoration: none;
  color:black;

  &:hover {
    text-decoration: none;
    color:gray;
  }
`;

const animation = ["fadeIn","fadeInDown","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export function Blog() {
  return (
    <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Blog</StyledH2>
            </StyledCardTop>
            <Row style={{ paddingRight:"20px" }}>
            <CardCol xs="12" sm="12" md="6">
              <time datetime="2014-09-20" className="icon">
                <em>2018</em>
                <strong>July</strong>
                <span style={{ paddingTop:"15px" }}>10</span>
              </time>
              <Card>
                <NonStyledA href="https://medium.com/@hayreddintuzel/how-to-learn-laravel-a-roadmap-from-beginner-to-advanced-5414640362e8" target="_blank">
                <CardImg top width="100%" src={laravel} alt="Laravel" />
                <CardBody style={{ textAlign:"center" }}>
                  <CardTitle>Laravel</CardTitle>
                  <CardSubtitle>How to Learn Laravel— A roadmap from beginner to advanced</CardSubtitle>
                </CardBody>
                </NonStyledA>
              </Card>
              </CardCol>
              <CardCol xs="12" sm="12" md="6">
              <time datetime="2014-09-20" class="icon">
                <em>2018</em>
                <strong>June</strong>
                <span style={{ paddingTop:"15px" }}>01</span>
              </time>
              <Card>
                <NonStyledA href="https://medium.com/@hayreddintuzel/connecting-laravel-forge-using-heidisql-via-ssh-206febea714f" target="_blank">
                <CardImg top width="100%" src={laravel} alt="Laravel" />
                <CardBody style={{ textAlign:"center" }}>
                  <CardTitle>Laravel</CardTitle>
                  <CardSubtitle>Connecting Laravel Forge Using HeidiSQL via SSH</CardSubtitle>
                </CardBody>
                </NonStyledA>
              </Card>
              </CardCol>
            </Row>
            <Row style={{ paddingRight:"20px" }}>
            <CardCol xs="12" sm="12" md="6">
              <time datetime="2014-09-20" className="icon">
                <em>2018</em>
                <strong>September</strong>
                <span style={{ paddingTop:"15px" }}>02</span>
              </time>
              <Card>
                <NonStyledA href="https://medium.com/@hayreddintuzel/basit-kod-yazmak-i%C3%A7in-basit-kurallar-rehberi-d2bcc3938a6b" target="_blank">
                <CardImg top width="100%" src={simple} alt="Simple Coding" />
                <CardBody style={{ textAlign:"center" }}>
                  <CardTitle>Coding</CardTitle>
                  <CardSubtitle>Basit Kod Yazmak İçin Basit Kurallar Rehberi (Turkish)</CardSubtitle>
                </CardBody>
                </NonStyledA>
              </Card>
              </CardCol>
            </Row>
          </Card>
        </Container>
      </Animated>
  );
}

