import React from "react";
import AlbumCard from "./cards/AlbumCard";
import "../style/Homepage.css";
import { Col, Row, ListGroup, Container, } from "react-bootstrap";
import MediaPlayer from "./MediaPlayer";
import { getTracks } from "../redux/actions/index";
import { connect } from "react-redux";
import SideNav from "./SideNav";
import { Link } from "react-router-dom";
import Jumbotron from './Jumbotron'
import {homeContent} from '../redux/actions'
import TrackCard from './cards/TracksCard'

const mapStateToProps = (state) => ({ homeContent: state.homeContent });
const mapDispatchToProps = ( )=>{
  return {getHomeContent:homeContent}
}

class Homepage extends React.Component {
  componentDidMount(){
    this.props.getHomeContent().then(console.log(this.props.homeContent))
  }
  render() {
    return (
      <>
        <Container fluid>
          <Row className="main">
            <SideNav />
            <Col lg={10} className="p-5">
              <Jumbotron />
              <Row className="p-5">
                {this.props.homeContent.map(e=>{
                  return (<TrackCard track={e} />)
                })}
              </Row>
            </Col>
          </Row>
        </Container>
        <MediaPlayer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Homepage);
