import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//components
import {Home} from './components/Home';
import {Resume} from './components/Resume';
import {Blog} from './components/Blog';
import {Service} from './components/Service';
import {Contact} from './components/Contact';
import { Container, Row, Col } from 'reactstrap';
//styles
import 'luxbar/build/luxbar.css';


const styles = {
  header : {
    borderRadius :10,
    marginTop: "5px",
  },
  navItem : {
    borderRadius :8,
  },
  body : {
    marginTop : "30px",
    maxWidth: "1340px"
  }
}

//Header Props
const name = "Hayreddin";
const surname = "Tüzel";
const menuItems = [{name:"Home",url:"/",id:1},{name:"Resume",url:"/resume",id:2},{name:"Services",url:"services",id:3},{name:"Blog",url:"blog",id:4},{name:"Contact",url:"/contact",id:5}]

class MyApp extends Component {
  render() {
    const listItems = menuItems.map((item) =>
        <li key={item.id} className="luxbar-item" style={styles.navItem}><Link to={item.url}>{item.name}</Link></li>
    );
    return (
      <Router>
        <Container>
          <header id="luxbar" className="luxbar-default" style={styles.header}>
            <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox"/>
            <div className="luxbar-menu luxbar-menu-right luxbar-menu-material-bluegrey" style={styles.header}>
              <ul className="luxbar-navigation">
                  <li className="luxbar-header">
                  <Link to="/" className="luxbar-brand">{name + " " + surname}</Link>
                    <label className="luxbar-hamburger luxbar-hamburger-doublespin"
                      id="luxbar-hamburger" htmlFor="luxbar-checkbox"> <span></span>
                    </label>
                  </li>
                  {listItems}
              </ul>
            </div>
          </header>
          <Container fluid={true} style={styles.body}>
            <Route exact path="/" component={Home} />
            <Route path="/resume" component={Resume} />
            <Route path="/services" component={Service} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Container>
            <Container style={{ marginTop:"5px", marginBottom:"95px", marginLeft:"50px"}}>
                <small style={{ color:"gray" }}>Created with <a href="https://reactjs.org/" target="_blank" style={{ color:"pink" }}>React.js</a> by <span style={{ color:"black" }}>Hayreddin Tüzel</span></small>
            </Container>
            <small style={{ color:"gray", position:"absolute", bottom:'1px', right:'50px'}}>Last Update: December 2020</small>
        </Container>
      </Router>
    );
  }
}
export default MyApp;
