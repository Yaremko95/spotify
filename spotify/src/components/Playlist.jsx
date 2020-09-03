import React, { Component } from "react";
import { Container, Row, Col, Table, ListGroup } from "react-bootstrap";
import axios from "axios";
import MediaPlayer from "./MediaPlayer";
import { getSingleAlbum } from "../redux/actions/index";
import { connect } from "react-redux";
import {
  faHome,
  faSearch,
  faBookOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Sidenav from "./SideNav";

const mapDispatchToProps = () => {
  return {
    getSingleAlbum,
  };
};
const mapStateToProps = (state) => ({
  album: state.singleAlbum,
});

class playlist extends Component {
  state = {
    loading: false,
    albumId: this.props.match.params.id,
    data: [],
  };
  componentDidMount() {
    this.props.getSingleAlbum(this.props.match.params.id);
  }
  render() {
    return (
      <>
        <Container fluid className="main">
          <Row className="main">
            <Col xs={0} md={2} lg={2} className="Navbar">
              <ListGroup className="text-center">
                <ListGroup.Item>
                  <img
                    className="img-fluid"
                    src="https://i.ya-webdesign.com/images/spotify-logo-png-transparent-6.png"
                  />
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon className="mr-2" size="lg" icon={faHome} />
                  <Link to="/home">Home</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon className="mr-2" size="lg" icon={faSearch} />
                  <Link to="/search">Search</Link>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon
                    className="mr-2"
                    size="lg"
                    icon={faBookOpen}
                  />
                  <Link to="/myplaylist">Playlist</Link>
                </ListGroup.Item>
                <ListGroup.Item className="mt-auto mb-5">
                  <FontAwesomeIcon className="mr-2" size="lg" icon={faUser} />
                  User
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={10} lg={10}>
              <Container fluid>
                {this.props.album.fetched ? (
                  <Row className="my-5">
                    <Col sm={12} md={4} lg={4} className="text-center ">
                      <div className="sticky-top PlaylistCover">
                        <img
                          src={this.props.album.singleAlbum.cover_medium}
                          className="img-fluid"
                        ></img>
                        <p>{this.props.album.singleAlbum.title}</p>
                        <p>{this.props.album.singleAlbum.artist.name}</p>
                      </div>
                    </Col>
                    <Col sm={12} md={8} lg={8}>
                      <Table responsive>
                        {this.props.album.singleAlbum.tracks.data.map(
                          (element, index) => {
                            return (
                              <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{element.title}</td>
                                <td>{Math.floor(element.duration / 60)}</td>
                              </tr>
                            );
                          }
                        )}
                      </Table>
                    </Col>
                  </Row>
                ) : (
                  <div className="welcomeSearch">Loading</div>
                )}
              </Container>
            </Col>
          </Row>
        </Container>
        <MediaPlayer />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(playlist);
